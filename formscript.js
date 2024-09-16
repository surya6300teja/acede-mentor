// Initialize flatpickr for the deadline input
flatpickr("#deadline", {
    dateFormat: "Y-m-d",
     minDate: "today"
 });


// File upload preview
const fileUpload = document.getElementById('file-upload');
const fileUploadLabel = document.querySelector('label[for="file-upload"]');

fileUpload.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
        fileUploadLabel.textContent = `${files.length} file(s) selected`;
    } else {
        fileUploadLabel.textContent = 'Upload a file';
    }
});


// Form submission
const form = document.getElementById('project-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validate form fields before proceeding
    if (!validateForm()) {
        alert('Please fill in all required fields.');
        return;
    }

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Add selected services
    data.services = Array.from(formData.getAll('services'));

    // Add file information
    data.files = Array.from(fileUpload.files).map(file => file.name);

    // For this example, we'll just log it to the console
    console.log('Form data:', data);

    // Show a success message (in a real application, you'd do this after a successful server response)
    alert('Thank you for submitting your project! We will get back to you soon with a quote.');
});

// Optional: Add form validation
function validateForm() {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('border-red-500');
        } else {
            field.classList.remove('border-red-500');
        }
    });

    return isValid;
}
