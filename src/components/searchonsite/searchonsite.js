import React from 'react';
import stringInComponents from '../../helpers/stringSeacher.js';
import Articles from '../../db/articles';

const SearchOnSite = () => {
    const articleAgrigator = stringInComponents();
    let arrays = [];
    for (let key in Articles) {
        articleAgrigator(Articles[key], arrays);
    }
    console.log(arrays);
    return <div>oh</div>;
};
export default SearchOnSite;
