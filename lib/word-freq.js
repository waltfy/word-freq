var stem = require('stem-porter');
var regex = /\w+/g;

var wf = {
	/**
	  * Tokenises a given string, returning an Array of terms.
	  * text - String. Text to be tokenised.
		*/
	tokenise: function (text) {
		return text.match(regex);
	},
	/**
	  * Tokenises and stems a string, returning an Array of stemmed terms.
	  * text - String. Text to be tokenised and stemmed.
		*/
	stem: function (text) {
		return this.tokenise(text).map(function (word) { return stem(word); });
	},
	/**
	  * Returns the term frequencies of a document as an Object–e.g. "I like node" -> { I: 1, like: 1, node: 1}
	  *
	  * text - String. The text in which frequency is to be calculated.
	  * shouldStem (true) - Boolean. Turns stemming on and off. http://en.wikipedia.org/wiki/Stemming
		*/
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