var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    this.timeout(5000) 

    var a = 10;
    var b = 10;

    it('Addtion of two numbers', function(done){

        //this.timeout(500) 

        setTimeout(done,3000)

        var c = a + b;

        assert.equal(c,20)
    });

    it('Substraction of two numbers', function(){

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

// add commit PR