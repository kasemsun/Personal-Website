/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
$('#user-form').on('submit', Submitform);
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

});

    function sendEmail() {

        // Define the email parameters
        let messages = `from: ${$('#name').val()} \n tel:${$('#phone').val()} \n ${$('#message').val()}`;
        const emailParams = {
            from_name: $('#email').val(),
            message: messages,
        };
        console.log(emailParams);
    
        // Send the email
        emailjs.send('service_369n4ub', 'template_4norfeq', emailParams)
        .then(function(response) {
        handleSuccess(response);
        }, function(error) {
        handleFailure(error);
        });

        $('#submitButton').prop('disabled', true);
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

    function Submitform(e){
        console.log("submit",e);
        sendEmail();
        e.preventDefault();
    }
