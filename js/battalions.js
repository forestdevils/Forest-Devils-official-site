const battalions = [
    {
        id: "battalion1",
        image: "../images/battalions/sturmtruppen.png",
        title: "Батальйон 'Sturmtruppen'",
        description: "Один із найстаріших батальйонів, що стоїть на сторожі ідеалів партії."
    },
    {
        id: "battalion2",
        image: "../images/battalions/kogorta.png",
        title: "Батальйон 'Несмертна Когорта'",
        description: "Символ сили, рішучості та непохитності у боротьбі за справедливість."
    },
    {
        id: "battalion3",
        image: "../images/battalions/blitzschutz.png",
        title: "Батальйон 'Blitzschutz'",
        description: "Молодий і енергійний осередок, що втілює дух оновлення і дії."
    }
];

const container = document.querySelector(".battalions-list");

battalions.forEach(b => {
    const card = document.createElement("div");
    card.classList.add("battalion-card");
    card.onclick = () => openModal(b.id);

    card.innerHTML = `
        <img src="${b.image}" alt="${b.title}">
        <p>${b.title}</p>
    `;

    container.appendChild(card);
});

function openModal(id) {
    const b = battalions.find(x => x.id === id);
    document.getElementById('modalBattalionImage').src = b.image;
    document.getElementById('modalBattalionText').innerText = b.description;
    document.getElementById('battalionModal').style.display = "block";
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('battalionModal').style.display = "none";
    document.body.style.overflow = 'auto';
}
