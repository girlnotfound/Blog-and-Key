// access HTML elements
const usernameEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const contentEl = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const informationEl = document.querySelector('#information');
let blogCollection = JSON.parse(localStorage.getItem("blog")) || [];

// event listener
submitButton.addEventListener("click", function (event) {
  // preventing default behavior
  event.preventDefault();

if (usernameEl.value === "" || titleEl.value === "" || contentEl.value === "") {
    alert("Please fill out your username, title and blog text")
} else {
    // create a new blog post object
    const blogPost = {
      username: usernameEl.value,
      title: titleEl.value,
      content: contentEl.value,
    };
 blogCollection.push(blogPost);
    // storing data in local storage
    localStorage.setItem("blog", JSON.stringify(blogCollection));

      // redirect to blog page
    window.location.replace("blog.html");
  }
});