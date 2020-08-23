exports.getDay = () => {
    const today = new Date();
    const options = {
        weekday: "long",
    }
    return (today.toLocaleDateString("en-US", options))
};

exports.getMonth = () => {
    const today = new Date();
    const options = {
        month: "long",
    }
    return (today.toLocaleDateString("en-US", options))
};

exports.getYear = () => {
    const today = new Date();
    const options = {
        year: "numeric",
    }
    return (today.toLocaleDateString("en-US", options))
};