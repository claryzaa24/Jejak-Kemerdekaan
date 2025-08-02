'use strict';

  window.onload = function() {
    alert("Selamat datang di Jejak Kemerdekaan!\nMari mengenang perjuangan para pahlawan dan semangat 17 Agustus yang membara.");
  };

/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// semakin discroll hero semakin buram
const hero = document.querySelector('.hero-section');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50 && scrollY < 300) {
      hero.classList.add('blur-active');
      hero.classList.remove('solid-active');
    } else if (scrollY >= 300) {
      hero.classList.remove('solid-active');
      hero.classList.add('blur-active');
    } else {
      hero.classList.remove('blur-active');
      hero.classList.remove('solid-active');
    }
  });

//  EMAIL

 const form = document.getElementById('emailForm');
  const emailInput = document.getElementById('emailInput');
  const message = document.getElementById('emailMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      message.style.color = 'lightgreen';
      message.textContent = '✅ Email berhasil dikirim!';
    } else {
      message.style.color = 'salmon';
      message.textContent = '❌ Email tidak valid. Coba lagi.';
    }

    // Kosongkan form setelah submit
    emailInput.value = '';
  });


  


/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

// KOTAK APUNG
function showBiodata(imgSrc, name, detail, desc) {
    document.getElementById("biodataImg").src = imgSrc;
    document.getElementById("biodataName").textContent = name;
    document.getElementById("biodataDetail").textContent = detail;
    document.getElementById("biodataDesc").textContent = desc;
    document.getElementById("biodataModal").classList.add("active");
  }

  function closeModal() {
    document.getElementById("biodataModal").classList.remove("active");
  }


/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});

// From 
  document.getElementById('formPendaftaran').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const nomor = document.getElementById("nomor").value;
    const kategori = document.getElementById("kategori").value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked');

    // Validasi
    if (!nama || !nomor || !kategori || !jenisKelamin) {
      alert("Mohon lengkapi semua data terlebih dahulu.");
      return;
    }

    // Konfirmasi
    const yakin = confirm(`Apakah data yang Anda masukkan sudah benar?

    Nama           : ${nama}
    Jenis Kelamin  : ${jenisKelamin.value}
    Nomor HP       : ${nomor}
    Pahlawan       : ${kategori}`);

    if (!yakin) {
      alert("Silakan periksa kembali data Anda.");
      return;
    }

    // Prompt pesann
    const pesan = prompt('Berikan masukan atau pesan untuk kami');
    if (!pesan) {
      alert('Tidak ada pesan. Tidak dapat terhubung.');
      return;
    }

    // Validasi hasil
    alert("Pendaftaran berhasil!\n\n" +
      "Nama: " + nama + "\n" +
      "Jenis Kelamin: " + jenisKelamin.value + "\n" +
      "Nomor HP: " + nomor + "\n" +
      "Pahlawan: " + kategori + "\n" +
      "Pesan: " + pesan);

    this.reset(); // kosongkan form setelah submit
  });