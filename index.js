//This event listener ensures that the JavaScript code inside it will execute only after the HTML content of the 
//page has been fully loaded and parsed.
document.addEventListener('DOMContentLoaded', function () {

    //This is an array of objects representing different courses, where each object contains the name of
    // the course and its corresponding URL.
    const courses = [
        { name: 'Android App Development', url: 'AndroidDevelopment.html' },
        { name: 'Data Structures and Algorithm', url: 'DSA.html' },
        { name: 'MERN Full Stack Development', url: 'MERN.html' },
        { name: 'Web Development', url: 'Webdevelopment.html' },
    ];

    //retrieve references to the search form and input elements by their respective IDs from index.html. 
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    //This line clears the search input field when the page loads.
    searchInput.value = '';

    // create a <datalist> element with the ID 'courseOptions', which will be used to display suggestions for 
    //course names in the search input.
    const dataList = document.createElement('datalist');
    dataList.id = 'courseOptions';


    // These lines set the 'list' attribute of the search input to 'courseOptions' and 
    //append the datalist element to the parent node of the search input.
    searchInput.setAttribute('list', 'courseOptions');
    searchInput.parentNode.appendChild(dataList);


    //This event listener triggers whenever there is an input change in the search input field.
    searchInput.addEventListener('input', function () {
        const inputValue = searchInput.value.toLowerCase().slice(0, 3); // Consider only the first 3 characters

        // Clear existing options
        dataList.innerHTML = '';

        // Filter courses based on the input value
        const filteredCourses = courses.filter(course =>
            course.name.toLowerCase().startsWith(inputValue)
        );

        // This code dynamically adds options to the datalist based on the filtered courses.
        filteredCourses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.name;
            dataList.appendChild(option);
        });
    });


    // This event listener triggers when the search form is submitted.
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior, handle the search without reloading the page

        // Get the search query This line retrieves the search query entered by the user.
        const query = searchInput.value.toLowerCase();

        // finds a course from the courses array that matches the search query.
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









  
 