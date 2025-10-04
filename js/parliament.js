const previousParliaments = [
    {
        id: "parl09/25",
        image: "../images/parliament/parliament_1.jpg",
        title: "Парламент 1 скликання",
        date: "25.08.2025 - 31.09.2025"
    }
];

const container = document.querySelector(".parliament-list");

previousParliaments.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("parliament-card");
    card.onclick = () => openModal(p.id);

    card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <p>${p.title} (${p.date})</p>
    `;

    container.appendChild(card);
});

function openModal(id) {
    const p = previousParliaments.find(x => x.id === id);
    const modalImg = document.getElementById('modalParliamentImage');
    modalImg.src = p.image;
    document.getElementById('parliamentModal').style.display = "block";
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('parliamentModal').style.display = "none";
    document.body.style.overflow = 'auto';
}
