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
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the search query This line retrieves the search query entered by the user.
        const query = searchInput.value.toLowerCase();

        // This code finds a course from the courses array that matches the search query.
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


/* DOMContentLoaded Event Listener:

The JavaScript code begins by adding an event listener to the DOMContentLoaded event. This event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
Inside this event listener function, the entire JavaScript code is executed once the DOM content is ready.
Courses Data Array:

The courses array contains objects representing different courses offered by the institute. Each object has two properties: name (the name of the course) and url (the URL of the course page).
Search Form and Input Elements:

The JavaScript code retrieves references to the search form and input elements in the HTML document using their respective IDs (searchForm and searchInput).
Clearing Search Input:

The code sets the value of the search input field to an empty string when the page loads.
Creating Datalist Element:

A new datalist element is dynamically created in the JavaScript code with the ID courseOptions.
Appending Datalist to Search Input:

The newly created datalist element is appended to the search input field, allowing it to serve as a list of options for the input field.
Event Listener for Input Changes:

An event listener is added to the search input field to detect changes in its value.
When the user types in the input field, this event listener triggers a function that dynamically filters the courses based on the input value and updates the list of options in the datalist accordingly.
Event Listener for Form Submission:

Another event listener is added to the search form to handle form submission.
When the user submits the form (e.g., by pressing Enter or clicking a search button), this event listener triggers a function that prevents the default form submission behavior.
The function then retrieves the search query entered by the user, searches for a matching course in the courses array, and redirects the user to the corresponding course page if a match is found.
If no matching course is found, an alert is displayed to notify the user.
Logo Element and Mouse Events:

The JavaScript code also retrieves a reference to the logo element with the class navbar-brand.
Event listeners are added to the logo element to handle mouseover and mouseout events.
When the mouse is hovered over the logo, a CSS class tilt-effect is added to apply a visual effect (e.g., tilt effect).
When the mouse moves out of the logo, the tilt-effect class is removed.
*/