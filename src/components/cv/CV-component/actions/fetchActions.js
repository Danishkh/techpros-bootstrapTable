export function receiveData(jsonData) {
    return {
        type: 'RECEIVEDATA',
        data: jsonData
    }
}

export function addUser(user) {
    return {
        type: 'ADDUSER',
        user
    }
}

export function fetchData() {
    return dispatch => {
        fetch("http://jsonplaceholder.typicode.com/users").then(response => {
            return response.json()
        })
            .then(jsonData => dispatch(receiveData(jsonData)))
            .catch(error =>
                dispatch({type: 'FETCHFAILED', error})
            );
    };
}
