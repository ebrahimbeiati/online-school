document.querySelectorAll(".feature").forEach((feature) => {
  feature.addEventListener("click", (event) => {
    // Prevent event propagation to avoid triggering the document click event
    event.stopPropagation();

    // Hide all cards
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "none";
    });

    feature.querySelector(".card").style.display = "block";
  });
});

// Add a click event listener to the document
document.addEventListener("click", () => {
  // Hide all cards when clicking on an empty space
  document.querySelectorAll(".card").forEach((card) => {
    card.style.display = "none";
  });
});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}