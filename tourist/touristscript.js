  // Sign-Up Function
  function signUp() {
    const firstname = document.getElementById('signupFirstname').value;
    const lastname = document.getElementById('signupLastname').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if any field is empty
    if (!firstname || !lastname || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Check if the user already exists
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      alert('User already exists. Please log in.');
      return;
    }

    // Save user data in LocalStorage
    const userData = { firstname, lastname, email, password };
    localStorage.setItem(email, JSON.stringify(userData));

    alert('User registered successfully!');
    window.location.href = "../index.html";

    // Clear the input fields
    document.getElementById('signupFirstname').value = '';
    document.getElementById('signupLastname').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
  }

  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if the user exists in LocalStorage
    const userData = JSON.parse(localStorage.getItem(username));
    if (!userData) {
        alert('User not found. Please check your username or sign up first.');
        return;
    }

    // Validate the password
    if (userData.password !== password) {
        alert('Incorrect password. Please try again.');
        return;
    }

    alert(`Welcome back, ${username}! You are successfully logged in.`);
    window.location.href = "../index.html";
    
    // Clear the input fields
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

// Example for storing user data (sign-up or when creating a new user)
localStorage.setItem('muhamed', JSON.stringify({
    password: '12345',
    firstname: 'Muhamed',
    email: 'muhamed@example.com'
}));