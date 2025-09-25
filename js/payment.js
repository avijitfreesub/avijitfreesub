 // ----- CONFIG -----
  const upiId = "7864996309-zeea-2@ybl";
  const name = "Avijit Dutta";
  const profileLink =
    new URLSearchParams(window.location.search).get("profile") ||
    "Profile link here";
  document.querySelector(".profile-link").textContent = profileLink;

  // ----- SET AMOUNT FROM URL -----
  const params = new URLSearchParams(window.location.search);
  const price = params.get("price") || "0";
  const amountSpan = document.getElementById("amount");
  amountSpan.textContent = price;

  // ----- FUNCTION TO GENERATE QR -----
  function generateQR() {
    const amount = amountSpan.textContent.replace(/[^\d.]/g, "");
    const upiURL = `upi://pay?pa=${encodeURIComponent(
      upiId
    )}&pn=${encodeURIComponent(name)}&am=${encodeURIComponent(amount)}&cu=INR`;

    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, {
      text: upiURL,
      width: 200,
      height: 200,
      correctLevel: QRCode.CorrectLevel.H,
    });
  }

  generateQR(); // generate initially

  // Observe changes to the amount span
  const observer = new MutationObserver(generateQR);
  observer.observe(amountSpan, { childList: true, characterData: true });

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