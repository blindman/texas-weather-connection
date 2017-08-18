import test from 'ava';
import fn from '.';

test.cb('KBDI', t => {
	t.plan(11);

	const missingDate = t.throws(() => fn.getKBDI(), Error);
	t.is(missingDate.message, 'No date was provided.');

	const missingCb = t.throws(() => fn.getKBDI('8/17/17'), Error);
	t.is(missingCb.message, 'No callback was provided to handle the data (this operation is synchronous only in its current version).');

	fn.getKBDI('8/14/17', data => {
		t.is(Object.prototype.toString.call(data), '[object Array]');
		t.is(Object.prototype.toString.call(data[0].name), '[object String]');
		t.is(Object.prototype.toString.call(data[0].prefix), '[object String]');
		t.is(Object.prototype.toString.call(data[0].prefix), '[object String]');
		t.is(Object.prototype.toString.call(data[0].fileType), '[object String]');
		t.is(Object.prototype.toString.call(data[0].date), '[object Date]');
		t.is(Object.prototype.toString.call(data[0].url), '[object String]');

		t.end();
	});
});

test.cb('TFD', t => {
	t.plan(11);

	const missingDate = t.throws(() => fn.getTFD(), Error);
	t.is(missingDate.message, 'No date was provided.');

	const missingCb = t.throws(() => fn.getTFD('8/17/17'), Error);
	t.is(missingCb.message, 'No callback was provided to handle the data (this operation is synchronous only in its current version).');

	fn.getTFD('8/14/17', data => {
		t.is(Object.prototype.toString.call(data), '[object Array]');
		t.is(Object.prototype.toString.call(data[0].name), '[object String]');
		t.is(Object.prototype.toString.call(data[0].prefix), '[object String]');
		t.is(Object.prototype.toString.call(data[0].prefix), '[object String]');
		t.is(Object.prototype.toString.call(data[0].fileType), '[object String]');
		t.is(Object.prototype.toString.call(data[0].date), '[object Date]');
		t.is(Object.prototype.toString.call(data[0].url), '[object String]');

		t.end();
	});
});

test.cb('NEXRAD', t => {
	t.plan(11);

	const missingDate = t.throws(() => fn.getNEXRAD(), Error);
	t.is(missingDate.message, 'No date was provided.');

	const missingCb = t.throws(() => fn.getNEXRAD('8/17/17'), Error);
	t.is(missingCb.message, 'No callback was provided to handle the data (this operation is synchronous only in its current version).');

	fn.getNEXRAD('8/14/17', data => {
		t.is(Object.prototype.toString.call(data), '[object Array]');
		t.is(Object.prototype.toString.call(data[0].name), '[object String]');
		t.is(Object.prototype.toString.call(data[0].prefix), '[object String]');
		t.is(Object.prototype.toString.call(data[0].prefix), '[object String]');
		t.is(Object.prototype.toString.call(data[0].fileType), '[object String]');
		t.is(Object.prototype.toString.call(data[0].date), '[object Date]');
		t.is(Object.prototype.toString.call(data[0].url), '[object String]');

		t.end();
	});
});
