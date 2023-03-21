var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
        
    var a = 10;
    var b = 10;

    it.only('Addtion of two numbers', function(){

        var c = a + b;

        assert.equal(c,20)
    });

    it.only('Substraction of two numbers', function(){

        var c = a - b;

        assert.equal(c,0)
    });

    it('Multiplication of two numbers', function(){

        var c = a * b;

        assert.equal(c,100)
    });

    it('Divsion of two numbers', function(){

        var c = a / b;

        assert.equal(c,1)
    });
})