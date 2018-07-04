const calc = require('../index.js')
const assert = require('assert')

describe('calculator', function(){
    it('should add two numbers', function(done){
        let total = calc.add(5, 2);
        assert.equal(total, 7);
        done();
    }),
    it('should subtract two numbers', function(done){
        let total = calc.subtract(7, 2);
        assert.equal(total, 5);
        done();
    }),
    it('should multiply two numbers', function(done){
        let total = calc.multiply(5, 2);
        assert.equal(total, 10);
        done()
    }),
    it('should divide two numbers', function(done){
        let total = calc.division(10, 2);
        assert.equal(total, 5);
        done()
    })

})

