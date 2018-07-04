const calculator = function() {
    const total, 
        firstN, 
        secondN;

    return {
        add: function(firstN, secondN){
            total = firstN + secondN;
            return total
        },
        subtract: function(firstN, secondN){
            total = firstN - secondN;
            return total
        },
        multiply: function(firstN, secondN){
            total = firstN * secondN;
            return total
        },
        division: function(firstN, secondN){
            total = firstN / secondN;
            return total
        },
        total: function(){
        return total
        }
    }
}

module.exports = calculator()