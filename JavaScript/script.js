var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 5000, // tempo em milissegundos entre cada slide
      disableOnInteraction: false, // manter o autoplay depois que o usuário interagir
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
      if (window.scrollY >= 1) {
          navbar.style.background = '#2d3850';
          navbar.style.borderBottom = '1px solid #ccc'
          navbar.style.transition = 'all .4s ease'
      } else {
          navbar.style.background = 'transparent'
          navbar.style.borderBottom = 'none'
      }
  })

  let navbarInicio = document.getElementById('inicio');
  let navbarLocalizacao = document.getElementById('localizacao');
  let navbarStudio = document.getElementById('studio');
  let navbarContato = document.getElementById('contato');
 
  
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 0 && window.scrollY <= 500) {
          navbarInicio.style.color = '#FDD996';
          navbarInicio.style.transition = '.3s ease'
          
      } else {
          navbarInicio.style.color= '';
          navbarInicio.style.scale = 'none'
      }

    if (window.scrollY >= 500 && window.scrollY <= 1000){
          navbarLocalizacao.style.color = '#fdd996'
          navbarLocalizacao.style.transition = '.3s ease'
      } else {
          navbarLocalizacao.style.color = ''
          navbarLocalizacao.style.scale = 'none'
      }

    if (window.scrollY >= 1500 && window.scrollY <= 2500){
          navbarStudio.style.color = '#fdd996'
          navbarStudio.style.transition = '.3s ease'
      } else {
          navbarStudio.style.color = ''
          navbarStudio.style.scale = 'none'
      }

    if (window.scrollY >= 4000 && window.scrollY <= 4700){
          navbarContato.style.color = '#fdd996'
          navbarContato.style.transition = '.3s ease'
      } else {
          navbarContato.style.color = ''
          navbarContato.style.scale = 'none'
      }
    })



var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});


class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();







