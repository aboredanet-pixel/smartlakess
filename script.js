// ========= ANIMATIONS ON LOAD =========
window.addEventListener("load", () => {
  const fadeItems = document.querySelectorAll(".fade-in");
  fadeItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("appear");
    }, index * 200);
  });

  // Pulse animation for sensor cards
  const sensorCards = document.querySelectorAll(".sensor-card");
  sensorCards.forEach((card, index) => {
    card.style.animationDelay = ${index * 0.2}s;
    card.classList.add("pulse-animation");
  });
});

// ========= RANDOM SENSOR DATA =========
function updateSensors() {
  const tempValue = document.getElementById("tempValue");
  const phValue = document.getElementById("phValue");
  const oxygenValue = document.getElementById("oxygenValue");
  const pollutionValue = document.getElementById("pollutionValue");

  // تحديث القيم بشكل عشوائي
  tempValue.textContent = (22 + Math.random() * 5).toFixed(1) + "°C";
  phValue.textContent = (6.8 + Math.random() * 0.6).toFixed(2);
  oxygenValue.textContent = (80 + Math.random() * 10).toFixed(1) + "%";
  pollutionValue.textContent = (10 + Math.random() * 5).toFixed(1) + "%";

  // تأثير بسيط كل مرة تتحدث فيها البيانات
  const allValues = [tempValue, phValue, oxygenValue, pollutionValue];
  allValues.forEach(val => {
    val.classList.add("value-change");
    setTimeout(() => val.classList.remove("value-change"), 600);
  });
}

setInterval(updateSensors, 2000);

// ========= HOVER EFFECTS =========
const cards = document.querySelectorAll(".sensor-card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hover-glow");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover-glow");
  });
});

// ========= LANGUAGE TOGGLE =========
const langBtn = document.getElementById("langBtn");
let isEnglish = true;

langBtn.addEventListener("click", () => {
  isEnglish = !isEnglish;

  if (isEnglish) {
    langBtn.textContent = "AR";
    document.getElementById("simTitle").textContent = "Real-Time Lake Monitoring";
    document.getElementById("simDesc").textContent = "Live data simulation for Egyptian lakes' digital sensors.";
    document.getElementById("tempLabel").textContent = "Water Temperature";
    document.getElementById("phLabel").textContent = "pH Level";
    document.getElementById("oxygenLabel").textContent = "Oxygen Level";
    document.getElementById("pollutionLabel").textContent = "Pollution Index";
  } else {
    langBtn.textContent = "EN";
    document.getElementById("simTitle").textContent = "مراقبة البحيرات في الوقت الحقيقي";
    document.getElementById("simDesc").textContent = "محاكاة بيانات مباشرة لأجهزة الاستشعار الرقمية في البحيرات المصرية.";
    document.getElementById("tempLabel").textContent = "درجة حرارة المياه";
    document.getElementById("phLabel").textContent = "مستوى الحموضة (pH)";
    document.getElementById("oxygenLabel").textContent = "نسبة الأكسجين";
    document.getElementById("pollutionLabel").textContent = "مؤشر التلوث";
  }
  // ========= SCROLL ANIMATION =========
const scrollElements = document.querySelectorAll(".scroll-animate");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  scrollElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);
});