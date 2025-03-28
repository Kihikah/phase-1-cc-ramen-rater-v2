// index.js
const BASE_URL = "http://localhost:3000/ramens";
// Callbacks

const displayRamens = () => {
  // Add code
  fetch(BASE_URL)
    .then(response => response.json())
    .then(ramens => {
      const ramenMenu = document.getElementById("ramen-menu");
      ramenMenu.innerHTML = ""; // Clear existing content
      ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
      });
      if (ramens.length > 0) {
        handleClick(ramens[0]); // Show first ramen details on load
      }
    })
    .catch(error => console.error("Error fetching ramens:", error));
};

const handleClick = (ramen) => {
  // Add code
  document.querySelector(".detail-image").src = ramen.image;
  document.querySelector(".name").textContent = ramen.name;
  document.querySelector(".restaurant").textContent = ramen.restaurant;
  document.getElementById("rating-display").textContent = ramen.rating;
  document.getElementById("comment-display").textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const newRamen = {
      name: event.target["new-name"].value,
      restaurant: event.target["new-restaurant"].value,
      image: event.target["new-image"].value,
      rating: event.target["new-rating"].value,
      comment: event.target["new-comment"].value
    };
    
    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener("click", () => handleClick(newRamen));
    document.getElementById("ramen-menu").appendChild(img);
    form.reset();
  });
}



const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
}

//main()
document.addEventListener("DOMContentLoaded", main);

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
