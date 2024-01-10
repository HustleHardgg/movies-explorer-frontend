import { lazy } from 'react'
import Main from '../components/Main/Main'
import HeaderMain from "../components/Header__main/Header__main";
import Movies from '../components/Movies/Movies';
import SavedMovies from '../components/SavedMovies/SavedMovies';
import Profile from '../components/Profile/Profile';

/* Default Meta Settings
    footerEnabled: true,
    headerEnabled: true,
    customHeader: defaultHeader, which by now is <Header />
*/

export const publicRoutes = [
    {
        key: 'public.home',
        path: '/home',
        component: () => (<Main />),
        meta: {
            customHeader: <HeaderMain />
        }
    },
]

export const unauthenticatedRoutes = [
    {
        key: 'unauthenticatedRoutes.login',
        path: '/signin',
        component: lazy(() => import('../components/Login/Login')),
        meta: {
            footerEnabled: false,
            headerEnabled: false
        }
    },
    {
        key: 'unauthenticatedRoutes.register',
        path: '/signup',
        component: lazy(() => import('../components/Register/Register')),
        meta: {
            footerEnabled: false,
            headerEnabled: false
        }
    },
]

export const protectedRoutes = [
    {
        key: 'protectedRoutes.movies',
        path: '/movies',
        component: () => (<Movies />),
    },
    {
        key: 'protectedRoutes.savedMovies',
        path: '/saved-movies',
        component: () => (<SavedMovies />),
    },
    {
        key: 'protectedRoutes.profile',
        path: '/profile',
        component: () => (<Profile />),
        meta: {
            footerEnabled: false
        }
    },
]