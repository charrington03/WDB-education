// Navbar movements
let vlines = document.getElementById('vlines');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('home').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToHome 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '-467px';

});

document.getElementById('home').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackHome 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '60px';
});

document.getElementById('about').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToAbout 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '-307px';

});

document.getElementById('about').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackAbout 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '60px';
});

document.getElementById('projects').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToProjects 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '-134px';

});

document.getElementById('projects').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackProjects 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '60px';
});