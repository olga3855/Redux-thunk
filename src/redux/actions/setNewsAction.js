import {
	GET_USERS,
	GET_TODOS,
	GET_PHOTOS
} from '../constans'

export const setUsersAction = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(data => data.json())
			.then(data => dispatch({ type: GET_USERS, payload: data }))
	}
}

export const setTodosAction = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(data => data.json())
			.then(data => dispatch({ type: GET_TODOS, payload: data }))
	}
}

export const setPhotosAction = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(data => data.json())
			.then(data => dispatch({ type: GET_PHOTOS, payload: data }))
	}
}
