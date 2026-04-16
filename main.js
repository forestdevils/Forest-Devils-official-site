function initBurger() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    if (!burger || !nav) return;

    const icon = burger.querySelector('i');
    // Використовуємо onclick, щоб уникнути дублювання подій
    burger.onclick = () => {
        nav.classList.toggle('active');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    };
}

// Функція, що визначає шлях до кореня проєкту
const getProjectPath = () => {
    const path = window.location.pathname;
    if (path.includes('/ForestDevils/')) {
        return '/ForestDevils/';
    }
    return '/';
};

const projectRoot = getProjectPath();

fetch(projectRoot + 'pages/nav.html')
    .then(res => res.text())
    .then(data => {
        const nav = document.getElementById('nav');
        if (nav) {
            nav.innerHTML = data;

            // Виправляємо посилання в меню, щоб вони теж враховували корінь
            const links = nav.querySelectorAll('a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href.startsWith('/')) {
                    link.setAttribute('href', projectRoot + href.substring(1));
                }

                // Підсвітка активного пункту
                if (window.location.href.includes(link.href)) {
                    link.classList.add('active');
                }
            });

            initBurger();
        }
    });