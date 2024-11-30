// Define the price mapping for each product
const productPrices = {
    PR1: 1299,
    PR2: 1199,  
    PR3: 1199,
    PR4: 1299,
    PR5: 1299,
    PR6: 1299,
    PR7: 999,
    PR8: 999,
    
};
// Increase quantity when + button is clicked
function increaseValue(button) {
    const row = button.closest('tr'); // Find the row where the button was clicked
    const quantityCell = row.querySelector('.value'); // Find the quantity cell in the row
    let quantity = parseInt(quantityCell.textContent); // Get current quantity number
    quantityCell.textContent = quantity + 1; // Increase quantity by 1
    updateTotalPrice(row, quantity + 1); // Update the total price with the new quantity
}

// Decrease quantity when - button is clicked
function decreaseValue(button) {
    const row = button.closest('tr');
    const quantityCell = row.querySelector('.value');
    let quantity = parseInt(quantityCell.textContent);
    if (quantity > 0) { // Don't allow negative quantity
        quantityCell.textContent = quantity - 1;
        updateTotalPrice(row, quantity - 1); // Update the total price
    }
}

// Update the total price in the row based on quantity and product price
function updateTotalPrice(row, quantity) {
    const price = productPrices[row.dataset.product]; // Get product price from productPrices object
    const totalPrice = price * quantity; // Calculate total price
    const totalPriceCell = row.querySelector('.total-price');
    totalPriceCell.textContent = `P ${totalPrice}`; // Display total price in the row
}

// Place the order and show details in the console
function orderAllItems() {
    const rows = document.querySelectorAll('#myTable tbody tr');
    let orderDetails = '';
    let totalAmount = 0;

    rows.forEach(row => {
        const productName = row.querySelector('td').textContent; // Get product name
        const quantity = parseInt(row.querySelector('.value').textContent); // Get the quantity
        const totalPrice = parseInt(row.querySelector('.total-price').textContent.replace('P ', ''));

        if (quantity > 0) { // Only show products with quantity greater than 0
            orderDetails += `Product: ${productName}\nQuantity: ${quantity}\nTotal Price: P ${totalPrice}\n\n`;
            totalAmount += totalPrice; // Add to the total amount
        }
    });

    if (orderDetails) {
        orderDetails += `Total Amount: P ${totalAmount}`; // Show the total amount
        console.log(orderDetails); // Show order details in console
    } else {
        console.log('No products selected!');
    }
}