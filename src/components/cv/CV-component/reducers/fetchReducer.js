export default function fetchApp(state = [], action) {
    switch(action.type){
        case 'RECEIVEDATA':
            return action.data

        case 'ADDUSER':
            console.log('Inne i reducerrrrrr')
            return [...state, Object.assign({}, action.user)];

        default:
            return state;
    }
}
