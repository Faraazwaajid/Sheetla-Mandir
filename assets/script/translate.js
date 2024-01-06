// document.querySelectorAll(".lang-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("click");
//     document.querySelectorAll(".hindi").forEach((d) => {
//       d.classList.toggle("hidden");
//     });
//     document.querySelectorAll(".english").forEach((d) => {
//       d.classList.toggle("hidden");
//     });
//   });
// });


// Function to toggle language and save preference
function toggleLanguage() {
  document.querySelectorAll(".hindi").forEach((d) => {
    d.classList.toggle("hidden");
  });

  document.querySelectorAll(".english").forEach((d) => {
    d.classList.toggle("hidden");
  });

  // Save user preference to localStorage
  const currentLanguage = localStorage.getItem("language") || "hindi";
  const newLanguage = currentLanguage === "english" ? "hindi" : "english";
  localStorage.setItem("language", newLanguage);
}

// Event listener for language buttons
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", toggleLanguage);
});

// Function to set initial language based on user preference
function setInitialLanguage() {
  const currentLanguage = localStorage.getItem("language") || "hindi";
  console.log(currentLanguage)
  if (currentLanguage === "hindi") {
    document.querySelectorAll(".english").forEach((d) => {
      d.classList.add("hidden");
    });
  } else {
    document.querySelectorAll(".hindi").forEach((d) => {
      d.classList.add("hidden");
    });
  }
}

// Set initial language when the page loads
setInitialLanguage();
