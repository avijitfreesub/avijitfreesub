// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// Quantity selection functionality
const quantitySelect = document.getElementById("quantity");
const servicePrice = document.querySelector(".service-price");

quantitySelect.addEventListener("change", () => {
  const selectedOption = quantitySelect.options[quantitySelect.selectedIndex];
  const priceText = selectedOption.text.split(" - ")[1];
  servicePrice.textContent = priceText;
});

// Button functionality
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

confirmBtn.addEventListener("click", () => {
  const profileLink = document.getElementById("profileLink").value;
  if (!profileLink) {
    alert("Please enter your Instagram profile link");
    return;
  }

  // Simulate loading
  confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
  confirmBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    alert(
      "Order placed successfully! You will receive your followers shortly."
    );
    confirmBtn.innerHTML =
      '<i class="fas fa-check-circle"></i> Confirm & Continue';
    confirmBtn.disabled = false;
  }, 2000);
});

cancelBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
