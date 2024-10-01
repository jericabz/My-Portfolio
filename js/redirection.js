
  function redirectToSection(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input value
    var searchValue = document.getElementById('search-input').value;

    // Check if there's a section with that ID
    var section = document.getElementById(searchValue);

    // Scroll to the section if found
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Section with ID "' + searchValue + '" not found.');
    }
  }
