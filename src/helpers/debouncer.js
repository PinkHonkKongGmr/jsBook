const Debounce = (interval) => {
    let lastCall = 0;
    return () => {
        let priviousCall = lastCall;
        lastCall = Date.now();
        if (priviousCall === 0 || lastCall - priviousCall > interval) {
            return true;
        }
    };
};

export default Debounce;
