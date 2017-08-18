'use strict';
const http = require('http');
const querystring = require('querystring');

const ENDPOINT = 'http://twc.tamu.edu';

class Resource {
	constructor(data) {
		this.name = data.Name;
		this.prefix = data.Prefix;
		this.fileType = data.FileType;
		this.date = new Date(parseInt(data.Date.substring(6, data.Date.length - 2), 10));
		this.url = ENDPOINT + data.Url;
	}
}

const get = (date, type, successFn) => {
	if (!date) {
		throw new Error('No date was provided.');
	}

	if (!successFn) {
		throw new Error('No callback was provided to handle the data (this operation is synchronous only in its current version).');
	}

	const qs = querystring.stringify({type, date});
	http.get(ENDPOINT + '/getMaps?' + qs, response => {
		let result = '';
		response.setEncoding('utf8');

		response.on('end', () => {
			successFn(JSON.parse(result).map(val => new Resource(val)));
		});

		response.on('data', chunk => {
			result += chunk;
		});
	}).on('error', error => {
		throw new Error(error);
	});
};

module.exports = {
	getKBDI: (date, successFn) => get(date, 'KBDI', successFn),
	getTFD: (date, successFn) => get(date, 'TFD', successFn),
	getNEXRAD: (date, successFn) => get(date, 'NEXRAD', successFn)
};
