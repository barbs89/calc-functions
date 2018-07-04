const calc = require('../index')
const assert = require('assert')

describe('calculator', function(){
    it('should add two numbers', function(done){
        const total = calc.add(5, 2);
        assert.equal(total, 7);
        done();
    })
})

