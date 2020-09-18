const days = {
	Sun: 'Sunday',
	Mon: 'Monday',
	Tue: 'Tuesday',
	Wed: 'Wednesday',
	Thu: 'Thursday',
	Fri: 'Friday',
	Sat: 'Saturday',
};

function getOrdinalNum(n) {
	return (
		n +
		(n > 0
			? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
			: '')
	);
}

export function getMonth(dateString, month = 'long') {
	let value = '';
	try {
		const monthName = new Intl.DateTimeFormat('en-US', { month }).format;
		const date = new Date(dateString);
		value = monthName(date);
	} catch (error) {
		// console.error(`getMonth`, error);
	}
	return value;
}

export function getDate(dateString) {
	let value = '';
	try {
		const date = new Date(dateString);
		value = `0${date.getDate()}`.slice(-2);
	} catch (error) {
		// console.error(`getDate`, error);
	}
	return getOrdinalNum(value);
}

export function getDay(dateString) {
	let value = '';
	try {
		const date = new Date(dateString);
		const dayName = date.toString().split(' ')[0];
		value = days[dayName];
	} catch (error) {
		// console.error(`getDay`, error);
	}
	return value;
}
