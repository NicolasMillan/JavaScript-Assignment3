// Declaring the variables for the pizza
let selectPizzaSize = document.querySelector('#pizza-size');

let pepperoniCheckbox = document.querySelector('#pepperoni');
let hamCheckbox = document.querySelector('#Ham');
let baconCheckbox = document.querySelector('#Bacon');
let mushroomsCheckbox = document.querySelector('#mushrooms');
let olivesCheckbox = document.querySelector('#olives');
let sausageCheckbox = document.querySelector('#sausage');

let thinCrust = document.querySelector('#thin');
let panCrust = document.querySelector('#pan');
let deepDishCrust = document.querySelector('#deep-dish');

let nameInput = document.querySelector('#name');
let addressInput = document.querySelector('#address');
let phoneInput = document.querySelector('#phone');

let Button = document.querySelector('.submitBtn');
let pizzaOutputText = document.querySelector('.PizzaText');
let orderOutputText = document.querySelector('.OrderText');


// ======================  Select Your Pizza Section  ===================
var topingsSelectedArray = [];


// ================== Pizza & Delivery Objects ==================
const Pizza ={
    pizzaSize: "",
    topingsSelected: [],
    crust: "",
}
const Delivery ={
    name: "",
    address: "",
    phoneNumber: "",
}

function checkboxes(Topings){

    // Access the checkbox element through the event object
    var Tester = Topings.target;
    // Get the state of the checkbox
    var isChecked = Tester.checked;

    var label = Tester.labels[0].textContent;
    
    if (isChecked){
        topingsSelectedArray.push(label);
        console.log(label + ' is selected.');
    } else{
        console.log(label + ' is deselected.');
        var indexToRemove = topingsSelectedArray.indexOf(label);
        if (indexToRemove !== -1) {
            topingsSelectedArray.splice(indexToRemove, 1);
        }
    }
    console.log(topingsSelectedArray);

}

function result(){
//=================  Choose Pizza Size =============================
    // Passing the value from the selectbox to a variable
    var selectedSizeValue = selectPizzaSize.value;
    
//=================  Select Your Crust =============================
    var selectedCrust = '';

    switch (true) {
        case thinCrust.checked:
            selectedCrust = 'Thin';
            break;
        case panCrust.checked:
            selectedCrust = 'Pan';
            break;
        case deepDishCrust.checked:
            selectedCrust = 'Deep Dish';
            break;
        default:
            selectedCrust = 'Thin (Default)';
    }

    // Print out the selected crust
    console.log('Selected crust:', selectedCrust);
    
//==================== Final String =====================

    //======== Pizza =======
    Pizza.pizzaSize = selectedSizeValue;
    Pizza.topingsSelected = topingsSelectedArray;
    Pizza.crust = selectedCrust;
    let finalPizzaStringPizza = `You order a Pizza with size: ${Pizza.pizzaSize}, the topings: ${Pizza.topingsSelected} and crust: ${Pizza.crust}`

    //========= Delivery =========
    Delivery.name = nameInput.value;
    Delivery.address = addressInput.value;
    Delivery.phoneNumber = phoneInput.value;
    let finalPizzaStringOrder = `Thanks for choosing us ${Delivery.name} your pizza will arrive to ${Delivery.address} pleasse note your confirmation text at ${Delivery.phoneNumber}`
    // Print out the selected size
    console.log(finalPizzaStringPizza);

    // Checking the user fill all the inf
    if(nameInput.value === "" || addressInput.value === "" || phoneInput.value === ""){
        var missignDeliveryInformation = "Please ensure that the delivery information is completely filled"
        pizzaOutputText.textContent = missignDeliveryInformation;
    } else if (Pizza.topingsSelected.length === 0){
        console.log("Working")
        let newFinalPizzaStringPizza = `You order a Pizza with size: ${Pizza.pizzaSize}, the topings: ${"none"} and crust: ${Pizza.crust}`
        
        pizzaOutputText.textContent = newFinalPizzaStringPizza
        orderOutputText.textContent = finalPizzaStringOrder;
    } else {
        pizzaOutputText.textContent = finalPizzaStringPizza;
        orderOutputText.textContent = finalPizzaStringOrder;
    }

    
    
}



Button.addEventListener("click", result);
pepperoniCheckbox.addEventListener('change', checkboxes);
hamCheckbox.addEventListener('change', checkboxes);
baconCheckbox.addEventListener('change', checkboxes);
mushroomsCheckbox.addEventListener('change', checkboxes);
olivesCheckbox.addEventListener('change', checkboxes);
sausageCheckbox.addEventListener('change', checkboxes);

// showSelectionButton.addEventListener('click', showSelectedSize);



// pepperoniCheckbox.addEventListener('change', function() {
//     // Update the variable based on the checkbox state
//     myVariable = pepperoniCheckbox.checked;

//     // Log the variable state (you can replace this with your custom logic)
//     console.log('Variable is now:', myVariable);
// });