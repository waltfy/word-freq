word-freq
=========
[![Build Status](https://travis-ci.org/waltervascarvalho/word-freq.svg?branch=master)](https://travis-ci.org/waltervascarvalho/word-freq)

Calculates the word frequency of a text document, by tokenising or tokenising and stemming the string.

## Usage

### Frequency (`wf.freq(text, shouldStem)`)
Returns an object containing the frequency of terms in the `text` provided. `shouldStem` defaults to `true`.
```javascript
var str = "@waltercfilho tweeted about houses: housing is the most expensive thing ever f#!*. How expensive is moving house?";

var frequency = wf.freq(str); // shouldStem -> `true`
>> {  
      "waltercfilho" : 1,
      "tweet" : 1,
      "about" : 1,
      "hous" : 3,
      "is" : 2,
      "the" : 1,
      "most" : 1,
      "expens" : 2,
      "thing" : 1,
      "ever" : 1,
      "f" : 1,
      "How" : 1,
      "move" : 1
    }
```


### Tokenising (`wf.tokenise(text)`)
Simply returns an array of terms, without punctuation.

```javascript
var wf = require('word-freq');

var str = "you're simply a test, a mere test";
var tokenised = wf.tokenise(str);
>> ['you', 're', 'simply', 'a', 'test', 'a', 'mere', 'test']

```

### Stemming (`wf.stem(text)`)
Returns an array of terms, stemmed and without punctuation.

Note: This is basically a wrapper around the [`stem-porter`](https://www.npmjs.org/package/stem-porter) library by [`kastor`](https://www.npmjs.org/~kastor)

```javascript
var wf = require('word-freq');

var str = "you're simply a simplistic house, made for housing";
var tokenised = wf.stem(str);

[ "you", "re", "simpli", "a", "simplist", "hous", "made", "for", "hous" ],
```

