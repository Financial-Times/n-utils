export const emptyCheck = value => {
	if (
		value === null ||
		typeof value === 'undefined' ||
		(typeof value === 'string' && value === '')
	) {
		return true;
	}
	return false;
};

export const trimObject = obj => {
	const output = Object.create(obj);
	Object.keys(obj).forEach(key => {
		const emtpy = emptyCheck(obj[key]);
		if (!emtpy) {
			output[key] = obj[key];
		}
	});
	return output;
};

export const onlyValues = obj => {
	const output = Object.create(obj);
	Object.keys(obj).forEach(key => {
		const isEmtpy = emptyCheck(obj[key]);
		const isFunc = typeof obj[key] === 'function';
		if (!isEmtpy && !isFunc) {
			output[key] = obj[key];
		}
	});
	return output;
};

export const removeObjectKeys = obj => keys => {
	const output = Object.create(Object.getPrototypeOf(obj));
	Object.assign(output, obj);
	if (Array.isArray(keys)) {
		Object.keys(obj).forEach(key => {
			if (keys.includes(key)) {
				delete output[key];
			}
		});
		return output;
	} else if (typeof keys === 'string' && keys !== '') {
		const k = keys;
		Object.keys(obj).forEach(key => {
			if (key === k) {
				delete output[key];
			}
		});
		return output;
	}
	throw Error('keys need to be formatted in [string] or non-empty string');
};
