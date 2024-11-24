

document.addEventListener('DOMContentLoaded', function () {

    const pageloads = [


        // { id: 'sec-roosroast', url: 'roosroast.html' },
        // { id: 'sec-glansis', url: 'glansis.html' },
        { id: 'sec-livmate', url: 'LivMate.html' },

    ];

    pageloads.forEach(function (element) {
        const pageload = document.getElementById(element.id);
        if (pageload) {
            console.log('Back element found:', pageload);
            pageload.addEventListener('click', function () {
                console.log('Redirecting to:', element.url);
                window.location.href = element.url;
            });
        } else {
            console.log('Back element not found for ID:', element.id);
        }
    });
});








const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const contentOverlay = document.getElementById('contentOverlay');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    contentOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open', isOpen);
});

contentOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('open');
    contentOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
});


var link = document.createElement('link');

link.rel = 'icon';
link.type = 'image/x-icon';
link.href = 'src/favicon.ico';
document.head.appendChild(link);

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 5106440, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');



