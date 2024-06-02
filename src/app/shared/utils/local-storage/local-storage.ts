/**
 *  NOTICE: use it if you make sure in Browser
 *  @description
 *
 *
 *
 *  @example
 *  import LocalStorage from '@storage/local-storage';
 *  if(type of window !== 'undefined') {
 *    // your business
 *    LocalStorage.set('key', 123)
 *  }
 *
 *  //------------- or -------------//
 *  import { isBrowser } from '@platform/platform-browser';
 *  if(isBrowser()) {
 *     LocalStorage.set('key', 123)
 *  }
 *
 *
 * */
export default class {
	static setItem<T = unknown>(key: string, data: T): void {
		if (typeof data === 'object') {
			localStorage.setItem(key, JSON.stringify(data));
		} else {
			localStorage.setItem(key, data as string);
		}
	}

	static getItem<TData = string>(key: string): (TData extends object ? TData : string) | null {
		const item = localStorage.getItem(key);
		if (!item) {
			return null;
		}
		try {
			const parsed = JSON.parse(item);
			if (typeof parsed === 'object') {
				return parsed;
			}
			return item as TData extends object ? TData : string;
		} catch (e) {
			return item as TData extends object ? TData : string;
		}
	}

	static removeItem(key: string) {
		localStorage.removeItem(key);
	}

	static clear() {
		localStorage.clear();
	}
}
