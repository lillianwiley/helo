const initialState = {
    username: '',
    id: '',
    profilePicture: ''
}

const UPDATE_USER = 'UPDATE_USER';


export function updateUser(userObj){
    console.log(userObj)
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {username: action.payload.username, profilePicture: action.payload.profilePicture });
        default:
            return state;
    }
}