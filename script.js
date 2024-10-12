
document.addEventListener("DOMContentLoaded", (event) => {
 
  gsap.fromTo(".firstPlanet", { x: -350 }, { duration: 2, x: -8 });
  gsap.fromTo(".secondPlanet", { x: 1000 }, { duration: 2, x: -8 });
  // gsap.fromTo(".main-text", { x: -1000 }, { duration: 2, x: 0, delay: 0.8, y: 250 });
  function setAnimation() {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Zmieniamy animację w zależności od szerokości okna
    if (mediaQuery.matches) {
      // Ekran ma mniej niż 700px
      gsap.fromTo(".logo", { y: -70 }, { duration: 2, y: 10, scale: 1.3 });
      gsap.fromTo(".navLinks", { y: -70 }, { duration: 2, y: 10 });
      gsap.fromTo("#mobile-logo", { x: -70 }, { duration: 1, x: 0, delay:1.5});
      gsap.fromTo(".hamburger-menu", { x: 70 }, { duration: 2, x: 0 });
    } else {
      // Ekran ma więcej niż 700px
      gsap.fromTo(".logo", { y: -60 }, { duration: 2, y: 40, scale: 1.3 });
      gsap.fromTo(".navLinks", { y: -60 }, { duration: 2, y: 40 });
    }
    
    // Animacja dla każdej litery
    const textElement = document.querySelector("#main_h1");  // Używamy selektora ID
    const text = textElement.innerText;
    textElement.innerHTML = text.split("").map(char => `<span class="char">${char}</span>`).join("");
  
    
    const tl = gsap.timeline();
    tl.from(".char", {
      duration: 0.3,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "elastic.out",
      stagger: 0.05,
      delay: 0.8
     
    });
  

    const buttons = document.querySelectorAll("#first-button, #second-button"); // Wybieramy oba przyciski
    buttons.forEach(button => {
      gsap.from(button, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 20, // Możesz zmienić, aby przyciski pojawiały się z góry
        ease: "back.out",
        delay: 2.4 // Możesz ustawić opóźnienie, jeśli chcesz, aby przyciski pojawiły się po animacji tekstu
      });
    });
  
  };


  



  // Wywołanie animacji podczas ładowania strony
  setAnimation();

  // Nasłuchiwanie zmian rozmiaru okna i ponowne uruchomienie animacji
  //   window.addEventListener('resize', setAnimation);
});


// funkcja toogle na menu

// document.querySelector('.mobile-burger').addEventListener('click', function() {
//   // Przełącza klasę "open" na menu
//   document.querySelector('.nav-links-mobile').classList.toggle('open');
//   // Przełącza klasę "burger-active" na ikonie burgera
//   document.querySelector('.mobile-burger').classList.toggle('burger-active');
// });
const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

