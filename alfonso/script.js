// Function to handle increase and decrease for each product
function changeQuantity(productId, action) {
    // Get the current quantity value
    let quantityField = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityField.value);
    
    // Increasing quantity
    if (action === "increase") {
        currentQuantity++;
    }
    //Decreasing quantity
    else if (action === "decrease" && currentQuantity > 1) {
        currentQuantity--;
    }
    
    // Update the quantity field with the new value
    quantityField.value = currentQuantity;
}

function showCartMessage() {
        var message = document.getElementById("cart-message");
        message.style.display = "block"; // Show the message
        setTimeout(function() {
            message.style.display = "none"; // Hide the message after 2 seconds
        }, 2000);
    }

// Add event listeners for all products
document.getElementById("increase-1").addEventListener("click", () => changeQuantity(1, "increase"));
document.getElementById("decrease-1").addEventListener("click", () => changeQuantity(1, "decrease"));

document.getElementById("increase-2").addEventListener("click", () => changeQuantity(2, "increase"));
document.getElementById("decrease-2").addEventListener("click", () => changeQuantity(2, "decrease"));

document.getElementById("increase-3").addEventListener("click", () => changeQuantity(3, "increase"));
document.getElementById("decrease-3").addEventListener("click", () => changeQuantity(3, "decrease"));

document.getElementById("add-to-cart-1").addEventListener("click", showCartMessage);
document.getElementById("add-to-cart-2").addEventListener("click", showCartMessage);
document.getElementById("add-to-cart-3").addEventListener("click", showCartMessage);