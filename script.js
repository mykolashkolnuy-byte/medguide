const medicines = [
    {
        name: "Парацетамол",
        description: "Жарознижувальний та знеболювальний засіб."
    },
    {
        name: "Ібупрофен",
        description: "Протизапальний та знеболювальний препарат."
    },
    {
        name: "Но-шпа",
        description: "Спазмолітичний засіб."
    },
    {
        name: "Лоратадин",
        description: "Антигістамінний препарат при алергії."
    },
    {
        name: "Цитрамон",
        description: "Застосовується при головному болю."
    }
];

const searchInput = document.querySelector("input");
const cards = document.querySelector(".cards");

function renderMedicines(list) {
    cards.innerHTML = "";

    list.forEach(medicine => {
        cards.innerHTML += `
            <div class="card">
                <h3>${medicine.name}</h3>
                <p>${medicine.description}</p>
                <button>Детальніше</button>
            </div>
        `;
    });
}

renderMedicines(medicines);

searchInput.addEventListener("input", () => {

    const text = searchInput.value.toLowerCase();

    const filtered = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(text)
    );

    renderMedicines(filtered);

});
