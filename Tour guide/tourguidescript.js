  // Tour Guide Sign-Up Function
  function signUpTourGuide() {
    const firstname = document.getElementById('guideFirstname').value;
    const lastname = document.getElementById('guideLastname').value;
    const email = document.getElementById('guideEmail').value;
    const password = document.getElementById('guidePassword').value;

    // Check if any field is empty
    if (!firstname || !lastname || !email || !password) {
    alert('Please fill in all fields');
    return;
    }

    // Check if the tour guide already exists
    const existingGuide = localStorage.getItem(`guide_${email}`);
    if (existingGuide) {
    alert('Tour guide already exists. Please log in.');
    return;
    }

    // Save tour guide data in LocalStorage
    const guideData = { firstname, lastname, email, password };
    localStorage.setItem(`guide_${email}`, JSON.stringify(guideData));

    alert('Tour guide registered successfully!');
    window.location.href = "../index.html";

    // Clear the input fields
    document.getElementById('guideFirstname').value = '';
    document.getElementById('guideLastname').value = '';
    document.getElementById('guideEmail').value = '';
    document.getElementById('guidePassword').value = '';
}
    // Tour Guide Login Function
    function loginTourGuide() {
        const email = document.getElementById('guideUsername').value.trim();
        const password = document.getElementById('guidePassword').value.trim();
  
        // Check if the email and password fields are empty
        if (!email || !password) {
          alert('Please enter both email and password.');
          return;
        }
  
        // Check if the tour guide exists in LocalStorage using email as the key
        const guideData = JSON.parse(localStorage.getItem(`guide_${email}`));
  
        if (!guideData) {
          alert('Tour guide not found. Please check your email or sign up first.');
          return;
        }
  
        // Validate password
        if (guideData.password !== password) {
          alert('Incorrect password. Please try again.');
          return;
        }
  
        // Successful login
        alert(`Welcome back, ${guideData.firstname}! You are successfully logged in.`);
        window.location.href = "../index.html";

        
        // Clear the input fields after login
        document.getElementById('guideUsername').value = '';
        document.getElementById('guidePassword').value = '';
      }