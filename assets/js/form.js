// access HTML elements
const usernameEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const contentEl = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const informationEl = document.querySelector('#information');
let blogCollection = JSON.parse(localStorage.getItem("blog")) || [];

//Event Listener
submitButton.addEventListener("click", function (event) {
  //Preventing Default Behavior
  event.preventDefault();

if (usernameEl.value === "" || titleEl.value === "" || contentEl.value === "") {
    alert("Please fill out your username, title and blog text")
} else {
    //Creating Vent Post Object
    const blogPost = {
      username: usernameEl.value,
      title: titleEl.value,
      content: contentEl.value,
    };
 blogCollection.push(blogPost);
    //Storing Data in Local Storage
    localStorage.setItem("blog", JSON.stringify(blogCollection));

    window.location.replace("blog.html");
  }
});