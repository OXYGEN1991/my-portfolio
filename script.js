$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto"); 
    });

    $('.navbar .menu li a').click(function(){
        // Applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    new Typed(".typing", {
        strings: ["Illustrator", "Graphic Designer", "Freelancer", "Virtual Assistant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Illustrator", "Graphic Designer", "Freelancer", "Virtual Assistant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Submit button
    const scriptURL = "https://script.google.com/macros/s/AKfycbzwLo0pd4ponPIu8gfVmDrzoXikimzX2FBGDAV-y5TC82AF-HB9JGIL_MXXew7jhdjmlw/exec";
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                form.reset(); // Clears the form inputs
            })
            .catch(error => console.error('Error!', error.message));
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        dots: true, // Enable dots
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Open Modal function
function openModal(imgSrc, captionText) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgSrc;
    caption.innerHTML = captionText;
}

// Close Modal function
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const viewAllBtn = document.getElementById('view-all-btn');
    const showLessBtn = document.getElementById('show-less-btn');
    const galleryItems = Array.from(galleryGrid.children);

    // Set initial visibility of gallery items based on data-limit attribute
    const limit = parseInt(galleryGrid.dataset.limit, 10);
    galleryItems.slice(limit).forEach(item => item.style.display = 'none');

    // Toggle visibility of gallery items when "View All" button is clicked
    viewAllBtn.addEventListener('click', function() {
        galleryItems.forEach(item => item.style.display = 'block');
        viewAllBtn.style.display = 'none';
        showLessBtn.style.display = 'block';
    });

    // Toggle visibility of gallery items to show only the initial limit when "Show Less" button is clicked
    showLessBtn.addEventListener('click', function() {
        galleryItems.slice(limit).forEach(item => item.style.display = 'none');
        viewAllBtn.style.display = 'block';
        showLessBtn.style.display = 'none';
    });
});
