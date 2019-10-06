import React from 'react';
import PropTypes from 'prop-types';
import styles from './OpzBuddyPrivacyPolicy.scss';
import Media from 'react-bootstrap/Media';

const OpzBuddyPrivacyPolicy = props => (
	<div className="Privacy-policy">
		<Media>
			<Media.Body>
				<h4>OP-Z Buddy Privacy Policy</h4>
				<p>
					OP-Z Buddy app, does not collect or store user's data other than the internal memory of the device on which application is running (i.e user's personal device).
				</p>
				<p>
					App listens to MIDI data received from a specific type of device (OP-Z Synth by Teenage Engineering) and visualizes the parameters.
				</p>
				<p>
					App also requires microphone, camera, and internal/external memory access on user's device, this is to provide audio/video recording and data backup(locally) features.
    			</p>
				<p>
					OP-Z Buddy does not access any other audio device other Teenage Engineering's OP-Z.		
				</p>
			</Media.Body>
		</Media>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class OpzBuddyPrivacyPolicy extends React.Component {
//   render() {
//     return <div>This is a component called OpzBuddyPrivacyPolicy.</div>;
//   }
// }

const OpzBuddyPrivacyPolicyPropTypes = {
	// always use prop types!
};

OpzBuddyPrivacyPolicy.propTypes = OpzBuddyPrivacyPolicyPropTypes;

export default OpzBuddyPrivacyPolicy;
