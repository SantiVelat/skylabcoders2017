function contador(){
	var thecount=0;
	this.count=function(){
		thecount++;
	}
	this.totalCount=function(){
		return thecount;
	};
}


/*An object calculator() that operate whit sum, sub, div, mul introducing two parameters*/



function calculator(){

	this.sum = function(n1, n2){
	if(!isNaN(n1) && !isNaN(n2)){
		return n1 + n2;
	}

}
	this.sub = function(n1, n2){
		if(!isNaN(n1) && !isNaN(n2)){
			return n1 - n2;
		}
	}
	this.div = function(n1, n2){
		if(!isNaN(n1) && !isNaN(n2)){
			return n1 / n2;
		}
	}	
	this.mul = function(n1, n2){
		if(!isNaN(n1) && !isNaN(n2)){
			return n1 * n2;
		}
	}
}

var op = new calculator();

// test function;



function testCalculatorSum(){

var n1 = 2;
var n2 = 2;
	if(op.sum(n1, n2) === 4){
		console.log("OK sum!");
	} else {
		console.log("sum not working");
	}

}

testCalculatorSum();

function testCalculatorSub(){

var n1 = 2;
var n2 = 2;
	if(op.sub(n1, n2) === 0){
		console.log("OK rest!");
	} else {
		console.log("rest not working");
	}

}

testCalculatorSub();

function testCalculatorMul(){

var n1 = 2;
var n2 = 2;
	if(op.mul(n1, n2) === 4){
		console.log("OK multi!");
	} else {
		console.log("multiplication not working");
	}

}

testCalculatorMul();

function testCalculatorDiv(){

var n1 = 2;
var n2 = 2;
	if(op.div(n1, n2) === 1){
		console.log("OK div!");
	} else {
		console.log("Division not working");
	}

}


