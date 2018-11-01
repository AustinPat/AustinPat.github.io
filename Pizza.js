function getReceipt() {
    // This initializes our string so it can get passed from  
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium") {
        sizeTotal = 10;
    } else if (selectedSize === "Large") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getMeat(runningTotal, text1); // All three of these variables will be passed on to each function
};


function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: (" + meatArray[j].value + ")");
            text1 = text1 + meatArray[j].value + "<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: " + meatCount);
    console.log(meatCount + " meat - 1 free meat = " + "$" + meatTotal + ".00");
    console.log("meat text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    getSauce(runningTotal, text1);
};


function getSauce(runningTotal, text1) {
    var sauceTotal = 0;
    var sauceArray = document.getElementsByClassName("sauce");
    for (var k = 0; k < sauceArray.length; k++) {
        if (sauceArray[k].checked) {
            var selectedSauce = sauceArray[k].value;
            text1 = text1 + selectedSauce + "<br>";
        }
    }

    runningTotal = (runningTotal + sauceTotal);
    console.log(selectedSauce + " = $" + sauceTotal + ".00");
    console.log("sauce text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getCheese(runningTotal, text1);
};


function getCheese(runningTotal, text1) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var l = 0; l < cheeseArray.length; l++) {
        if (cheeseArray[l].checked) {
            var selectedCheese = cheeseArray[l].value;
            text1 = text1 + selectedCheese + "<br>";
        }
    }
    if (selectedCheese === "Extra Cheese") {
        cheeseTotal = 3;
    }
    runningTotal = (runningTotal + cheeseTotal);
    console.log(selectedCheese + " = $" + cheeseTotal + ".00");
    console.log("cheese text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1);

};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("topping");
    for (var x = 0; x < toppingArray.length; x++) {
        if (toppingArray[x].checked) {
            selectedTopping.push(toppingArray[x].value);
            console.log("selected topping item: (" + toppingArray[x].value + ")");
            text1 = text1 + toppingArray[x].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    getCrust(runningTotal, text1);
};


function getCrust(runningTotal, text1) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (var y = 0; y < crustArray.length; y++) {
        if (crustArray[y].checked) {
            var selectedCrust = crustArray[y].value;
            text1 = text1 + selectedCrust + "<br>";
        }
    }
    if (selectedCrust === "Cheese stuffed") {
        crustTotal = 3;
    }
    runningTotal = (runningTotal + crustTotal);
    console.log(selectedCrust + " = $" + crustTotal + ".00");
    console.log("crust text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";

};