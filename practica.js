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

function multiplications (){
	var table1=[1];
	var table2=[2];
	var table3=[3];
	var table4=[4];
	var table5=[5];
	var table6=[6];
	var table7=[7];
	var table8=[8];
	var table9=[9];
	var table10=[10];

	for(var y=2;y<=10;y++){
		table1.push(table1[0]*y);
		table2.push(table2[0]*y);
		table3.push(table3[0]*y);
		table4.push(table4[0]*y);
		table5.push(table5[0]*y);
		table6.push(table6[0]*y);
		table7.push(table7[0]*y);
		table8.push(table8[0]*y);
		table9.push(table9[0]*y);
		table10.push(table10[0]*y);
	}
	console.log(table1 +'\n'+table2+'\n'+table3+'\n'+table4+'\n'+table5+'\n'+table6+'\n'+table7+'\n'+table8+'\n'+table9+'\n'+table10)
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