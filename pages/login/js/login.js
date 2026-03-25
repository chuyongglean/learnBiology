console.log("Login page script initialized.");

function login() {
    console.log("Login function triggered.");
    // Select the main login button
    const btn = document.querySelector('.auth-btn');

    // Basic validation
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }
    
    // Update button state to show loading
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Processing...';
    btn.disabled = true; // Prevent multiple clicks
    
    // Simulate API call
    setTimeout(() => {
        // On success
        btn.innerHTML = 'Success!';
        btn.style.backgroundColor = 'hsl(145, 63%, 42%)'; // Use success color from theme
        console.log("Simulated login success. Redirecting to dashboard...");
        
        // Redirect to dashboard after a short delay
        setTimeout(() => {
            window.location.href = '../../dashboard/html/dashboard.html';
        }, 1000);

    }, 2000);
}
