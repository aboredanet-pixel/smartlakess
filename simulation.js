/* ==========================
   Sensor Simulation Script
========================== */

// عناصر القيم من الصفحة
const temp = document.getElementById("tempValue");
const oxygen = document.getElementById("oxygenValue");
const pollution = document.getElementById("pollutionValue");
const salinity = document.getElementById("salinityValue");

// دالة لتحديث القيم العشوائية
function updateSensors() {
  temp.textContent = (20 + Math.random() * 10).toFixed(2) + " °C";
  oxygen.textContent = (5 + Math.random() * 3).toFixed(2) + " mg/L";
  pollution.textContent = (Math.random() * 100).toFixed(1) + " %";
  salinity.textContent = (10 + Math.random() * 5).toFixed(2) + " PSU";
}

// أول تحديث عند تحميل الصفحة
updateSensors();
// تحديث القيم كل 5 ثواني
setInterval(updateSensors, 5000);

/* ==========================
   Language Toggle
========================== */
const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

if (langToggle) {
  langToggle.addEventListener('click', () => {
    if (currentLang === 'en') {
      document.body.setAttribute('dir', 'rtl');
      document.documentElement.lang = 'ar';
      langToggle.textContent = 'EN';
      translateToArabic();
      currentLang = 'ar';
    } else {
      document.body.setAttribute('dir', 'ltr');
      document.documentElement.lang = 'en';
      langToggle.textContent = 'AR';
      translateToEnglish();
      currentLang = 'en';
    }
  });
}

/* ==========================
   Translation Functions
========================== */
function translateToArabic() {
  document.querySelector('.section-title').textContent = 'محاكاة الحساسات الذكية';
  document.querySelector('.section-desc').textContent = 'تحديث مباشر كل بضع ثواني يمثل قراءات حساسات حقيقية من بحيرات مصر.';
  document.querySelectorAll('.sensor-card h3')[0].textContent = 'درجة الحرارة';
  document.querySelectorAll('.sensor-card h3')[1].textContent = 'نسبة الأكسجين';
  document.querySelectorAll('.sensor-card h3')[2].textContent = 'معدل التلوث';
  document.querySelectorAll('.sensor-card h3')[3].textContent = 'الملوحة';
}

function translateToEnglish() {
  document.querySelector('.section-title').textContent = 'Smart Sensor Simulation';
  document.querySelector('.section-desc').textContent = 'Live data updates every few seconds representing real sensor readings from Egypt’s lakes.';
  document.querySelectorAll('.sensor-card h3')[0].textContent = 'Temperature';
  document.querySelectorAll('.sensor-card h3')[1].textContent = 'Oxygen Level';
  document.querySelectorAll('.sensor-card h3')[2].textContent = 'Pollution Rate';
  document.querySelectorAll('.sensor-card h3')[3].textContent = 'Salinity';
}