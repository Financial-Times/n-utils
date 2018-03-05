import {
	emptyCheck,
	trimObject,
	onlyValues,
	removeObjectKeys
} from '../index';

describe('export correctly', () => {
	it('emptyCheck', () => {
		expect(typeof emptyCheck).toBe('function');
	});

	it('trimObject', () => {
		expect(typeof trimObject).toBe('function');
	});

	it('onlyValues', () => {
		expect(typeof onlyValues).toBe('function');
	});

	it('removeObjectKeys', () => {
		expect(typeof removeObjectKeys).toBe('function');
	});
});
