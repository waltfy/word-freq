var t = require('tap').test;
var wf = require('../');

t('tokenisation test with a simple string', function (t) {

	var str = "you're simply a test, a mere test";

	t.deepEqual(
		wf.tokenise(str),
		['you', 're', 'simply', 'a', 'test', 'a', 'mere', 'test'],
		'arrays are the same'
	);

	t.deepEqual(
		wf.stem(str),
		['you', 're', 'simpli', 'a', 'test', 'a', 'mere', 'test'],
		'stemmer behaves as expected'	
	);

	t.end()
});

t('tokenisation test with a more complex string', function (t) {

	var str = "@waltercfilho tweeted about houses: housing is the most expensive thing ever f#!*";

	t.deepEqual(
		wf.tokenise(str),
		[ "waltercfilho", "tweeted", "about", "houses", "housing", "is", "the", "most", "expensive", "thing", "ever", "f" ],
		'arrays are the same'
	);

	t.deepEqual(
		wf.stem(str),
		[ "waltercfilho", "tweet", "about", "hous", "hous", "is", "the", "most", "expens", "thing", "ever", "f" ],
		'stemmer behaves as expected'	
	);

	t.end()
});

t('word frequency testing with stemmer off', function (t) {
	var str = "@waltercfilho tweeted about houses: housing is the most expensive thing ever f#!* @phuunet @waltercfilho house #move";

	t.deepEqual(
		wf.freq(str, false),
		{
      "waltercfilho": 2,
      "tweeted": 1,
      "about": 1,
      "houses": 1,
      "housing": 1,
      "is": 1,
      "the": 1,
      "most": 1,
      "expensive": 1,
      "thing": 1,
      "ever": 1,
      "f": 1,
      "phuunet": 1,
      "house": 1,
      "move": 1
    },
		'word frequency is correct'
	);

	t.end();
});

t('word frequency testing with stemmer off', function (t) {
	var str = "@waltercfilho tweeted about houses: housing is the most expensive thing ever f#!* @phuunet @waltercfilho house #move";

	t.deepEqual(
		wf.freq(str, true),
		{
      "waltercfilho" : 2,
      "tweet" : 1,
      "about" : 1,
      "hous" : 3,
      "is" : 1,
      "the" : 1,
      "most" : 1,
      "expens" : 1,
      "thing" : 1,
      "ever" : 1,
      "f" : 1,
      "phuunet" : 1,
      "move" : 1
    },
		'word frequency is correct'
	);

	t.end();
});