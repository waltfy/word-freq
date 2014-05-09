var stem = require('stem-porter');
var regex = /\w+/g;

var wf = {
	/**
	  * Tokenises a given string.
		*/
	tokenise: function (text) {
		return text.match(regex);
	},
	stem: function (text) {
		return this.tokenise(text).map(function (word) { return stem(word); });
	},
	freq: function (text, shouldStem) {
		var freq = {};
		try {
			text = (typeof shouldStem === 'undefined' || shouldStem) ? this.stem(text) : this.tokenise(text);	
		} catch (e) {
			return new Error('Please ensure that the text is a non-empty string.');
		} finally {
			text.forEach(function (word) {
				if (freq.hasOwnProperty(word)) freq[word] += 1;
				else freq[word] = 1;
			});

			return freq;
		}
	}
}

module.exports = wf;