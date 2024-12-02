   // Define product prices
   const prices = { PR1: 1299, PR2: 1199, PR3: 1199, PR4: 1299, PR5: 1299, PR6: 1299, PR7: 999, PR8: 999 };

   // Increase or decrease quantity and update total price
   function changeQuantity(button, change) {
       const row = button.closest('tr');
       const quantityCell = row.querySelector('.value');
       let quantity = parseInt(quantityCell.textContent);
       quantity = Math.max(0, quantity + change);  // Prevent negative quantities
       quantityCell.textContent = quantity;
       row.querySelector('.total-price').textContent = `P ${prices[row.dataset.product] * quantity}`;
   }

   // Show the receipt with all ordered items
   function orderAllItems() {
       const rows = document.querySelectorAll('#myTable tbody tr');
       let details = '';
       let totalAmount = 0;

       rows.forEach(row => {
           const product = row.querySelector('h3').textContent;
           const size = row.querySelector('select').value;
           const quantity = parseInt(row.querySelector('.value').textContent);
           const totalPrice = parseInt(row.querySelector('.total-price').textContent.replace('P ', ''));
           if (quantity > 0) {
               details += `Product: ${product}\nSize: ${size}\nQuantity: ${quantity}\nTotal: P ${totalPrice}\n\n`;
               totalAmount += totalPrice;
           }
       });

       document.getElementById('receiptDetails').innerText = details || 'No products selected!';
       document.getElementById('receiptSection').style.display = 'block';
   }
