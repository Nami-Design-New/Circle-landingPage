let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 4000 / goal);
}
window.onscroll = function() {
  if (this.scrollY >= 100) {
    if (!started) {
      numbers.forEach(num => startCount(num));
    }
    started = true;
  }
};
let navLinks = document.querySelectorAll(".nav-link a");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
let toogler = document.querySelector(".toogler");
let menu = document.querySelector(".nav-links");
toogler.addEventListener("click", () => {
  menu.classList.toggle("showing");
  menu.classList.contains("showing")
    ? (toogler.querySelector("i").classList =
        "fa-sharp fa-solid fa-bars-staggered")
    : (toogler.querySelector("i").classList = "fa-sharp fa-solid fa-bars");
});
if (navigator.geolocation) {
  var places = [
    { name: "Riyadh", coords: [24.7136, 46.6753] },
    { name: "Jeddah", coords: [21.4858, 39.1925] },
    { name: "Mecca", coords: [21.3891, 39.8579] },
    { name: "Medina", coords: [24.5247, 39.5692] },
    { name: "Dammam", coords: [26.3927, 49.9777] },
    { name: "Khobar", coords: [26.2799, 50.2085] },
    { name: "Abha", coords: [18.2319, 42.5043] }
  ];
  navigator.geolocation.getCurrentPosition(function(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    const map = L.map("mapLocation").setView([24.0, 45.0], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    places.forEach(place => {
      L.marker(place.coords).addTo(map).bindPopup(place.name).openPopup();
    });
    L.marker(coords).addTo(map).bindPopup("This is your Location");
  });
}
// aos
AOS.init({
  offset: 20,
  delay: 50,
  duration: 750,
  once: true
});
