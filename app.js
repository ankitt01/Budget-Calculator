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
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
    }


    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        addListItem: function(obj, type) {
            var html, newHtml, element;
            //Create HTML string with placeholder
            if(type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if(type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div<div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            }
            
            //Replace placeholder with actual data

            newHtml = html.replace('%id%', obj.id);
            
            newHtml = newHtml.replace('%desc%', obj.description);
            
            newHtml = newHtml.replace('%value%', obj.value);

            //insert html into DOM

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
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
        newItem = budgetController.addItem(input.type, input.description, input.value);
        console.log(newItem)
        //add item to UI

        UICtrl.addListItem(newItem, input.type) 

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