async function loadMedicines() {

    const response = await fetch("data/medicines.json");
    const medicines = await response.json();

    const container = document.getElementById("medicine-list");

    container.innerHTML = "";

    medicines.forEach(medicine => {

        container.innerHTML += `
            <div class="card">

                <h3>${medicine.name}</h3>

                <p>${medicine.description}</p>

                <p><strong>Категорія:</strong> ${medicine.category}</p>

                <a href="medicine.html?id=${medicine.id}">
                    <button>Детальніше</button>
                </a>

            </div>
        `;

    });

}

loadMedicines();
