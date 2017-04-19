import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { pathToJS } from 'react-redux-firebase';
import { getFirebase } from 'react-redux-firebase';

export const UserIsAuthenticated = UserAuthWrapper({
    wrapperDisplayName: 'UserIsAuthenticated',
    authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
    authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'isInitializing') === true,
    predicate: auth => auth !== null,
    redirectAction: routerActions.replace
});

export const UserIsNotAuthenticated = UserAuthWrapper({
    wrapperDisplayName: 'UserIsNotAuthenticated',
    allowRedirectBack: false,
    failureRedirectPath: '/',
    authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
    authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'isInitializing') === true,
    predicate: auth => auth === null,
    redirectAction: routerActions.replace
});

export function createUserIfNotInUsers (user){
    const { uniqueSet } = getFirebase();
    uniqueSet(`users/${user.uid}`, {
        email: user.email
    });
}