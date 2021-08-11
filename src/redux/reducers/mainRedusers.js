import {
	GET_USERS,
	GET_TODOS,
	GET_PHOTOS
} from '../constans';


const initialState = {
	users: null,
	todos: null,
	photos: null
}

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload
			};
		case GET_TODOS:
			return {
				...state,
				todos: action.payload
			}
		case GET_PHOTOS:
			return {
				...state,
				photos: action.payload
			}
		default:
			return state
	}
}

export default mainReducer;

