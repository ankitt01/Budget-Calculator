var budgetController = (function(){
    
    

})();

var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    }


    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMstrings: function() {
            return DOMStrings
        }
    }
})();

var controller = (function(budgetCtrl, UICtrl) {


    var setupEventListeners = function(){
        var DOM = UIController.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(e) {
        
            if(e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
        
            }
        });
    };

    var ctrlAddItem = function() {
        // Get the filled input data
            var input = UIController.getInput();

        //add item to budget controller
        //add item to UI
        //Calculate budget
        //display budget
        
    };
    return {
        init: function() {
            console.log("Application Started")
            setupEventListeners();
        }
    };
})(budgetController,UIController);

controller.init();