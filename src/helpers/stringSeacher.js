const stringInComponents = function () {
    const stringSearcher = (el, arr) => {
        if (typeof el === 'string') {
            arr.push(el);
            return arr;
        } else if (Array.isArray(el.props.children)) {
            el.props.children.forEach((element) => {
                stringSearcher(element, arr);
            });
        } else if (typeof el.props.children !== 'undefined') stringSearcher(el.props.children, arr);

        return arr;
    };
    return stringSearcher;
};

export default stringInComponents;
