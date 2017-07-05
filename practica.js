/*Function that returns the numbers between the two parameters*/

function between (num1, num2){
	var numbers=[];
	if(num1>num2){
		return -1;
	}
	else{
		for(var y=(num1+1); y<num2; y++){
			numbers.push(y);
		}
	}
	return numbers;
}


/*Write a function that writes in the console the multiplication table (from 1 to 10)*/

function multiplicar(){
    var result = '';
    for (var i = 1; i <= 10; ++i){
        for (var j = 1; j <= 10; ++j){
            result += i*j;
            if (j < 10) {
                result += '\t';
            }
        }
        if (i < 10) {
            result += '\n';
        }
    }
    return result;
}

/*Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter*/

function multiplicationTable (num){
	for(var y=0; y<11; y++){
		console.log((num*y))
	}
}


/*Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them*/

function multiple23(){
	var numberI=23;
	var numberA=[];
	var number=23;
	var sum=0;
	var y=1;
	while(number<478){
		number=numberI*y;
		numberA.push(number);
		y++;
		sum+=number;
	}

	console.log('Elements: '+ numberA+ '\nThe total sum of all numbers is '+sum);
}


/*Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.*/

function max(num1, num2){
	if(num1>num2){
		console.log('The largest number is '+num1);
	}
	else if (num2>num1){
		console.log('The largest number is '+num2);
	}
	else{console.log('Both of them are the same')}
}


/*Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.*/

function maxOfThree(num1, num2, num3){
	var largest=Math.max(num1, num2, num3)
	return largest;
}

/*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/

function isVowel(character){
	if (character==='a'||character==='e'||character==='i'||character==='o'||character==='u'){
		return true;
	}
	else {return false;}
}

/*Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code*/

function rgb(color){
	var red=color.slice(1,3);
	var green=color.slice(3,5);
	var blue=color.slice(5,7);
	var red10=parseInt(red, 16);
	var green10=parseInt(green, 16);
	var blue10=parseInt(blue, 16);
	return 'rgb('+ red10+ ', '+ green10+', '+blue10+')';
}