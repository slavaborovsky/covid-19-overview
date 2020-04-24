import { useEffect, useRef } from 'react';
export function useInterval(callback, delay) {
	const savedCallbackRef = useRef();

	useEffect(() => {
		savedCallbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const tick = () => {
			savedCallbackRef.current();
		};

		if (delay !== null) {
			const intervalId = setInterval(tick, delay);
			return () => clearInterval(intervalId);
		}
	}, [delay]);
}
