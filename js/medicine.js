async function loadMedicine() {

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const response = await fetch("data/medicines.json");
    const medicines = await response.json();

    const medicine = medicines.find(m => m.id === id);

    if (!medicine) {
        document.body.innerHTML = "<h1>Препарат не знайдено</h1>";
        return;
    }

    document.getElementById("medicine-name").textContent = medicine.name;

    document.getElementById("medicine-description").textContent =
        medicine.description;

    document.getElementById("medicine-category").textContent =
        medicine.category;

    document.getElementById("medicine-manufacturer").textContent =
        medicine.manufacturer;

    document.getElementById("medicine-form").textContent =
        medicine.form;

    document.getElementById("medicine-dosage").textContent =
        medicine.dosage;

    document.getElementById("medicine-ingredient").textContent =
        medicine.ingredient;

}

loadMedicine();
