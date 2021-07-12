import './styles.css';
import { padStart } from 'lodash';

function updateClock() {
	let date = new Date();
	let hour = date.getHours();
	let amPM;
	if (hour > 12) {
		amPM = 'PM';
	} else {
		amPM = 'AM';
	}
	if (hour > 12) {
		hour -= 12;
	}
	let clockText = `${padStart(hour, 2, '0')}:${padStart(
		date.getMinutes(),
		2,
		'0',
	)}:${padStart(date.getSeconds(), 2, '0')} ${amPM}`;
	let clockElement = document.getElementById('clock');
	clockElement.textContent = clockText;
}
setInterval(updateClock, 100);

if (document.fullscreenEnabled) {
	let cover = document.getElementById('cover');
	cover.addEventListener('click', () => {
		if (
			document.fullScreenElement === null ||
			document.fullscreenElement !== cover
		) {
			cover.requestFullscreen();
		}
	});
}
