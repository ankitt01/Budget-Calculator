var budgetController = (function(){
    
    var Expense = function(id,description,value) { //constructor
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function(id,description,value) { //constructor
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem,ID;
            //create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length-1].id +1;

            }else {
                ID = 0;
            }

            //Create new item based on 'inc' or 'exp'
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else {
                newItem = new Income(ID, des, val)
            }
            //push it into our datastructure
            data.allItems[type].push(newItem);
            //return new element
            return newItem;

        },

        testing: function() {
            console.log(data);
        }
    };

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
        var input, newItem;

        // Get the filled input data
        var input = UIController.getInput();

        //add item to budget controller
        budgetController.addItem(input.type, input.description, input.value);

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