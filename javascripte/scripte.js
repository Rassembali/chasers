// Redirect to the second page from the first page
document.getElementById('inscription-btn').addEventListener('click', () => {
    window.location.href = 'second_page.html'; // Redirect to the second page
});

// Specialty Button Logic on the Second Page
document.addEventListener('DOMContentLoaded', () => {
    const specialtyButtons = document.querySelectorAll('.specialty-btn');
    
    // Check if specialty buttons exist
    if (specialtyButtons.length > 0) {
        specialtyButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove the 'active' class from all buttons
                specialtyButtons.forEach(btn => btn.classList.remove('active'));
                // Add 'active' class to the clicked button
                button.classList.add('active');
            });
        });
    }

    // Form submission logic on the second page
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form from refreshing the page
            alert('Proceeding to the next step...'); // Optional alert for debugging
            window.location.href = 'profile_page.html'; // Redirect to the profile page
        });
    }

    // Profile form logic on the third page
    const profileForm = document.getElementById('profile-form');
    const termsCheckbox = document.getElementById('terms');
    
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!termsCheckbox.checked) {
                alert('Vous devez accepter les Conditions Générales d\'Utilisation pour continuer.');
                return;
            }
            // Proceed to the next step
            alert('Profil complété avec succès !'); // Optional alert for debugging
            window.location.href = 'next_step.html'; // Replace with actual next page URL
        });
    }
});
