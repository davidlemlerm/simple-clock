import './styles.css';

function zeroPad(dateNumber) {
	if (dateNumber === 0) {
		return '00';
	} else if (dateNumber < 10) {
		return `0${dateNumber}`;
	} else {
		return dateNumber;
	}
}

function updateClock() {
	const date = new Date();
	let hour = date.getHours();
	const amPM = hour > 12 ? 'PM' : 'AM';
	if (hour > 12) {
		hour -= 12;
	}
	hour = zeroPad(hour);
	const minute = zeroPad(date.getMinutes());
	const second = zeroPad(date.getSeconds());
	let clockText = `${hour}:${minute}:${second} ${amPM}`;
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
