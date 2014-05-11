/* dependencies */
var stopwords = require('stopwords').english;
var stemPorter = require('stem-porter');

/* private */
var regex = /\w+/g;

function isStopWord (word) {
  return stopwords.indexOf(word.toLowerCase()) === -1;
}

/* public */
var wf = {
	/**
	  * Tokenises a given string, returning an Array of terms.
	  * text - String. Text to be tokenised.
	  * noStopWords - Boolean. Defines whether stop words should be removed or not.
		*/
	tokenise: function (text, noStopWords) {
		noStopWords = (typeof noStopWords === 'undefined') ? true : noStopWords;  // set default to `true`
		text = text.match(regex); // breaking text word-by-word
		if (noStopWords) text = text.filter(isStopWord); // removing stopwords
		return text;
	},
	/**
	  * Tokenises and stems a string, returning an Array of stemmed terms.
	  * text - String. Text to be tokenised and stemmed.
	  * noStopWords - Boolean. Defines whether stop words should be removed or not.
		*/
	stem: function (text, noStopWords) {
		noStopWords = (typeof noStopWords === 'undefined') ? true : noStopWords;  // set default to `true`
		console.log(noStopWords);
		return this.tokenise(text, noStopWords).map(function (word) { return stemPorter(word); });
	},
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