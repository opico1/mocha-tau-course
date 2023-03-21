// Test Suite - Mathematica Operations

// Test Cases


// Add 
// Sub
// Multiplication
// Division 

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
        
    it('Addtion of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a + b;

        assert.equal(c,20)
    });

    it('Substraction of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a - b;

        assert.equal(c,0)
    });

    it('Multiplication of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a * b;

        assert.equal(c,100)
    });

    it('Divsion of two numbers', function(){
        var a = 10;
        var b = 10;

        var c = a / b;

        assert.equal(c,1)
    });
})