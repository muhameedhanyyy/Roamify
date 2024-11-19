function changeDuration(change, durationId, priceId, pricePerDay) {
    // Get the duration input element
    const durationInput = document.getElementById(durationId);
    
    if (!durationInput) {
        console.error(`Element with ID ${durationId} not found`);
        return;
    }

    // Parse the current duration value as an integer
    let currentDuration = parseInt(durationInput.value, 10);

    // Increase or decrease the duration
    currentDuration += change;

    // Ensure the duration is at least 1
    if (currentDuration < 1) {
        currentDuration = 1;
    }

    // Update the input field with the new duration
    durationInput.value = currentDuration;
    console.log(`Duration updated to: ${currentDuration}`);

    // Calculate the new total price
    const totalPrice = currentDuration * pricePerDay;
    
    // Update the price display
    const priceElement = document.getElementById(priceId);
    if (priceElement) {
        priceElement.innerText = `$${totalPrice}`;
        console.log(`Total price updated to: $${totalPrice}`);
    } else {
        console.error(`Element with ID ${priceId} not found`);
    }
}

function addToCart(carTitle, pricePerDay, durationId, imageUrl) {
    const duration = document.getElementById(durationId).value;
    const totalPrice = pricePerDay * duration;

    // Create a cart item object with the image URL
    const cartItem = {
        title: carTitle,
        pricePerDay: pricePerDay,
        duration: duration,
        totalPrice: totalPrice,
        imageUrl: imageUrl //
    };

    // Get existing cart items from localStorage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'Confirmation.html';
}


    // Function to display cart items
  // Function to display cart items
    function displayCart() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const cartContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartContainer.innerHTML = '';

        if (cartItems.length === 0) {
            cartContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
            cartTotal.textContent = '$0.00';
            return;
        }

        let total = 0;


    cartItems.forEach((item, index) => {
        total += item.totalPrice;
        const cartItemHTML = `
            <div class="item">
                <img src="${item.imageUrl}" alt="${item.title}" class="item-image">
                <div class="item-details">
                    <h3>${item.title}</h3>
                    <p>Price: $${item.pricePerDay} x ${item.duration} days</p>
                    <p><strong>Total: $${item.totalPrice}</strong></p>
                </div>
                <div class="quantity">
                    <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
        cartContainer.innerHTML += cartItemHTML;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart(); // Refresh the cart display
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCart(); // Refresh the cart display
}

// Display cart items on page load
document.addEventListener('DOMContentLoaded', displayCart);

    // Display cart items on page load
    document.addEventListener('DOMContentLoaded', displayCart);

    // Function to check if tourist has an account and validate email/password
    function checkTouristAccount(event) {
        event.preventDefault(); // Prevent form from submitting until the account check is done
    
        const email = document.getElementById('touristEmail').value.trim().toLowerCase(); // Normalize to lowercase
        const password = document.getElementById('touristPassword').value.trim();
    
        // Check if email is entered
        if (!email) {
            alert('Please enter your email.');
            return;
        }
    
        // Check if password is entered
        if (!password) {
            alert('Please enter your password.');
            return;
        }
    
        // Check if the tourist exists in LocalStorage
        const touristData = JSON.parse(localStorage.getItem(`tourist_${email}`)); // Ensure key format matches
    
        if (!touristData) {
            alert('No account found with this email. Please sign up first.');
            return;
        }
    
        // Validate password
        if (touristData.password !== password) {
            alert('Incorrect password. Please try again.');
            return;
        }
    
        // If email and password are correct, proceed to cart page
        alert('Account verified! Proceeding to cart...');
        
        // Redirect to cart page after account verification
        window.location.href = 'cart.html'; // Make sure cart.html exists
    }
    
    // Example of storing tourist data (for testing)
    localStorage.setItem('tourist_mohamed@gmail.com', JSON.stringify({ firstname: 'Mohamed', lastname: 'Hany', email: 'mohamed@gmail.com', password: '12345' }));
    