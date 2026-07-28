async function loadMedicine() {

    const params = new URLSearchParams(window.location.search);

    const id = Number(params.get("id"));

    const response = await fetch("data/medicines.json");

    const medicines = await response.json();

    const medicine = medicines.find(item => item.id === id);

    if (!medicine) {

        document.getElementById("medicine-name").textContent = "Препарат не знайдено";

        return;

    }

    document.getElementById("medicine-name").textContent = medicine.name;

    document.getElementById("medicine-description").textContent = medicine.description;

    document.getElementById("ingredient").textContent = medicine.ingredient;

    document.getElementById("category").textContent = medicine.category;

    const list = document.getElementById("uses");

    list.innerHTML = "";

    medicine.uses.forEach(use => {

        list.innerHTML += `<li>${use}</li>`;

    });

}

loadMedicine();
