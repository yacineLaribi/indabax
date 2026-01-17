// Modal functionality for IndabaX Algeria

// Get modal elements
const visitorModal = document.getElementById('visitor-modal');
const participantModal = document.getElementById('participant-modal');

// Get button elements
const visitorRegisterBtn = document.getElementById('visitor-register-btn');
const participantSubmitBtn = document.getElementById('participant-submit-btn');

// Get close elements
const closeButtons = document.querySelectorAll('.close');

// Get forms
const visitorForm = document.getElementById('visitor-form');
const participantForm = document.getElementById('participant-form');

// Open visitor modal
visitorRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    visitorModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Open participant modal
participantSubmitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    participantModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close modals when clicking X
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === visitorModal) {
        visitorModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === participantModal) {
        participantModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Handle visitor form submission (dummy form)
visitorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('visitor-name').value;
    const email = document.getElementById('visitor-email').value;
    const phone = document.getElementById('visitor-phone').value;
    
    // Show success message
    alert(`Thank you for registering, ${name}! We'll send confirmation details to ${email}.`);
    
    // Reset form
    visitorForm.reset();
    
    // Close modal
    visitorModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Handle participant form submission (Google Forms integration)
participantForm.addEventListener('submit', function(e) {
    // Let the form submit to Google Forms naturally
    // Don't prevent default
    
    // Get the name for personalized message
    const participantName = document.getElementById('participant-name').value;
    
    // Show success message after a short delay (form submits in background)
    setTimeout(() => {
        alert(`Thank you for your submission, ${participantName}! We will review your application and send you a link to upload your poster via email.`);
        
        // Reset form
        participantForm.reset();
        
        // Close modal
        participantModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 500);
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (visitorModal.style.display === 'block') {
            visitorModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (participantModal.style.display === 'block') {
            participantModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});