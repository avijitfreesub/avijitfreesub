// ----- IMPORT SERVICES (make sure services.js is loaded before payment.js) -----
// services array is already defined in services.js

// ----- GET URL PARAMS -----
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")); // service id
const profileLink =
  params.get("profile") || "Profile link here";

// ----- SET PROFILE LINK -----
document.querySelector(".profile-link").textContent = profileLink;

// ----- LOAD SERVICE DETAILS -----
const service = services.find((s) => s.id === id);

if (service) {
  // Update service title
  document.querySelector(".payment-service-title").textContent = service.title;

  // Update price
  document.getElementById("amount").textContent = service.price;
  document.querySelector(".payment-service-price").textContent = service.price;

  // Show QR image
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = `<img src="${service.qrcode}" alt="QR Code" width="200">`;
} else {
  // Fallback if wrong ID
  document.querySelector(".payment-service-title").textContent =
    "Invalid Service";
  document.getElementById("amount").textContent = "₹ 0";
  document.getElementById("qrcode").innerHTML =
    "<p style='color:red;'>QR not available</p>";
}

// ----- TIMER -----
let timeLeft = 300;
const timerElement = document.getElementById("timer");
const timerInterval = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60 < 10 ? "0" + (timeLeft % 60) : timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds}`;
  if (timeLeft <= 60) timerElement.classList.add("expiring");
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timeoutModal").style.display = "flex";
  }
  timeLeft--;
}, 1000);

// ----- BUTTONS -----
document.getElementById("completeBtn")?.addEventListener("click", () => {
  alert("Payment completed successfully!");
  window.location.href = "index.html";
});

document.getElementById("cancelBtn")?.addEventListener("click", () => {
  if (confirm("Are you sure you want to cancel this payment?")) {
    window.location.href = "index.html";
  }
});

document.getElementById("modalOkBtn")?.addEventListener("click", () => {
  window.location.href = "index.html";
});
