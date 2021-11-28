 DATA TYPES IN JAVASCRIPT(Primitive & Reference Types)


 Primitive Data Types - 
	1.String - // " ", ' '
	2.Number - // 34, 23, 78
	3.Boolean - // True/False or 1/0
	4.Null - // null
	5.Undefined -var myName; //undefined variable
	6.Symbol (new ES6)

// typeof - shows the type of variable 
// + operator is used to concat string
// Strings are immutable


--------- String -------- 

let isMyname = "DJ";
console.log('My Data Type is ' + typeof isMyname);

// Strings are index starts from 0 , Each character has a corresponding index [a positional number]
let stringIndex="CHICKEN";
 				 0123456

// Every String has property called length, we can just ask for length of string  i.e Number of character
let firstName="Macr oni";
//will show the number of character in length including spaces and it counts from 1 not 0
console.log(firstName.length);
//OUTPUT : 8
firstName[7];//gives the character at 7th index
//OUTPUT : i


let gibberish = 'fsgsrdthauifhiuasgftryetg2143!'
// finds the length of character -1 from it and returns output as last character
gibberish[gibberish.length-1]
//OUTPUT : !


------- Numbers --------

/* 
Numbers can be positive number!, negative numbers! ,
Whole Numbers (integers)!, Decimal numbers!
we have all the basic math operations you would expect 
Ex:
 30 - 4 ;
-110 + 23 * 54;
4 / 2;
27 % 2 ;
just like the calc
*/

let myAge = 21.9;
console.log('My Data Type is ' + typeof myAge);

//*Boolean 
let isFemale = true;
console.log("My Data Type is " + typeof isFemale);

//*Null with 'typeof' operator , null has (bogus/imposter) value
let myNull = null;
console.log("My Data Type is " + typeof myNull);

//*Undefined with 'typeof' operator
let undef = undefined;
console.log("My Data Type is " + typeof undef);


Reference Data Types -   
	1.Arrays, 
	2.Objects, 
	3.Functions, 
	4.Dates.

//*Array
let myArr1 = [23, 34, 76, `DJ`, 'FEM', 'mixedarray', true];
console.log("My Data Type is " + typeof myArr1);

//*Object-literals
let myMarks = {
	Juveria: 54,
	Harry: 87,
	Matt: 90
};
console.log(myMarks);
console.log("My Data Type is " + typeof myMarks);

//*Functions
function findName() {}
console.log("My Data Type is " + typeof findName);

//*Date
let date = new Date();
console.log("My Data Type is " + typeof date);


		---- Comments in JAVASCRIPT ------
			
	// 2 forward slash for single line comment 

	/*
	this 
	is
	multi
	line comment
	*/

		---- TYPE CONVERSION AND TYPE COERCION & OPERATORS ----
	
	
	 	---- TYPE CONVERSION ----
	
	//  String() function
	let myVar = String(20);
	console.log(myVar, typeof myVar);
	
	let booleanVar = String(true);
	console.log(booleanVar, typeof booleanVar);
	
	let date = String(new Date());
	console.log(date, typeof date);
	
	let arr = String([1, 2, 3, 4, 5]);
	console.log(arr.length, typeof arr);
	
	//! Type ARRAY LENGTH = ELEMENT'S IN ARRAY(everything including comma(,))
	//! Type STRING LENGTH = CHARACTER'S IN ARRAY(only characters not commas(,))
	
	//* .toString() function
	let a = 2000;
	console.log(a.toString());
	
	//* Number() function
	let myNum = Number(`20`);
	// myNum = Number([1, 2, 3, 4, 5]);
	// myNum = Number(`23ref`); will give NAN if it is mixture of num, char or if it is an array
	// myNum = Number(true);
	//* true = 1 false = 0
	// console.log(myNum, typeof myNum);
	

		---- parseInt and parseFloat function ----

	let myNum1 = parseInt(`2021.435`);
	console.log(myNum1, typeof myNum1);
	
	let myNum2 = parseFloat(`2021.435`);
	console.log(myNum2, typeof myNum2);
	
	//* .toFixed() function
	let myNum3 = parseFloat(`2021.435`);
	console.log(myNum3.toFixed(2), typeof myNum3);
	

		---- TYPE COERCION ------
	
	let myStr1 = Number(`123`);
	let myStr2 = 20;
	console.log(myStr1 + myStr2);
	
	
		----- TYPE CONVERSIONS -----
	
	 Converting Strings to Numbers -

	Number("3.14")  //! returns 3.14
	Number(" ")     //! returns 0
	Number("")      //! returns 0
	Number("99 88") //! returns NaN
	Number()        //! Returns a number, converted from its argument
	parseFloat()    //! Parses a string and returns a floating point number
	parseInt()	    //! Parses a string and returns an integer  
	
	
	
	 Converting Numbers to Strings -

	String('')          //! returns a string from a number variable x
	String(123)         //! returns a string from a number literal 123
	String(100 + 23)    //! returns a string from a number from an expression
	(123).toString()    //! toString() will convert number into string 123
	(100 + 23).toString()//! toString() will convert number into string 10023
						//! Converting Dates to Numbers
						//! Converting Numbers to Datescal not
						//! Converting Booleans to Numbers
						//! Converting Numbers to Booleans
	
	const digit = " "
	const text = 123
	//* NAN = not a number 
	// console.log(Number(digit))
	// console.log(parseInt(digit))
	// console.log(parseFloat(digit))
	
	// console.log(String(100 + 23))
	// console.log(text.toString())
	