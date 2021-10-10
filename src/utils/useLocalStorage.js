import React from 'react';

function useLocalStorage( key, initialValue="", setterFunc, serialize=true){
    const [ state, setState ] = React.useState( () => {
        const valueInLocal = window.localStorage.getItem(key);
        if( valueInLocal ){
            return serialize ? JSON.parse(valueInLocal) : valueInLocal;
        }
        window.localStorage.setItem(key, serialize ? JSON.stringify(initialValue) : initialValue );
        return initialValue;
    });

    React.useEffect( ()=> {
        window.localStorage.setItem(key, serialize ? JSON.stringify(state) : state );
        if( setterFunc && typeof setterFunc === 'function' ) {
            setterFunc(state);
        }
    }, [state, key, setterFunc, serialize] )

    return [state, setState];
}

export default useLocalStorage;