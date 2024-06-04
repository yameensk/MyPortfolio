/*======= Show Menu========*/ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    /*===== Menu Show =====*/

    /*Validate if constant exist*/

    if (navToggle){
       navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu');
       });

    }

        /*===== Menu Hide =====*/
    /*Validate if constant exist*/

    if (navClose){
       navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu');
       });

    }

    /*===== Remove Menu Mobile =====*/
    const navLink = document.querySelectorAll('.nav__link');
    


    function linkAction(){
        const navMenu = document.getElementById('nav-menu');
        //when we click on each link, we remove the show-menu class
        navMenu.classList.remove('show-menu');
    }
        
    navLink.forEach((n) => n.addEventListener('click' , linkAction));
    


/*=======BackGround Header ========*/ 

function scrollHeader(){
    const header = document.getElementById('header');
  //when the scroll is greater than 50 vh , add the scroll-header class to header tag
    if (this.scrollY >=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  }
  console.log(header)
  
  window.addEventListener('scroll', scrollHeader);

/*=======Contact Form Email Js========*/ 

  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail= document.getElementById('contact-email'),
        message = document.getElementById('message'),
        contactMessage = document.getElementById('contact-message');
        contactMessage.textContent = '';
        
        const sendEmail = (e) => {

            e.preventDefault();

            //check if the field has a value

            if ( contactName.value === '' ||
                 contactEmail.value === '' ||
                 message.value === '') {

                 //add and remove color
                 contactMessage.classList.remove('color-light');
                 contactMessage.classList.add('color-warn');
                 
                    
                //show message

                contactMessage.textContent = 'Complete all fields*'
                
                setTimeout(()=>{
                    contactMessage.textContent = '';
                  }, 3000);

            } else {
                //serviceID - templateID -#form -publickey
                
                emailjs.sendForm('service_l6vqyow','template_he8mtss','#contact-form','EmwoBmZ9rbJGo30RI')
                .then(() => {

                  //show message and add color, window + dot to open emoji
                  contactMessage.classList.remove('color-warn');
                  contactMessage.classList.add('color-light');
                  contactMessage.textContent = 'Message sent ✅';


                  //remove message after 5 seconds
                  setTimeout(()=>{
                    contactMessage.textContent = '';
                  }, 3000);

                }, (error) =>{
                    alert('OOPs! SOMETHING WENT WRONG... ', error)
                }
                );
                //clear input fields
                contactName.value = '';
                contactEmail.value = '';
                message.value = '';

            };
        };

        contactForm.addEventListener('submit', sendEmail );

    /*=======Style Switcher========*/ 
    
        const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
        styleSwitcher = document.querySelector('.style__switcher');

        styleSwitcherToggle.addEventListener('click', ()=> {
        styleSwitcher.classList.toggle('open');

        });

        //hide switcher on scroll

        window.addEventListener('scroll', ()=> {
            if(styleSwitcher.classList.contains('open')){
                styleSwitcher.classList.remove('open');
            }
        });

        const alternateStyles = document.querySelectorAll('.alternate-style');

        function setActiveStyle(color) {
            alternateStyles.forEach((style) =>{
                if(color === style.getAttribute('title')){
                    style.removeAttribute('disabled');
                }

                else {
                    style.setAttribute('disabled' , 'true');
                }
            });
        }

    


