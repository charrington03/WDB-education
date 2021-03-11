// Navbar movements
let vlines = document.getElementById('vlinesH');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('about').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToAbout 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '220px';

});

document.getElementById('about').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackAbout 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '60px';
});

document.getElementById('projects').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToProjects 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '393px';

});

document.getElementById('projects').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackProjects 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '60px';
});

document.getElementById('contact').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToContact 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '582px';

});

document.getElementById('contact').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackContact 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '60px';
});