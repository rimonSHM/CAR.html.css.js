const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu show
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu') // fixed from show-menu0
  })
}

// Menu hidden 
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav__link') // added definition



const swiperHome = new Swiper('.home__swiper', {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBuller: (index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
      }
    
    }
});




 const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
  });

  /*============= CHANGE BACKGROUND HEADER ============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
    header.classList.add('bg-header');
  } else {
    header.classList.remove('bg-header');
  }
}

window.addEventListener('scroll', scrollHeader);


/*============= SHOW SCROLL UP ============*/
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)




/*============== SCROLL SECTIONS ACTIVE LINK ==============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      if (sectionsClass) sectionsClass.classList.add('active-link');
    } else {
      if (sectionsClass) sectionsClass.classList.remove('active-link');
    }
  });
};


/*====================== SCROLL REVEAL ANIMATION==============*/

// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2000,
//   delay: 300,
//   // reset: true, // Animations repeat

// })

// sr.reveal(.home__bg, {scale: 1.1, opacity: 1})
// sr.reveal(.home__swiper, {origin: 'right', distance: '300px', delay: 800})
// sr.reveal(.home__data, {origin: 'bottom', distance: '120px', delay: 1600}



const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true, // Animations repeat
})


sr.reveal(`.home__bg`, { scale: 1.1, opacity: 1 })
sr.reveal(`.home__swiper`, { origin: 'right', distance: '300px', delay: 800 })
sr.reveal(`.home__data`, { origin: 'bottom', distance: '120px', delay: 1600 })
sr.reveal('.class1, .class2', { ...options })
sr.reveal('.nav__link', {
  interval: 200
})



