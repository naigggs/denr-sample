// Get the search input and button
const searchInput = document.querySelector('.nav-search input[type="text"]');
const searchButton = document.querySelector('.nav-search button');

// Add an event listener to the button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    // Perform the search operation with the searchTerm
    // Add your search logic here
    console.log('Searching for: ' + searchTerm);
});
