/*Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters*/
function calculator(operation, num1, num2){
	switch(operation){
		case 'suma':
			return num1+num2;
		break;
		case 'resta':
			return num1-num2;
		break;
		case 'multiplication':
			return num1*num2;
		break;
		case 'division':
			return num1/num2;
		break;
	}
}

/*Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters*/
function calculator(){
	var args = Array.prototype.slice.call(arguments);
	var operation=args.splice(0,1).toString();
	switch(operation){
		case 'suma':
			return args.reduce(function(a, b){ return a + b; });
		break;
		case 'resta':
			return args.reduce(function(a, b){ return a - b; });
		break;
		case 'multiplication':
			return args.reduce(function(a, b){ return a * b; });
		break;
		case 'division':
			return args.reduce(function(a, b){ return a / b; });
		break;
	}
}

   //with JS 6
function calculator() {
    var nums = Array.from(arguments);

    switch (nums.shift()) {
        case 'sum':
            return nums.reduce((total, item) => total + item);   
        case 'subtract':
            return nums.reduce((total, item) => total - item);        
        case 'multiply':
            return nums.reduce((total, item) => total * item);       
        case 'divide':
            return nums.reduce((total, item) => total / item, 1);
    }
}


/*Define a function called ​getFullName​ that receives a name and a surname and return the string "Your full name is " with the name & surname concatenated*/
function getFullName(name, surname){
		return 'Your full name is '+name+' '+surname;
}

/*Define a function called ​isNumber​ that receives a value and return true if the value received is a number*/
function isNumber(isnumb){
		return (isNaN(isnumb) ? false : true)
}

/*Define a function called ​isString​ that receives a value and return true if the value received is a string*/
function isString(istring){
		return (typeof istring==='string' ? true : false);
}

/*Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean*/
function isBoolean(isbool){
		return (typeof isbool==='boolean' ? true : false);
}

/*Define a function called ​encodeWord​ that receives a string and return the codified version of that string replacing the following characters:*/
function encodeWord(word){
		return word.replace(/t/i, 7).replace(/a/i,4).replace(/s/i,5).replace(/o/i,0);
}

/*Improve the previous function to add a random number between 0 and 1000 every 7 characters*/
String.prototype.replaceAll = function(search, replacement) {
    var word = this;
    return word.split(search).join(replacement);
};
function encodeWord(word){
		var arr=(word.replaceAll(/t/i, 7).replaceAll(/a/i,4).replaceAll(/s/i,5).replaceAll(/o/i,0)).split('');
		var counter=0;
		var result=arr.map(function(map){
			counter++;
			if(counter%7===0){
				return map+Math.round(Math.random()*1001);
				count++;
			}
			else{
				return map;
			}
		});		
		return result.join('');
}
encodeWord('hola mundo aprendo JavaScript');

  //Other method

function encodeWordPlus (string) {
	var code = string.replace(/T/gi,7).replace(/A/gi,4).replace(/S/gi,5).replace(/O/gi,0).split('')
	for (i=7; i<=code.length; i+=7) {
		code.splice(i, 0, Math.round(Math.random()*1000))
	}
	return code.join('')
}

