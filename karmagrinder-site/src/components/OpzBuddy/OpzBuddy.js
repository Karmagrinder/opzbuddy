import React from 'react';
import PropTypes from 'prop-types';
import styles from './OpzBuddy.scss';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';

const OpzBuddy = props => (
	<div>
		<Media>
			<Media.Body>
				<Card bg="dark" text="light">
					<Card.Title className="title-text">OP-Z Buddy App Help</Card.Title>
					<Card.Body>
						<Card.Text className="general-text">
							This app provides display, audio/video recording and data backup functionality for Teenage Engineering OP-Z.
						</Card.Text>
					</Card.Body>
					<Card.Body>
						<Card bg="dark" text="light">
							<Card.Title className="title-text" >1. CONNECTING OP-Z TO PHONE</Card.Title>
							<Card.Subtitle className="title-text">a) Via Bluetooth:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									You can use one of the many available Bluetooth-MIDI apps on the Google App store for connecting OP-Z to your phone via bluetooth.
									<br />
									Launch the app only after OP-Z is connected to the phone.
									<br />
								</Card.Text>
								
							</Card.Body>
							<Card.Subtitle className="title-text">b) Via USB-Cable:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									Wait for 2-3 seconds after OP-Z has booted up and then connect OP-Z to your phone via USB-OTG adapter.
									Also ensure that your phone supports USB-OTG functionality.
								</Card.Text>
							</Card.Body>								
						</Card>
						<Card bg="dark" text="light">
							<Card.Title className="title-text">2. RECORDER:</Card.Title>
							<Card.Body>
								<Card.Text className="general-text">
									To enable audio/video recording functionality you must connect OP-Z via USB-Cable. When the App detects OP-Z as audio device, the recording features will be enabled.
									Audio is recorded in WAV(stereo) format with 16 BIT and 44.1K hz sampling frequency. 
									Video is recorded in MPEG4 format and audio is encoded in AAC with same bit depth and sampling frequency as audio-recorder.
								</Card.Text>

							</Card.Body>
							<Card.Subtitle className="title-text">2.1 Android Q (10) Compatibility:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									On Android Q and above, recorded media will  be saved to the SD-Card or internal storage in case the SD-Card is not present.
									Audio will be saved under Music folder, and videos will be saved under Video folder.
									<br />
									The audio source mapping is changed in Android Q ( for some reason... thanks for sleepless nights Google), in the previous versions of android the external-mic( OP-Z Audio) was mapped to "MIC".
									At least on Pixel-2 phones running Android Q the external-mic is mapped to "Voice-Recognition".
									<br />
									In android-Q the default audio source will be set to "VOICE_RECOGNITION", in case this results in no audio in your recordings, there is a drop-down menu to switch audio-source.
									Usually it should be "MIC" or "VOICE_RECOGNITION".
									<br />
								</Card.Text>
							</Card.Body>
						</Card>
						<Card bg="dark" text="light">
							<Card.Title className="title-text">3. DATA BACKUP</Card.Title>
							<Card.Body>
								<Card.Text className="general-text">
									When OP-Z is connected in content disk-mode, app will enable the data-backup feature. Backups of OP-Z data are stored in the device internal memory. 
									You can create backup via direct folder copy or create a zip-archive.
								</Card.Text>

							</Card.Body>
							<Card.Subtitle className="title-text">3.1 Android Q (10) Compatibility:</Card.Subtitle>
							<Card.Body>
								<Card.Text className="general-text">
									On Android Q and above OP-Z data backups will be saved to the "Download" folder.
									<br />
									Also due to security related limitations enforced by Android Q, the app can no longer gain access to OP-Z disk, therefore user must grant permission manually by selecting the correct OP-Z Disk root.
									<br />
								</Card.Text>
							</Card.Body>
						</Card>
						<Card bg="dark" text="light">
							<Card.Title className="title-text">4. Unsupported devices</Card.Title>
							<Card.Body>
								<Card.Text className="general-text">
									Samsung S20: Samsung has done something with how USB-Audio drivers work. Audio and Video recorded with OP-Z Buddy will result in no audio.
									Rest of the functionality should still work.
									<br />
									In case the app does not work on your phone, please contact me via mail, I will provide a refund.
								</Card.Text>
							</Card.Body>							
						</Card>
					</Card.Body>
				</Card>	
			</Media.Body>
		</Media>

	</div>
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
