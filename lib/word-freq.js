/* dependencies */
var stm = require('stm');

/* public */
var wf = {
	/* Simply points to stm library */
	tokenise: stm.tokenise,
	/* Simply points to stm library */
	stem: stm.stem,
	/**
	  * Returns the term frequencies of a document as an Object–e.g. `"I like node" -> { I: 1, like: 1, node: 1}`
	  *
	  * text - String. The text in which frequency is to be calculated.
	  * shouldStem (true) - Boolean. Turns stemming on and off. http://en.wikipedia.org/wiki/Stemming
		*/
	freq: function (text, noStopWords, shouldStem) {
		var freq = {};
		try {
			noStopWords = (typeof noStopWords === 'undefined') ? true : noStopWords;  // set default to `true`
			text = (typeof shouldStem === 'undefined' || shouldStem) ? this.stem(text, noStopWords) : this.tokenise(text, noStopWords);	
		} catch (e) {
			return new Error('Please ensure that the text is a valid string.');
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
