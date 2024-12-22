// script.js

// Function to handle the Buy Now button click
function buyNow(cakeName, price) {
    alert(`You are purchasing a ${cakeName} for ₹${price}.`);

    // PayPal Button integration
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: price,    // Price in INR
                        currency_code: "INR"  // Change currency to INR (Indian Rupees)
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Payment successful! Thank you for your purchase!');
            });
        }
    }).render('#paypal-button-container');
}
