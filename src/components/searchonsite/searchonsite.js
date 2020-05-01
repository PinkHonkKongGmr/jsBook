import React, { useState } from 'react';
import stringInComponents from '../../helpers/stringSeacher.js';
import Articles from '../../db/articles';
import { Link } from 'react-router-dom';
import './searchonsite.css';

const SearchOnSite = () => {
    const array = [];
    const [value, setValue] = useState('');
    let result = <div>Результаты поиска</div>;
    const articleAgrigator = stringInComponents();

    for (let key in Articles) {
        if (Articles.hasOwnProperty(key)) articleAgrigator(Articles[key].content, array, Articles[key].link);
    }

    if (value.length > 2) {
        result = array
            .filter((el) => Array.isArray(el.content.toLowerCase().match(value.toLowerCase())))

            .map((el, ind) => (
                <li key={ind}>
                    <span className="title">
                        Ссылка: <Link to={el.root}>Это тут</Link>
                    </span>

                    <span className="title">Совпадение:</span>
                    {el.content}
                </li>
            ));
    }

    return (
        <div>
            <input
                type="text"
                class="form-control search__input"
                placeholder="Поиск по сайту"
                aria-label="search"
                aria-describedby="basic-addon1"
                onInput={(e) => setValue(e.target.value)}
            />
            <ul className="results">{result}</ul>
        </div>
    );
};
export default SearchOnSite;
