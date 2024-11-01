// Initialize EmailJS
(function() {
  emailjs.init("YOUR_USER_ID");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Send email
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
          alert('Message sent successfully!');
          document.getElementById('contact-form').reset();
      }, function(error) {
          alert('Oops! Something went wrong. Please try again.');
          console.log('Failed to send message:', error);
      });
});
