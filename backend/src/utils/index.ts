type Time = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

const timeToSeconds = (time: Partial<Time>): number => {
	let result = (time?.days ?? 0) * 24 * 3600;
	result += (time?.hours ?? 0) * 3600;
	result += (time?.minutes ?? 0) * 60;
	result += time?.seconds ?? 0;

	return result;
};

export { Time, timeToSeconds };
