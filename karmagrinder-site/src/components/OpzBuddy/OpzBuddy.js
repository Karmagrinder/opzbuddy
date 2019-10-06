import React from 'react';
import PropTypes from 'prop-types';
import styles from './OpzBuddy.scss';

const OpzBuddy = props => (
	<div>This is a component called OpzBuddy.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class OpzBuddy extends React.Component {
//   render() {
//     return <div>This is a component called OpzBuddy.</div>;
//   }
// }

const OpzBuddyPropTypes = {
	// always use prop types!
};

OpzBuddy.propTypes = OpzBuddyPropTypes;

export default OpzBuddy;
