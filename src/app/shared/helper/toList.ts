type KeyValue<T> = {
	key: string;
	value: T[keyof T];
};

export function toList<T extends Record<string, any>>(target: T): KeyValue<T>[] {
	const keys = Object.keys(target);
	return keys.map(key => ({
		key,
		value: target[key]
	}));
}
