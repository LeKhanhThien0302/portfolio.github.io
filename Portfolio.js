// ==== NAVBAR SCROLL EFFECT ====
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ==== SMOOTH SCROLL ====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ==== ANIMATION ON SCROLL ====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(sec => observer.observe(sec));

// ==== HOVER SOUND ( nhỏ gọn) ====
const buttons = document.querySelectorAll(".project-btn, .btn");
buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_7a1da7b7d1.mp3?filename=click-124467.mp3");
    audio.volume = 0.2;
    audio.play();
  });
});
const cards = document.querySelectorAll('.hobby-card');
  const hoverImage = document.getElementById('hoverImage');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const img = card.getAttribute('data-img');
      hoverImage.style.backgroundImage = `url(${img})`;
      hoverImage.style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => {
      hoverImage.style.opacity = '0';
    });
  });
// ==== PROJECT IMAGE CAROUSEL ====
const projectCards = document.querySelectorAll('.project-card');

function changeImage(projectIndex, direction) {
  const card = projectCards[projectIndex];
  const images = card.querySelectorAll('.project-images img');
  const dots = card.querySelectorAll('.img-dots .dot');
  
  if (images.length <= 1) return;
  
  let currentIndex = 0;
  images.forEach((img, i) => {
    if (img.classList.contains('active')) currentIndex = i;
  });
  
  images[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  
  currentIndex += direction;
  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;
  
  images[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function setImage(projectIndex, imageIndex) {
  const card = projectCards[projectIndex];
  const images = card.querySelectorAll('.project-images img');
  const dots = card.querySelectorAll('.img-dots .dot');
  
  images.forEach(img => img.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  images[imageIndex].classList.add('active');
  dots[imageIndex].classList.add('active');
}
// Lấy tất cả sections và nav links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

// Hàm để highlight nav link tương ứng
function highlightNavOnScroll() {
  const scrollPosition = window.scrollY + 150; // offset để trigger sớm hơn

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    // Kiểm tra xem section có đang hiển thị trên màn hình không
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Xóa active class khỏi tất cả links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Thêm active class vào link tương ứng
      const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Lắng nghe sự kiện scroll
window.addEventListener('scroll', highlightNavOnScroll);

// Chạy 1 lần khi load trang
highlightNavOnScroll();

// Smooth scroll khi click vào nav link (bonus)
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100, // offset cho navbar fixed
        behavior: 'smooth'
      });
    }
  });
});

