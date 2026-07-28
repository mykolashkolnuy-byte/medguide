let medicines = [];

async function loadMedicines() {

    const response = await fetch("data/medicines.json");

    medicines = await response.json();

    renderMedicines(medicines);

}

function renderMedicines(list){

    const container = document.getElementById("medicine-list");

    container.innerHTML = "";

    list.forEach(medicine=>{

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

document.addEventListener("DOMContentLoaded",()=>{

const search=document.getElementById("search");

search.addEventListener("input",()=>{

const text=search.value.toLowerCase();

const filtered=medicines.filter(medicine=>

medicine.name.toLowerCase().includes(text)

||

medicine.category.toLowerCase().includes(text)

||

medicine.description.toLowerCase().includes(text)

);

renderMedicines(filtered);

});

});
