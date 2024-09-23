function populatedistricts() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    districtSelect.innerHTML = "<option value="
    ">Select District < /option>";
    const district = {
        Bihar: ["Patna", "Gaya", "Muzaffarpur", "Darbhanga", "Ara", "Siwan", "Saharsa", "Nawada", "Nalanda", "Buxar", "Bhojpur", "West Champaran", "Aurangabad", "Araria", "Arwal", "Sitmarshi", "Sheikhpura"],
        WestBangal: ["Alipurduar", "Bankura",
            " Birbhum",
            " Cooch Behar",
            " Dakshin Dinajpur (South Dinajpur)",
            " Darjeeling",
            " Hooghly",
            " Howrah",
            " Jalpaiguri",
            " Jhargram",
            " Kalimpong",
            " Kolkata (formerly Calcutta)",
            "Malda",
            "Murshidabad",
            " Nadia",
            "North 24 Parganas",
            "Paschim Medinipur (West Midnapore)",
            "Purba Medinipur (East Midnapore)",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur (North Dinajpur)"
        ],
        Goa: ["North Goa", "South Goa"],
        UtterPradesh: ["Lucknow", "Aligarh", "Azamgarh", "Agra", "Allahabad", "Ghaziabad", "Mirzapur", "Varanasi"],

        //Add Other State
    };
    const selectedState = stateSelect.value;
    if (selectedState && district[selectedState]) {
        district[selectedState].forEach(district => {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const resultsList = document.getElementById("results-list");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const state = document.getElementById("state").value;
        const district = document.getElementById("district").value;
        const city = document.getElementById("city").value;
        const blood = document.getElementById("blood").value;

        // In a real-world scenario, you would fetch data from a backend using AJAX or fetch API
        // For demonstration, let's assume you have an array of blood donors
        const donors = [
            { name: "Donor 1", location: "patna", city: "Phulwari", blood: "A+ve" },
            { name: "Donor 2", location: "patna", city: "Phulwari", blood: "b+ve" },
            { name: "Donor 3", location: "City B", city: "", blood: "" },
            { name: "Donor 4", location: "City A", city: "", blood: "" }
        ];

        // Clear previous results
        resultsList.innerHTML = "";

        // Filter and display donors based on location
        const filteredDonors = donors.filter(donor =>
            donor.blood === blood
        );

        if (filteredDonors.length === 0) {
            resultsList.innerHTML = "<p>No blood available in the specified location.</p>";
        } else {
            filteredDonors.forEach(donor => {
                const li = document.createElement("li");
                li.textContent = `Name: ${donor.name}, Location: ${donor.location},City: ${donor.city},blood Available:${donor.blood}`;
                resultsList.appendChild(li);
            });
        }
    });
});