import React from 'react';
import WelcomePage from '../../components/welcomepage';
import { fromEvent, from, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, mergeMap, catchError, filter } from 'rxjs/operators';

class Gh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: null,
            data: 'nope',
            pack: 'Введите запрос',
            error: false,
            lastCall: 0,
        };
    }

    getUsersRepsFromAPI = (username) => {
        const url = `https://api.github.com/users/${username}/repos`;

        return fetch(url).then((response) => {
            if (response.ok) {
                this.setState({ isLoaded: true, error: false });
                return response.json();
            } else {
                this.setState({ pack: 'ошибка соединения с сервером', error: true });
            }
        });
    };

    recordRepsToList = (pack) => {
        this.setState({ pack });
    };

    debounce = async (interval, username) => {
        let priviousCall = this.state.lastCall;
        this.setState({ lastcall: Date.now });
        if (priviousCall === 0 || (priviousCall - this.state.lastCall > interval && username !== this.username)) {
            //почему this.uername сохраняется, а lastcall нет
            this.username = username;
            let pack = await this.getUsersRepsFromAPI(username);
            this.recordRepsToList(pack);
        }
    };

    onInputHandler = (e) => {
        if (e.target.value.length === 0) this.setState({ pack: 'введите запрос' });
        if (e.target.value.length > 2) this.debounce(700, e.target.value);
        // реализация rxjs
        // fromEvent(e.target, 'keyup')
        //     .pipe(
        //         debounceTime(700),
        //         map((event) => event.target.value),
        //         filter((val) => val.length > 2),
        //         distinctUntilChanged(),
        //         mergeMap((value) => {
        //             return from(this.getUsersRepsFromAPI(value)).pipe(catchError((err) => of([])));
        //         })
        //     )
        //     .subscribe({
        //         next: (pack) => this.recordRepsToList(pack),
        //         error: this.setState({ pack: 'не корректный запрос' }),
        //     });
    };

    render() {
        let result = null;
        const { error, isLoaded } = this.state;
        if (error) {
            result = <div>Ошибка</div>;
        } else if (!isLoaded) {
            result = <div>{this.state.pack}</div>;
        } else {
            if (Array.isArray(this.state.pack)) {
                console.log('pack', this.state.pack);
                let list = this.state.pack.map((repo, ind) => <li key={ind}>{repo.name}</li>);
                result = <WelcomePage data={<div>{list}</div>} />;
            } else {
                result = <div>Введите запрос</div>;
            }
        }

        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Поиск пользователей GitHub"
                    aria-label="github"
                    aria-describedby="basic-addon1"
                    onInput={this.onInputHandler}
                />
                {result}
            </div>
        );
    }
}
export default Gh;
