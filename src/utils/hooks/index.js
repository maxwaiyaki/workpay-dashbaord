import { useState, useCallback } from 'react';

// custom hook to help handle common open, close, or toggle scenarios
export function useDisclosure(defaultIsOpen) {
	const [isOpen, setIsOpen] = useState(Boolean(defaultIsOpen));
	const onClose = useCallback(() => setIsOpen(false), []);
	const onOpen = useCallback(() => setIsOpen(true), []);
	const onToggle = useCallback(
		() => setIsOpen((prevIsOpen) => !prevIsOpen),
		[],
	);
	return { isOpen, onOpen, onClose, onToggle };
}

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
