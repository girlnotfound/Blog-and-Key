// to navigate back to the homepage
function goBack () {
    window.location.href = './index.html';
}

const blogList = document.querySelector("#blog-list");
let blogs = [];

function renderBlogs() {
    blogList.innerHTML = ''; // to clear the blog list to prepare for new entries
    for (let i = 0; i < blogs.length; i++) {
    let blog = blogs[i];
    
     // create an article element for each blog
    const article = document.createElement("article");

    // set up the title of the blog post
    const h2 = document.createElement("h2");
    h2.className = 'title';
    h2.textContent = "Title: " + blog.title;

     // create and set up the paragraph content
    const p = document.createElement("p");
    p.className = 'content'; 
    p.textContent = blog.content;

    // create and set up the footer to display the author
    const footer = document.createElement("footer");
    footer.className = 'author';
    footer.textContent = "Posted by: " +  blog.username;
    
    // append all elements to the article element
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(footer);
    // append the article to the blog list in the DOM
    blogList.appendChild(article); 
  }
}

// initialize the application
function init() {
  const storedBlogs = JSON.parse(localStorage.getItem("blog"));  // load blogs from local storage

  if (storedBlogs !== null) {
    blogs = storedBlogs;
  }
  // render the blogs on the page
  renderBlogs();
}

// Start the application
init();