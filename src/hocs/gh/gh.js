import React from 'react';
import WelcomePage from '../../components/welcomepage';
import SearchOnSite from '../../components/searchonsite';
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
        };
    }

    onInputHandler = (e) => {
        const getUsersRepsFromAPI = (username) => {
            const url = `https://api.github.com/users/${username}/repos`;

            return fetch(url).then((response) => {
                if (response.ok) {
                    this.setState({ isLoaded: true });
                    return response.json();
                } else {
                    this.setState({ pack: 'ошибка соединения с сервером', error: true });
                }
            });
        };

        const recordRepsToList = (pack) => {
            this.setState({ pack });
        };

        fromEvent(e.target, 'keyup')
            .pipe(
                debounceTime(700),
                map((event) => event.target.value),
                filter((val) => val.length > 2),
                distinctUntilChanged(),
                mergeMap((value) => {
                    return from(getUsersRepsFromAPI(value)).pipe(catchError((err) => of([])));
                })
            )
            .subscribe({
                next: (pack) => recordRepsToList(pack),
                error: this.setState({ pack: 'не корректный запрос' }),
            });
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
                console.log('og');
                let list = this.state.pack.map((repo, ind) => <li>{repo.name}</li>);
                result = <WelcomePage data={<div>{list}</div>} />;
            } else {
                result = <div>Введите запрос</div>;
            }
        }

        return (
            <div>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Поиск пользователей GitHub"
                    aria-label="github"
                    aria-describedby="basic-addon1"
                    onInput={this.onInputHandler}
                />
                <SearchOnSite />
                {result}
            </div>
        );
    }
}
export default Gh;
