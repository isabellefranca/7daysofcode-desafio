import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const App = ({ children }) => <>{children}</>;

App.propTypes = {
  children: PropTypes.node,
};
