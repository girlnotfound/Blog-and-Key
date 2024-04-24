// access HTML elements
const userName = document.querySelector('#username');
const postTitle = document.querySelector('#title');
const blogContent = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// store username in local storage
function saveBlog () {
    localStorage.setItem("nameOfUser", userName.value);
}

// shows username in local storage
submitButton.addEventListener("click", saveBlog);

// store blog title in local storage
function blogTitle () {
    localStorage.setItem("titleOfBlog", postTitle.value);
}

// shows title in local storage
submitButton.addEventListener("click", blogTitle)

// store posts content in local storage
function postContent () {
    localStorage.setItem("contentInPost", blogContent.value);
}

// shows blogs content in local storage
submitButton.addEventListener("click", postContent)
