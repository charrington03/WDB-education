// Navbar movements
let vlines = document.getElementById('vlines');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('home').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToHome 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '-116px';

});

document.getElementById('home').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackHome 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '65px';
});

document.getElementById('projects').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToProjects 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '235px';

});

document.getElementById('projects').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackProjects 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '65px';
});

document.getElementById('contact').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToContact 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '428px';

});

document.getElementById('contact').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackContact 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '65px';
});