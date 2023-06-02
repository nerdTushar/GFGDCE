import axios from 'axios';
import swal from 'sweetalert';

export const registerUser = (values) => async dispatch => {
    dispatch({type : 'USER_REGISTER_REQUEST'})
    try {
        await axios.post('/api/users/register',values);
        alert(`${values.name} Registered Successfully`);
        swal(`${values.name} Registered Successfully!`,"success");
        dispatch({type : 'USER_REGISTER_SUCCESS'});
        setTimeout(() => window.location.href = '/login', 2000);
    } catch (error) {
        dispatch({type : 'USER_REGISTER_FAIL',payload : error})
    }
};

export const loginUser = (values) => async dispatch => {
    dispatch({type : 'USER_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/users/login',values);
        alert(`${response.data.name} Login Successfully`);
        swal(`${response.data.name} Login Successfully!`,"success")
        dispatch({type : 'USER_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        setTimeout(() => window.location.href = '/', 2000);
        
    } catch (error) {
        dispatch({type : 'USER_LOGIN_FAIL',payload : error});
    }
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
};