// script.js
document.addEventListener("DOMContentLoaded", function () {
    // ===================
    // Part 1: Event Handling
    // ===================
  
    // Button click to change background color
    const colorButton = document.getElementById("colorButton");
    colorButton.addEventListener("click", function () {
      const randomColor =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
      document.body.style.backgroundColor = randomColor;
    });
  
    // Hover effects for hoverArea
    const hoverArea = document.getElementById("hoverArea");
    hoverArea.addEventListener("mouseover", function () {
      hoverArea.style.backgroundColor = "yellow";
    });
    hoverArea.addEventListener("mouseout", function () {
      hoverArea.style.backgroundColor = "#ddd";
    });
  
    // Keypress detection: display pressed key
    const keyInput = document.getElementById("keyInput");
    const keypressOutput = document.getElementById("keypressOutput");
    keyInput.addEventListener("keydown", function (e) {
      keypressOutput.textContent = "Key pressed: " + e.key;
    });
  
    // Bonus: Secret action on double-click
    const secretButton = document.getElementById("secretButton");
    secretButton.addEventListener("dblclick", function () {
      alert("Secret action triggered!");
    });
  
    // ===================
    // Part 2: Interactive Elements
    // ===================
  
    // Toggle button to change text and background color
    const toggleButton = document.getElementById("toggleButton");
    let toggleState = false;
    toggleButton.addEventListener("click", function () {
      toggleState = !toggleState;
      toggleButton.textContent = toggleState ? "State: ON" : "State: OFF";
      toggleButton.style.backgroundColor = toggleState ? "orange" : "lightgreen";
    });
  
    // Image Gallery / Slideshow
    const images = document.querySelectorAll("#gallery img");
    let currentImageIndex = 0;
    const showImage = (index) => {
      images.forEach((img, idx) => {
        img.classList.toggle("active", idx === index);
      });
    };
  
    document.getElementById("prev").addEventListener("click", function () {
      currentImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });
    document.getElementById("next").addEventListener("click", function () {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });
  
    // Accordion for tabs/accordion-style content
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const content = header.nextElementSibling;
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      });
    });
  
    // ===================
    // Part 3: Form Validation
    // ===================
  
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const formMessage = document.getElementById("formMessage");
  
    // Real-time feedback for Name field
    nameInput.addEventListener("input", function () {
      const error = document.getElementById("nameError");
      error.textContent =
        nameInput.value.trim() === "" ? "Name is required." : "";
    });
  
    // Real-time feedback for Email field
    emailInput.addEventListener("input", function () {
      const error = document.getElementById("emailError");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error.textContent = emailPattern.test(emailInput.value)
        ? ""
        : "Invalid email format.";
    });
  
    // Real-time feedback for Password field
    passwordInput.addEventListener("input", function () {
      const error = document.getElementById("passwordError");
      error.textContent =
        passwordInput.value.length < 8
          ? "Password must be at least 8 characters."
          : "";
    });
  
    // Final form validation on submit
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;
      if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        valid = false;
      }
      if (passwordInput.value.length < 8) {
        document.getElementById("passwordError").textContent =
          "Password must be at least 8 characters.";
        valid = false;
      }
  
      if (valid) {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
        form.reset();
        // Clear error messages after successful submission
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";
      } else {
        formMessage.textContent = "Please fix the errors and try again.";
        formMessage.style.color = "red";
      }
    });
  });