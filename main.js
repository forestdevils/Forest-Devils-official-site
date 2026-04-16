const initNavigation = () => {
    // Визначаємо базу: для GitHub це '/Forest-Devils-official-site/', для локалки може бути інше
    const pathArray = window.location.pathname.split('/');
    // Якщо ми на GitHub Pages, назва репозиторію зазвичай є першим елементом шляху
    const repoName = pathArray[1] === 'Forest-Devils-official-site' ? '/Forest-Devils-official-site/' : '/';

    const isInsidePages = window.location.pathname.includes('/pages/');

    // Формуємо шлях: якщо ми вже в pages, беремо nav.html поруч, якщо ні - йдемо в папку pages
    const navPath = isInsidePages ? 'nav.html' : 'pages/nav.html';

    fetch(navPath)
        .then(response => {
            if (!response.ok) throw new Error(`Status: ${response.status}`);
            return response.text();
        })
        .then(html => {
            const navElement = document.getElementById('nav');
            if (navElement) {
                navElement.innerHTML = html;
                setupLinks(navElement, isInsidePages, repoName);
                initBurger();
            }
        })
        .catch(error => console.error('Navigation error:', error));
};

function setupLinks(navElement, isInsidePages, repoName) {
    const links = navElement.querySelectorAll('a');
    links.forEach(link => {
        let href = link.getAttribute('href');

        // Видаляємо початковий слеш, якщо він є в nav.html, щоб працювати відносно
        if (href.startsWith('/')) href = href.substring(1);

        if (isInsidePages) {
            // Корекція для вкладених сторінок
            if (href.startsWith('pages/')) {
                link.setAttribute('href', href.replace('pages/', ''));
            } else if (href === 'index.html') {
                link.setAttribute('href', '../index.html');
            }
        }

        if (window.location.href.includes(link.href)) {
            link.classList.add('active');
        }
    });
}

function initBurger() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    if (burger && nav) {
        burger.onclick = () => {
            nav.classList.toggle('active');
            const icon = burger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        };
    }
}

initNavigation();