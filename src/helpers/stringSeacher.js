const stringInComponents = function () {
    const stringSearcher = (el, arr, root) => {
        if (typeof el === 'string') {
            arr.push({ content: el, root });
            return arr;
        } else if (Array.isArray(el.props.children)) {
            el.props.children.forEach((element) => {
                stringSearcher(element, arr, root);
            });
        } else if (el.props.children !== void 0) stringSearcher(el.props.children, arr, root);

        return arr;
    };
    return stringSearcher;
};

export default stringInComponents;
