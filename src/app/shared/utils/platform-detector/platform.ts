export function appPlatform() {
	return typeof window !== 'undefined' ? 'browser' : 'server';
}
