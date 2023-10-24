function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  // Additionally, toggle the "dark-mode" class on the header:
  var header = document.querySelector(".head");
  header.classList.toggle("dark-mode-header");

  var imageElement = document.querySelector("img[alt='night-mode']");

  if (element.classList.contains("dark-mode")) {
    imageElement.src = "./images/day-mode.png";
  } else {
    imageElement.src = "./images/night-mode.png";
  }
}

// Get a reference to the button
const scrollToTop = document.getElementById("scrollToTop");

// Show the button when the user scrolls down a certain distance
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

// Add a click event to scroll back to the top
scrollToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function validateEmail() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;

  if (pattern.test(email)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is Valid.";
    text.style.color = "green";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address.";
    text.style.color = "red";
  }
}
