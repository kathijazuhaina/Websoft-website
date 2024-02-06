document.addEventListener('DOMContentLoaded', function () {
    // Your courses data
    const courses = [
        { name: 'Android App Development', url: 'AndroidDevelopment.html' },
        { name: 'Data Structures and Algorithm', url: 'DSA.html' },
        { name: 'MERN Full Stack Development', url: 'MERN.html' },
        { name: 'Web Development', url: 'Webdevelopment.html' },
    ];

    // Get the search form and input elements
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    // Clear the search input when the page loads
    searchInput.value = '';

    // Create a datalist element
    const dataList = document.createElement('datalist');
    dataList.id = 'courseOptions';

    // Append the datalist to the search input
    searchInput.setAttribute('list', 'courseOptions');
    searchInput.parentNode.appendChild(dataList);

    // Add event listener for input changes
    searchInput.addEventListener('input', function () {
        const inputValue = searchInput.value.toLowerCase().slice(0, 3); // Consider only the first 3 characters

        // Clear existing options
        dataList.innerHTML = '';

        // Filter courses based on the input value
        const filteredCourses = courses.filter(course =>
            course.name.toLowerCase().startsWith(inputValue)
        );

        // Add filtered options to the datalist
        filteredCourses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.name;
            dataList.appendChild(option);
        });
    });

    // Add event listener for form submission
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the search query
        const query = searchInput.value.toLowerCase();

        // Find a course that matches the query
        const matchedCourse = courses.find(course => course.name.toLowerCase().includes(query));

        // If a match is found, redirect to the course page
        if (matchedCourse) {
            window.location.href = matchedCourse.url;
        } else {
            // Handle no match (e.g., show an alert)
            alert('No matching course found.');
        }
    });

    // Get the logo element
    const logo = document.querySelector('.navbar-brand');

    // Add event listener for mouseover event
    logo.addEventListener('mouseover', () => {
        // Add the tilt-effect class when mouse is over the logo
        logo.classList.add('tilt-effect');
    });

    // Add event listener for mouseout event
    logo.addEventListener('mouseout', () => {
        // Remove the tilt-effect class when mouse is out of the logo
        logo.classList.remove('tilt-effect');
    });
});
