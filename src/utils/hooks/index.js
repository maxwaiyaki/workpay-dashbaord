export function useDateTime() {
	const today = new Date();
	const curHr = today.getHours();

	if (curHr < 12) {
		return 'Good Morning';
	}
	if (curHr < 18) {
		return 'Good Afternoon';
	}
	return 'Good Evening';
}
