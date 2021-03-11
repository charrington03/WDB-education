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
    vlines.style.left = '46px';
});

document.getElementById('projects').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToProjects 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '217px';

});

document.getElementById('projects').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackProjects 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '46px';
});

document.getElementById('contact').addEventListener('mouseenter', async e => {
    vlines.style.animation = 'moveToContact 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '407px';

});

document.getElementById('contact').addEventListener('mouseleave', async e => {
    vlines.style.animation = 'moveBackContact 0.2s ease-in-out';
    await sleep(20);
    vlines.style.left = '46px';
});

// Overlay Nav Menu

document.getElementById('dropdown').onclick = function openOverlay () {
    document.getElementById('fullnav').style.height = '100%';
};

document.getElementById('fullnav-x').onclick = function closeOverlay () {
    document.getElementById('fullnav').style.height = '0%';
};


// Overlay Bar Movements
let hlines = document.getElementById('hlines');

document.getElementById('fullnav-home').addEventListener('mouseenter', async e => {
    hlines.style.animation = 'toHome 0.2s ease-in-out';
    await sleep(20);
    hlines.style.transform = 'translate(0, -102px)';
});

document.getElementById('fullnav-home').addEventListener('mouseleave', async e => {
    hlines.style.animation = 'backHome 0.2s ease-in-out';
    await sleep(20);
    hlines.style.transform = 'translate(0, -34px)';
});

document.getElementById('fullnav-projects').addEventListener('mouseenter', async e => {
    hlines.style.animation = 'toProjects 0.2s ease-in-out';
    await sleep(20);
    hlines.style.transform = 'translate(0, 34px)';
});

document.getElementById('fullnav-projects').addEventListener('mouseleave', async e => {
    hlines.style.animation = 'backProjects 0.2s ease-in-out';
    await sleep(20);
    hlines.style.transform = 'translate(0, -34px)';
});

document.getElementById('fullnav-contact').addEventListener('mouseenter', async e => {
    hlines.style.animation = 'toContact 0.2s ease-in-out';
    await sleep(20);
    hlines.style.transform = 'translate(0, 102px)';
});

document.getElementById('fullnav-contact').addEventListener('mouseleave', async e => {
    hlines.style.animation = 'backContact 0.2s ease-in-out';
    await sleep(20);
    hlines.style.transform = 'translate(0, -34px)';
});