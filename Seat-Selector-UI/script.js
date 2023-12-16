const movieSelect = document.getElementById("movie");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const total = document.getElementById("total");
const checkoutButton = document.querySelector(".checkout");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");

// Function to update total price
function updateTotalPrice() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const ticketPrice = +movieSelect.value;
  const selectedSeatsCount = selectedSeats.length;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Function to generate a random ID
function generateID() {
  return Math.floor(Math.random() * 10000);
}

// Function to show the popup
function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.visibility = "visible";
}

// Function to hide the popup
function hidePopup() {
  popup.style.visibility = "hidden";
}

// Function to reserve and mark selected seats as sold
function reserveSelectedSeats() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const randomID = generateID();

  selectedSeats.forEach((seat) => {
    seat.classList.remove("selected");
    seat.classList.add("sold");
  });

  updateTotalPrice();
  showPopup(`Seats reserved! Your ID is: ${randomID}`);
}

// Seat click event listener
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");
    updateTotalPrice();
  }
});

// Movie select event listener
movieSelect.addEventListener("change", () => {
  updateTotalPrice();
});

// Checkout button click event listener
checkoutButton.addEventListener("click", () => {
  reserveSelectedSeats();
});

function toggleOptions() {
  const movieSelect = document.getElementById("movie");
  movieSelect.style.display =
    movieSelect.style.display === "none" ? "block" : "none";
}
