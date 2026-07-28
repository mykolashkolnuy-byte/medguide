async function loadMedicines() {

    const response = await fetch("data/medicines.json");

    const medicines = await response.json();

    const cards = document.querySelector(".cards");

    cards.innerHTML = "";

    medicines.forEach(medicine => {

        cards.innerHTML += `
            <div class="card">

                <h3>${medicine.name}</h3>

                <p>${medicine.description}</p>

                <button onclick="openMedicine(${medicine.id})">
                    Детальніше
                </button>

            </div>
        `;

    });

}

function openMedicine(id){

    window.location.href = `medicine.html?id=${id}`;

}

loadMedicines();
