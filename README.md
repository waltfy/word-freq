word-freq
=========
[![Build Status](https://travis-ci.org/waltervascarvalho/word-freq.svg?branch=master)](https://travis-ci.org/waltervascarvalho/word-freq)

Calculates the word frequency of a text document, by tokenising or tokenising and stemming the string.

## Version
* `0.0.7` Converts all text to lowercase. 
* `0.0.6` Messed up `npm` versioning.
* `0.0.5` Moved stemmer into its own [module](https://github.com/waltervascarvalho/stm). Removed direct dependency on tokeniser.
* `0.0.4` Moved tokeniser into its own [module](https://github.com/waltervascarvalho/tkn).
* `0.0.3` Added stop words removal feature.
* `0.0.2` Improved, added testing.
* `0.0.1` Release.

## Usage

### Frequency (`wf.freq(text, noStopWords, shouldStem)`)
Returns an object containing the frequency of terms in the `text` provided.
* `text` is the string (text document) in which the calculations are to be performed on.
* `noStopWords` defaults to `true`. Set to `false` if you want to include stop words–e.g words such as "I" and "the".
* `shouldStem` defaults to `true`. Set to `false` if you want words not to be stemmed.
 
```javascript
var str = "@waltercfilho tweeted about houses: housing is the most expensive thing ever f#!*";

var frequency = wf.freq(str); // shouldStem -> `true`
>> {
      "waltercfilho" : 1,
      "tweet" : 1,
      "hous" : 2,
      "expens" : 1
    }
```

### Tokenising (`wf.tokenise(text, noStopWords)`)
Simply returns an array of terms, without punctuation.

* `text` is the string (text document) in which the calculations are to be performed on.
* `noStopWords` defaults to `true`. Set to `false` if you want to include stop words–e.g words such as "I" and "the".

```javascript
var wf = require('word-freq');

var str = "you're simply a test, a mere test";
var tokenised = wf.tokenise(str);
>> ['simply', 'test', 'mere', 'test']

```

### Stemming (`wf.stem(text, noStopWords)`)
Returns an array of terms, stemmed and without punctuation.

* `text` is the string (text document) in which the calculations are to be performed on.
* `noStopWords` defaults to `true`. Set to `false` if you want to include stop words–e.g words such as "I" and "the".

Note: This is basically a wrapper around the [`stem-porter`](https://www.npmjs.org/package/stem-porter) library by [`kastor`](https://www.npmjs.org/~kastor).

```javascript
var wf = require('word-freq');

var str = "you're simply a simplistic house, made for housing";
var tokenised = wf.stem(str);
>> ["simpli", "simplist", "hous", "hous"]
```

