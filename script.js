// Sidebar Open and Close Buttons
const openBtn = document.getElementById("openBtn");
const sidebar = document.getElementById("mySidebar");

openBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open"); // Toggle open class on sidebar
});

// Background Change Button
const changeBackgroundBtn = document.getElementById("changeBackgroundBtn");
const background = document.getElementById("background");
const scrollSection = document.getElementById("scrollSection");

// Change Background to 'moon.jpg' when "hm" button is clicked
changeBackgroundBtn.addEventListener("click", () => {
    background.style.backgroundImage = "url('moon.jpg')"; // Change background to moon.jpg
    scrollSection.style.display = "block";
});
