var budgetController = (function() {
    
})() ;

var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
})();

var controller = (function(budgetCtrl,UICtrl) {

    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function() {
        //Get the field input data
        var input = UICtrl.getinput();
        console.log(input)

        //add item to budget controller
        //add item to ui
        //calculate the budget
        //display the budget

    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)


    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13)
        ctrlAddItem();
    })
})(budgetController,UIController);


