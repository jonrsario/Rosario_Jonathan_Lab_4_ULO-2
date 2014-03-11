//  NAME:  Jonathan Rosario
//  DATE:  3/11/2014
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;
var i;
var myRun = 0;

while (myRun < 8) {
	
	console.log("test");
	
	p = confirm("First value: Click OK for true or Cancel for false.");
	q = confirm("Second value: Click OK for true or Cancel for false.");
	r = confirm("Third value: Click OK for true or Cancel for false.");

	if (p || (q || r)) {

		console.log("With " + p + " and " + q,r + ", the outcome is TRUE.");
	
	} else {
	
		console.log("With " + p + " and " + q,r + ", the outcome is FALSE.");
	}
	
	myRun++;
	
};
