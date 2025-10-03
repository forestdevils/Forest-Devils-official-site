const news = [
    {
        id: "news1",
        images: ["../images/news/issue1.png"],
        title: "Випуск 1",
        date: "17 лютого 2025 року",
    },
    {
        id: "news2",
        images: ["../images/news/issue2.png"],
        title: "Випуск 2",
        date: "25 лютого 2025 року",
    },
    {
        id: "news3",
        images: ["../images/news/issue3.png"],
        title: "Випуск 3",
        date: "1 березня 2025 року",
    },
    {
        id: "news4",
        images: ["../images/news/issue4.png"],
        title: "Випуск 4",
        date: "28 травня 2025 року",
    },
    {
        id: "news5",
        images: ["../images/news/issue5.png"],
        title: "Випуск 5",
        date: "2 липня 2025 року",
    },
    {
        id: "news6",
        images: [
            "../images/news/issue6_1.png",
            "../images/news/issue6_2.png",
            "../images/news/issue6_3.png",
            "../images/news/issue6_4.png",
            "../images/news/issue6_5.png",
            "../images/news/issue6_6.png",
            "../images/news/issue6_7.png",
            "../images/news/issue6_8.png",
        ],
        title: "Випуск 6",
        date: "22 серпня 2025 року",
    }
];

const container = document.querySelector(".news-list");

news.forEach(n => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.onclick = () => openModal(n.id);

    card.innerHTML = `
        <img src="${n.images[0]}" alt="${n.title}">
        <p>${n.title} від ${n.date}</p>
    `;

    container.appendChild(card);
});

// function openModal(id) {
//     const n = news.find(x => x.id === id);
//     document.getElementById('modalNewsImage').src = n.image;
//     document.getElementById('newsModal').style.display = "block";
//     document.body.style.overflow = 'hidden'; // блокуємо прокрутку фону
// }
//
// function closeModal() {
//     document.getElementById('newsModal').style.display = "none";
//     document.body.style.overflow = 'auto';
// }

let currentImageIndex = 0;

function openModal(id) {
    const n = news.find(x => x.id === id);
    currentImageIndex = 0; // починаємо з першої картинки

    const modalImg = document.getElementById('modalNewsImage');
    modalImg.src = n.images[currentImageIndex];
    modalImg.dataset.id = n.id;

    // додаємо кнопки, якщо більше однієї картинки
    const modalText = document.getElementById('modalNewsText');

    // показуємо кнопки навігації
    document.getElementById('prevBtn').style.display = n.images.length > 1 ? "block" : "none";
    document.getElementById('nextBtn').style.display = n.images.length > 1 ? "block" : "none";

    document.getElementById('newsModal').style.display = "block";
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('newsModal').style.display = "none";
    document.body.style.overflow = 'auto';
}

function showNext() {
    const n = news.find(x => x.id === document.getElementById('modalNewsImage').dataset.id);
    currentImageIndex = (currentImageIndex + 1) % n.images.length;
    document.getElementById('modalNewsImage').src = n.images[currentImageIndex];
}

function showPrev() {
    const n = news.find(x => x.id === document.getElementById('modalNewsImage').dataset.id);
    currentImageIndex = (currentImageIndex - 1 + n.images.length) % n.images.length;
    document.getElementById('modalNewsImage').src = n.images[currentImageIndex];
}
