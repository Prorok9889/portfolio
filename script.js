const reveal = () => {
    const reveals = document.querySelectorAll('.reveal, .skill-card, .timeline-item, .edu-card');
    const windowHeight = window.innerHeight;
    const revealPoint = 100; 

    reveals.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};


window.addEventListener('scroll', reveal);


const textElement = document.querySelector('.hero p');

const phrases = [
    "IT Викладач", 
    "SEO & SMM Спеціаліст", 
    "Менеджер із закупівель", 
    "Digital Specialist"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
  
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
    
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }


    let typeSpeed = isDeleting ? 50 : 100;

  
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } 
    
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; 
    }

    setTimeout(typeLoop, typeSpeed);
}


window.addEventListener('DOMContentLoaded', () => {

    typeLoop();
    

    document.querySelectorAll('.hero .reveal').forEach(el => {
        el.classList.add('active');
    });
    

    reveal();
});