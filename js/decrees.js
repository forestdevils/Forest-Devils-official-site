const decrees = [
    {
        id: "decree1",
        images: ["../images/decrees/decree1.jpg"],
        title: "Постанова №001-п",
        date: "21 серпня 2025 року",
    },
    {
        id: "decree2",
        images: ["../images/decrees/decree2.jpg"],
        title: "Постанова №002-п",
        date: "21 серпня 2025 року",
    },
    {
        id: "decree3",
        images: ["../images/decrees/decree3.jpg"],
        title: "Постанова №003-п",
        date: "22 серпня 2025 року",
    },
    {
        id: "decree4",
        images: ["../images/decrees/decree4.jpg"],
        title: "Постанова №004-п",
        date: "23 серпня 2025 року",
    },
    {
        id: "decree5",
        images: ["../images/decrees/decree5.jpg"],
        title: "Постанова №005-п",
        date: "25 серпня 2025 року",
    }
    ,
    {
        id: "decree6",
        images: ["../images/decrees/decree6.jpg"],
        title: "Постанова №006-п",
        date: "19 вересня 2025 року",
    },
    {
        id: "decree7",
        images: ["../images/decrees/decree7.jpg"],
        title: "Постанова №007-п",
        date: "30 вересня 2025 року",
    },
    {
        id: "decree8",
        images: ["../images/decrees/decree8.jpg"],
        title: "Постанова №008-п",
        date: "4 жовтня 2025 року",
    },
    {
        id: "decree9",
        images: ["../images/decrees/decree9.jpg"],
        title: "Постанова №009-п",
        date: "6 жовтня 2025 року",
    },
    {
        id: "decree10",
        images: ["../images/decrees/decree10-1.jpg", "../images/decrees/decree10-2.jpg"],
        title: "Постанова №010-п",
        date: "14 жовтня 2025 року",
    },
    {
        id: "decree11",
        images: ["../images/decrees/decree11.jpg"],
        title: "Постанова №011-п",
        date: "18 жовтня 2025 року",
    },
    {
        id: "decree12",
        images: ["../images/decrees/decree12.jpg"],
        title: "Постанова №012-п",
        date: "18 жовтня 2025 року",
    },
    {
        id: "decree13",
        images: ["../images/decrees/decree13.jpg"],
        title: "Постанова №013-п",
        date: "5 листопада 2025 року",
    },
    {
        id: "decree14",
        images: ["../images/decrees/decree14.jpg"],
        title: "Постанова №014-п",
        date: "17 листопада 2025 року",
    },
    {
        id: "decree15",
        images: ["../images/decrees/decree15-1.jpg","../images/decrees/decree15-2.jpg"],
        title: "Постанова №015-п",
        date: "23 листопада 2025 року",
    },
    {
        id: "decree16",
        images: ["../images/decrees/decree16-1.jpg","../images/decrees/decree16-2.jpg"],
        title: "Постанова №016-п",
        date: "29 листопада 2025 року",
    },
    {
        id: "decree17",
        images: ["../images/decrees/decree17-1.jpg","../images/decrees/decree17-2.jpg"],
        title: "Постанова №017-п",
        date: "30 листопада 2025 року",
    },
    {
        id: "decree18",
        images: ["../images/decrees/decree18.jpg"],
        title: "Постанова №018-п",
        date: "17 грудня 2025 року",
    },
    {
        id: "decree19",
        images: ["../images/decrees/decree19.jpg"],
        title: "Постанова №019-п",
        date: "31 грудня 2025 року",
    }
];

const container = document.querySelector(".decrees-list");

decrees.forEach(d => {
    const card = document.createElement("div");
    card.classList.add("decree-card");
    card.onclick = () => openModal(d.id);

    card.innerHTML = `
        <img src="${d.images[0]}" alt="${d.title}">
        <p>${d.title} від ${d.date}</p>
    `;

    container.appendChild(card);
});

let currentImageIndex = 0;

function openModal(id) {
    const d = decrees.find(x => x.id === id);
    currentImageIndex = 0;

    const modalImg = document.getElementById('modalImage');
    modalImg.src = d.images[currentImageIndex];
    modalImg.dataset.id = d.id;

    // показуємо / ховаємо кнопки
    document.getElementById('prevBtn').style.display =
        d.images.length > 1 ? "block" : "none";
    document.getElementById('nextBtn').style.display =
        d.images.length > 1 ? "block" : "none";

    document.getElementById('decreeModal').style.display = "block";
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('decreeModal').style.display = "none";
    document.body.style.overflow = 'auto';
}

function showNext() {
    const d = decrees.find(x => x.id === document.getElementById('modalImage').dataset.id);
    currentImageIndex = (currentImageIndex + 1) % d.images.length;
    document.getElementById('modalImage').src = d.images[currentImageIndex];
}

function showPrev() {
    const d = decrees.find(x => x.id === document.getElementById('modalImage').dataset.id);
    currentImageIndex = (currentImageIndex - 1 + d.images.length) % d.images.length;
    document.getElementById('modalImage').src = d.images[currentImageIndex];
}