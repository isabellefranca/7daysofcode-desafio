import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import PropTypes from 'prop-types';

import { Home } from './Home';
import { NotFound } from './NotFound';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';

const PrivateRoute = ({ children }) => {
    if(!localStorage.getItem('access-token')) {
        return <Navigate to='/sign-in' />
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

const PublicRoute = ({ children }) => {
    if(localStorage.getItem('access-token')) {
        return <Navigate to='/' />
    }
    return children;
};

PublicRoute.propTypes = {
    children: PropTypes.node,
};

export const Pages = () => (
    <Router>
        <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
            <Route path="/sign-up" element={<PublicRoute><SignUp /></PublicRoute>} />
            <Route path="/sign-in" element={<PublicRoute><SignIn /></PublicRoute>} />
        </Routes>
    </Router>
);