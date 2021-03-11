import axios from 'axios';
import authActions from '../../redux/auth/auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());

    try {
        const response = axios.post('/users/signup', credentials)
        dispatch(authActions.registerSuccess(response.data))
    } catch (error) {
        dispatch(authActions.registerError(error.message))
    }
}

export default register;