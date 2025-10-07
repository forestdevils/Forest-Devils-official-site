const decrees = [
    {
        id: "decree1",
        image: "../images/decrees/decree1.jpg",
        title: "Постанова №001-п",
        date: "21 серпня 2025 року",
    },
    {
        id: "decree2",
        image: "../images/decrees/decree2.jpg",
        title: "Постанова №002-п",
        date: "21 серпня 2025 року",
    },
    {
        id: "decree3",
        image: "../images/decrees/decree3.jpg",
        title: "Постанова №003-п",
        date: "22 серпня 2025 року",
    },
    {
        id: "decree4",
        image: "../images/decrees/decree4.jpg",
        title: "Постанова №004-п",
        date: "23 серпня 2025 року",
    },
    {
        id: "decree5",
        image: "../images/decrees/decree5.jpg",
        title: "Постанова №005-п",
        date: "25 серпня 2025 року",
    }
    ,
    {
        id: "decree6",
        image: "../images/decrees/decree6.jpg",
        title: "Постанова №006-п",
        date: "19 вересня 2025 року",
    },
    {
        id: "decree7",
        image: "../images/decrees/decree7.jpg",
        title: "Постанова №007-п",
        date: "30 вересня 2025 року",
    },
    {
        id: "decree8",
        image: "../images/decrees/decree8.jpg",
        title: "Постанова №008-п",
        date: "4 жовтня 2025 року",
    },
    {
        id: "decree9",
        image: "../images/decrees/decree9.jpg",
        title: "Постанова №009-п",
        date: "6 жовтня 2025 року",
    }
];

const container = document.querySelector(".decrees-list");

decrees.forEach(d => {
    const card = document.createElement("div");
    card.classList.add("decree-card");
    card.onclick = () => openModal(d.id);

    card.innerHTML = `
        <img src="${d.image}" alt="${d.title}">
        <p>${d.title} від ${d.date}</p>
    `;

    container.appendChild(card);
});

function openModal(id) {
    const d = decrees.find(x => x.id === id);
    document.getElementById('modalImage').src = d.image;
    document.getElementById('decreeModal').style.display = "block";
    document.body.style.overflow = 'hidden'; // блокуємо прокрутку фону
}

function closeModal() {
    document.getElementById('decreeModal').style.display = "none";
    document.body.style.overflow = 'auto';
}
