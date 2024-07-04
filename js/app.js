AOS.init();

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 300) {
      navbar.classList.add('bg-scroll');
    } else {
      navbar.classList.remove('bg-scroll');
    }

    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Downscroll code
        document.querySelectorAll("[data-aos]").forEach(function(el) {
            el.setAttribute("data-aos", "zoom-out");
        });
    } else {
        // Upscroll code
        document.querySelectorAll("[data-aos]").forEach(function(el) {
            el.setAttribute("data-aos", "zoom-in");
        });
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
  
