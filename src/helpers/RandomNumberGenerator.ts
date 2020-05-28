export function randomNumberWithRange(max: number, min: number = 0): number {
	return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

export function randomNumber(): number {
	return Math.floor(Math.random() * 100000);
}
