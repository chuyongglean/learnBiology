console.log("Signup page script initialized.");

function signup() {
    console.log("Signup function triggered.");
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const btn = document.querySelector('.auth-btn');

    if (!fullname || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        console.error('Signup failed: all fields not filled.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        console.error('Signup failed: passwords do not match.');
        return;
    }

    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Creating Account...';
    btn.disabled = true;
    console.log('Simulating account creation...');

    setTimeout(() => {
        console.log(`Signup success for email: ${email}. Redirecting to dashboard.`);
        btn.innerHTML = 'Account Created!';
        btn.style.backgroundColor = 'hsl(145, 63%, 42%)';
        // Redirect to dashboard page
        setTimeout(() => {
            window.location.href = '../../dashboard/html/dashboard.html';
        }, 1000);
    }, 2000);
}
