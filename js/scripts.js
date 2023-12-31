/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    reveal();
});


    function sendEmail() {

        console.log("send email");
        $.ajax({
            url: "https://formsubmit.co/ajax/fceacebd21abdbb49a5d2ca9f266301c",
            method: "POST",
            data: {
                name: $("#email").val(),
                message: $("#message").val()
            },
            dataType: "json"
        })
        .then(response => {
            handleSuccess(response);
            console.log(response);
            $('#fire-work').addClass('pyro');
            const snd = new Audio("/assets/celebrate.mp3");
            snd.play();
        })
        .catch(error => {
            handleFailure(error);
            console.log(error);
        });
        $('#submitButton').prop('disabled', true).addClass('disabled').removeClass('btn-primary');
    }

    // Function to handle success
    function handleSuccess(response){
        $('#submitSuccessMessage').removeClass('d-none');
        $('#submitErrorMessage').addClass('d-none');
        console.log('Email sent:', response);
    }

    // Function to handle failure
    function handleFailure(error) {
        $('#submitSuccessMessage').addClass('d-none');
        $('#submitErrorMessage').removeClass('d-none');
        console.error('Email error:', error);
    }

    (function () {
        'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }else{
                    sendEmail()
                }
    
                form.classList.add('was-validated')
            }, false)
            })
    })()

window.addEventListener("scroll", reveal);

// To check the scroll position on page load

function reveal() {
    let reveals = document.querySelectorAll(".fade-in-element");
    for(const element of reveals) {
      let height = window.innerHeight;
      let elementTop = element.getBoundingClientRect().top;
      if (elementTop < height) {
        element.classList.add("fade-in");
      } else {
        element.classList.remove("fade-in");
      }
    }
  }