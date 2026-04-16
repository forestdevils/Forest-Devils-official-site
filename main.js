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
const isSubPage = window.location.pathname.includes('/pages/');
const navPath = isSubPage ? 'nav.html' : 'pages/nav.html';

fetch(navPath)
    .then(res => {
        if (!res.ok) throw new Error('Неможливо завантажити ' + navPath);
        return res.text();
    })
    .then(data => {
        const nav = document.getElementById('nav');
        if (nav) {
            nav.innerHTML = data;

            // Налаштовуємо посилання після вставки
            const links = nav.querySelectorAll('a');
            links.forEach(link => {
                let href = link.getAttribute('href');

                // Якщо ми на внутрішній сторінці, а посилання веде в pages/
                // прибираємо префікс pages/, бо ми вже там
                if (isSubPage && href.startsWith('pages/')) {
                    link.setAttribute('href', href.replace('pages/', ''));
                }
                // Якщо ми на внутрішній сторінці і йдемо на головну
                else if (isSubPage && href === 'index.html') {
                    link.setAttribute('href', '../index.html');
                }

                // Підсвітка активного пункту
                if (window.location.href.includes(link.href)) {
                    link.classList.add('active');
                }
            });

            // Ініціалізація бургера (якщо функція є в main.js)
            if (typeof initBurger === 'function') initBurger();
        }
    })
    .catch(err => console.error('Помилка навігації:', err));