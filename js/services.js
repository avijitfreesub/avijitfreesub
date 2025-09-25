// Services data array (add an ID for each)
const services = [
  {
    id: 1,
    title: "10K Instagram Followers",
    price: "₹ 150",
    desc: "High-quality real followers for your Instagram profile with instant delivery.",
    img: "images/instagram.png",
    qrcode: "images/qr150.jpg",
  },
  {
    id: 2,
    title: "50K Instagram Post Likes",
    price: "₹ 60",
    desc: "Boost your posts with real likes from active Instagram users.",
    img: "images/insta-post.png",
    qrcode: "images/qr60.jpg",
  },
  {
    id: 3,
    title: "100K Instagram Reel Views",
    price: "₹ 100",
    desc: "Boost your reel views with real views from active Instagram users.",
    img: "images/insta-reels.png",
    qrcode: "images/qr100.jpg",
  },
  {
    id: 4,
    title: "Instagram Blue Tick",
    price: "₹ 49",
    desc: "Get instagram blue tick with real followers.",
    img: "images/insta-blue-tick.png",
    qrcode: "images/qr49.jpg",
  },
  {
    id: 5,
    title: "1K YouTube Subscribers",
    price: "₹ 100",
    desc: "Grow your YouTube channel with real subscribers.",
    img: "images/youtube.png",
    qrcode: "images/qr100.jpg",
  },
  {
    id: 6,
    title: "10K YouTube Views",
    price: "₹ 50",
    desc: "Boost your YouTube views with real subscribers.",
    img: "images/youtube-views.png",
    qrcode: "images/qr50.jpg",
  },
  {
    id: 7,
    title: "TikTok Followers",
    price: "₹ 100",
    desc: "Get real TikTok followers to increase your influence.",
    img: "images/tik-tok.png",
    qrcode: "images/qr100.jpg",
  },
  {
    id: 8,
    title: "Full Monetize Package",
    price: "₹ 150",
    desc: "Get full monetize package.",
    img: "images/rupee.png",
    qrcode: "images/qr150.jpg",
  },
];

// Get container
const container = document.getElementById("services-container");

// Generate HTML dynamically
container.innerHTML = services
  .map(
    (service) => `
      <div class="service-card">
        <div class="service-icon">
          <img src="${service.img}" alt="${service.title}" />
        </div>
        <h3 class="service-title">${service.title}</h3>
        <div class="service-price">${service.price}</div>
        <p class="service-desc">${service.desc}</p>
        <a href="link.html?id=${service.id}" class="btn btn-primary service-btn">Buy Now</a>
      </div>
    `
  )
  .join("");
