var t = require('tap').test;
var wf = require('../');

var STR_A = "you're simply a test, a mere test";
var STR_B = "you're simply a simplistic house, made for housing";
var STR_C = "@waltercfilho tweeted about houses: housing is the most expensive thing ever f#!*";

t('tokenisation, excluding stop words', function (t) {
	t.deepEqual(
		wf.tokenise(STR_A),
		['simply', 'test', 'mere', 'test'],
		'wf.tokenise(STR_A)'
	);

	t.deepEqual(
		wf.tokenise(STR_B),
		['simply', 'simplistic', 'house', 'housing'],
		'wf.tokenise(STR_B)'
	);

	t.deepEqual(
		wf.tokenise(STR_C),
		["waltercfilho", "tweeted", "houses", "housing", "expensive"],
		'wf.tokenise(STR_C)'
	);

	t.end();
});

t('tokenisation, including stop words', function (t) {
	
	t.deepEqual(
		wf.tokenise(STR_A, false),
		['you', 're', 'simply', 'a', 'test', 'a', 'mere', 'test'],
		'wf.tokenise(STR_A, false)'
	);

	t.deepEqual(
		wf.tokenise(STR_B, false),
		["you", "re", "simply", "a", "simplistic", "house", "made", "for", "housing"],
		'wf.tokenise(STR_B, false)'
	);

	t.deepEqual(
		wf.tokenise(STR_C, false),
		["waltercfilho", "tweeted", "about", "houses", "housing", "is", "the", "most", "expensive", "thing", "ever", "f"],
		'wf.tokenise(STR_C, false)'
	);

	t.end();
});

t('stemming, excluding stop words', function (t) {

	t.deepEqual(
		wf.stem(STR_A),
		['simpli', 'test', 'mere', 'test'],
		'wf.stem(STR_A)'
	);

	t.deepEqual(
		wf.stem(STR_B),
		["simpli", "simplist", "hous", "hous"],
		'wf.stem(STR_B)'
	);

	t.deepEqual(
		wf.stem(STR_C),
		["waltercfilho", "tweet", "hous", "hous", "expens"],
		'wf.stem(STR_B)'
	);

	t.end();
});

t('stemming, including stop words', function (t) {
	
	t.deepEqual(
		wf.stem(STR_A, false),
		['you', 're', 'simpli', 'a', 'test', 'a', 'mere', 'test'],
		'wf.stem(STR_A, false)'
	);

	t.deepEqual(
		wf.stem(STR_B, false),
		["you", "re", "simpli", "a", "simplist", "hous", "made", "for", "hous"],
		'wf.stem(STR_B, false)'
	);

	t.deepEqual(
		wf.stem(STR_C, false),
		["waltercfilho", "tweet", "about", "hous", "hous", "is", "the", "most", "expens", "thing", "ever", "f"],
		'wf.stem(STR_C, false)'
	);

	t.end();
});

t('word frequency testing, excluding stop words', function (t) {

	/* with stemming */
	t.deepEqual(
		wf.freq(STR_C, true, true),
		{
      "waltercfilho" : 1,
      "tweet" : 1,
      "hous" : 2,
      "expens" : 1
    },
		'wf.freq(STR_C, true, true)'
	);

	/* without stemming */
	t.deepEqual(
		wf.freq(STR_C, true, false),
		{
			"waltercfilho" : 1,
      "tweeted" : 1,
      "houses" : 1,
      "housing" : 1,
      "expensive" : 1
		},
		'wf.freq(STR_C, true, false)'
	);

	t.end();
});

t('word frequency testing, including stop words', function (t) {

	/* with stemming */
	t.deepEqual(
		wf.freq(STR_C, false, true),
		{
      "waltercfilho" : 1,
      "tweet" : 1,
      "about" : 1,
      "hous" : 2,
      "is" : 1,
      "the" : 1,
      "most" : 1,
      "expens" : 1,
      "thing" : 1,
      "ever" : 1,
      "f" : 1
    },
		'wf.freq(STR_C, false, true)'
	);

	/* without stemming */
	t.deepEqual(
		wf.freq(STR_C, false, false),
		{
			"waltercfilho" : 1,
      "tweeted" : 1,
      "about" : 1,
      "houses" : 1,
      "housing" : 1,
      "is" : 1,
      "the" : 1,
      "most" : 1,
      "expensive" : 1,
      "thing" : 1,
      "ever" : 1,
      "f" : 1
		},
		'wf.freq(STR_C, false, false)'
	);

	t.end();
});