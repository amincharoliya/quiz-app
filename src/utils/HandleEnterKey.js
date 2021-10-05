const HandleEnterKey = (event, callback) => {
    let code;

    if(!event || !callback) {
        return;
    }

    if (event.key !== undefined) {
        code = event.key;
    } else if (event.keyCode !== undefined) {
        code = event.keyCode;
    }

    if(code === 'Enter' || code === 13 ){
        callback();
    }
};

export default HandleEnterKey;