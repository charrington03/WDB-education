// Navbar movements
let vlines = document.getElementById('vlines');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('home').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToHome 0.2s ease-in-out';
    await sleep(0);
    vlines.style.left = '-275px';

});

document.getElementById('home').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackHome 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '76px';
});

document.getElementById('about').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToAbout 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '-115px';

});

document.getElementById('about').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackAbout 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '76px';
});

document.getElementById('contact').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToContact 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '267px';

});

document.getElementById('contact').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackContact 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '76px';
});

// Down button
document.getElementById('down').onclick = function scrollDown() {
    window.scrollTo({
        top: 665, left: 0, behavior: 'smooth'
    })
};

// Sticky navbar
let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;

window.onscroll= function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};