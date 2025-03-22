function placeOrder() {
    // Check if compulsory fields are filled in
    var name = document.getElementById("name").value;
    var score = parseInt(document.getElementById("score").value); // Parse score as integer
    
    // Retrieve product quantities
    var products = [
        { name: "English Study Book", price: 8, quantity: parseInt(document.getElementById("product1Quantity").value) },
        { name: "French Study Book", price: 8, quantity: parseInt(document.getElementById("product2Quantity").value) },
        { name: "Spanish Study Book", price: 8, quantity: parseInt(document.getElementById("product3Quantity").value) },
        { name: "German Study Book", price: 8, quantity: parseInt(document.getElementById("product4Quantity").value) },
        { name: "Italian Study Book", price: 8, quantity: parseInt(document.getElementById("product5Quantity").value) },
        { name: "English Work Book", price: 9, quantity: parseInt(document.getElementById("product6Quantity").value) },
        { name: "French Work Book", price: 9, quantity: parseInt(document.getElementById("product7Quantity").value) },
        { name: "German Work Book", price: 9, quantity: parseInt(document.getElementById("product8Quantity").value) }
    ];
    
    // Validate all input fields
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    
    if (isNaN(score) || score < 0 || score > 10) { // Validate score
        alert("Please enter a valid score between 0 and 10.");
        return;
    }
    
    for (var i = 0; i < products.length; i++) {
        if (isNaN(products[i].quantity) || products[i].quantity < 0) {
            alert("Please enter a valid quantity for all products.");
            return;
        }
    }
    
    // Calculate total cost
    var totalCost = 0;
    var summaryMessage = "Dear " + name + ", you have ordered:\n";
    for (var i = 0; i < products.length; i++) {
        var productCost = products[i].price * products[i].quantity;
        summaryMessage += products[i].quantity + " " + products[i].name + "(s) at $" + products[i].price + " each, Total: $" + productCost + "\n";
        totalCost += productCost;
    }
    
    // Apply discount if score is 10
    if (score === 10) {
        var discount = totalCost * 0.10; // 10% discount
        totalCost -= discount;
        summaryMessage += "Congratulations! You've earned a 10% discount.\n";
    }
    
    summaryMessage += "Your total bill is $" + totalCost.toFixed(2) + ".";
    
    // Display summary in a popup window
    alert(summaryMessage);
}
