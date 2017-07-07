/*Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".*/

function translate(toTranslate){
	var result=[];
	for(var i =0; i<toTranslate.length;i++){
		if(toTranslate[i]!=='a'&&toTranslate[i]!=='e'&&toTranslate[i]!=='i'&&toTranslate[i]!=='o'&&toTranslate[i]!=='u'&&toTranslate[i]!==' '){
			var charac=toTranslate[i];
			result.push(charac, 'o', charac);
		}
		else{
			result.push(toTranslate[i]);
		}
	}
	result=result.join('');
	return result;
}

         //Another method::

function translate(someText){
    var vowels = ['a','e','i','o','u',' '];
    var textArray = someText.split('');
    var translated = textArray.map(function(x){
        if(vowels.indexOf(x) == -1){
            return x+'o'+x;
        }
        else{
            return x;
        }
    });
    return translated.join('');
}
translate('This is fun');

/*Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.*/

function sum(array){
	var result=array.reduce(function(a, b){ return a + b; });
	return result;
}

function multiply(array){
	var result=array.reduce(function(a, b){ return a * b; });
	return result;
}
    //Another method

function sum(){
	var acc = 0
	for(n in arguments[0]){
		acc += arguments[0][n]
	}
	console.log("Sum ➡️ " + acc)
}
function multiply(){
	var acc = 1
	for(n in arguments[0]){
		acc *= arguments[0][n]
	}
	console.log("Mult ➡️ " + acc)
}


sum([1,2,3,4])
multiply([1,2,3,4])
/*Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".*/

function reverse(word){
	var result=word.split('');
	result=result.reverse().join('');
	return result;
}

/*Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.*/

function translate (string) {
	var dictionary = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
	var trans = []
	var arr = string.split(' ')
	arr.forEach(function(word) {trans.push(dictionary[word])})
	return trans.join(' ')
}

   //Another method
function translate2(text){
	var dict = {'merry':'god', 'christmas':'jul', 'and':'och', 'happy':'gott', 'new':'nytt', 'year':'år'};
	var textArray = text.split(' ');
	var result = textArray.map(function(word){
		return dict[word];
	});
	return result.join(' ');
}



/*Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/

function longest(arr) {
    var arr1 = arr.sort(function(a, b) {
        return (a.length - b.length);
    });
    
    return arr1.pop().length;
}

   //Another method
function findLongestWord (array) {
	var result = ''
	array.map(function longest (word) {
		if (word.length > result.length) {
			result = word
		}
	})
	return result.length
}

/*Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/

function findLongestWord(array){
	var longestWord = '';
	array.forEach(function(word){
		if(word.length > longestWord.length){
			longestWord = word;
		}
	})
	return longestWord.length;
}

findLongestWord(['hola','que','tal','otorrinolaringologo','onomatopeya','lol','ta']);

   //Another method

function findLongestWord(listwords) {
	var res = listwords.reduce(function(a, b){
		if (a < b.length) return b.length;
		else return a;
  	}, listwords[0].length);
	console.log(res);
}

/*Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/

function filterLongWords (array, num) {
	function f (element){
		return element.length>num;
	};
	var longWords = array.filter(f);
	return longWords;
}

filterLongWords(['hola', 'como', 'estas'], 4);

	//another method
function filterLongWords(arr, int) {
    return arr.filter(function(item) {
        return item.length > int;
    });
}

/*Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").*/


function charFreq (string) {
	var frequency = {};
	function addfrequency (character) {
		if (frequency[character]) {
			frequency[character] += 1;
		} else {
			frequency[character] = 1;
		};
	};
	string.split('').forEach(addfrequency);
	return frequency;
};

   //Another method
function charFreq(str) {
    var obj = {};
    var arr = str.split('');

    arr.forEach(function(item) {
        if (Object.keys(obj).indexOf(item) < 0) {
            obj[item] = 1;
        } else {
            obj[item]++;
        }
    });

    return obj;
}
charFreq("abbabcbdbabdbdbabababcbcbab");
  
    //Another one:
function charFreq (str) {
    var frequency = {}
    function addFrequency (character) {
      frequency[character] ? frequency[character]+=1 : frequency[character] = 1
    }
    str.split('').forEach(addFrequency)
    return frequency
}

charFreq("asdfasdasaaasdsdfgsdfsd")


