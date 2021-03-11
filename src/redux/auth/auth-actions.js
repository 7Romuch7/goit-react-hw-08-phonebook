import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('contacts/registerRequest');
const registerSuccess = createAction('contacts/registerRequest');
const registerError = createAction('contacts/registerRequest');

export const loginRequest = createAction('contacts/loginRequest');
export const loginSuccess = createAction('contacts/loginRequest');
export const loginError = createAction('contacts/loginRequest');

export const logoutRequest = createAction('contacts/logoutRequest');
export const logoutSuccess = createAction('contacts/logoutRequest');
export const logoutError = createAction('contacts/logoutRequest');

export const getCurrentUserRequest = createAction('contacts/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('contacts/getCurrentUserSuccess');
export const getCurrentUserError = createAction('contacts/getCurrentUserError');

export default {
    registerRequest,
    registerSuccess,
    registerError
}