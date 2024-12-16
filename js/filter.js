// Updated sample data for cities in each country
const citiesData = {
  belgium: ["Brussels", "Antwerp", "Ghent", "Bruges", "Liège", "Namur", "Leuven", "Mechelen", "Aalst", "Hasselt", "Genk", "Kortrijk", "Ostend", "Sint-Niklaas", "Roeselare"],
  mexico: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "Querétaro", "León", "Zapopan", "Mérida", "Cancún", "Toluca", "Chihuahua", "Acapulco", "Culiacán", "Torreón"],
  sweden: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Linköping", "Örebro", "Västerås", "Helsingborg", "Jönköping", "Norrköping", "Lund", "Umeå", "Gävle", "Borås", "Eskilstuna"],
  us: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "Dallas", "San Diego", "San Jose", "Austin", "Jacksonville", "Denver", "Seattle", "Portland"],
  cyprus: ["Nicosia", "Limassol", "Larnaca", "Paphos", "Famagusta"],
  dubai: ["Dubai City", "Abu Dhabi", "Business Bay", "Sharjah", "Al Ain", "Fujairah"],
  greece: ["Athens", "Thessaloniki", "Heraklion", "Patras", "Larissa", "Volos", "Ioannina", "Kavala", "Rhodes", "Heraklion"],
  spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao"],
  uk: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Liverpool", "Newcastle", "Cardiff", "Bristol", "Leeds", "Sheffield", "Nottingham", "Southampton", "Leicester", "Coventry"]
};

// Function to populate the City dropdown based on the selected country
function populateCityDropdown() {
  const countryDropdown = document.getElementById("countryDropdown");
  const cityDropdown = document.getElementById("cityDropdown");

  const selectedCountry = countryDropdown.value;
  const cities = citiesData[selectedCountry] || [];

  // Clear existing options
  cityDropdown.innerHTML = "";

  // Add default option for "All Cities"
  const allCitiesOption = document.createElement("option");
  allCitiesOption.value = "all";
  allCitiesOption.text = "All Cities";
  cityDropdown.add(allCitiesOption);

  // Add new options
  cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.text = city;
    cityDropdown.add(option);
  });

  // Trigger the filter when the city dropdown is repopulated
  filterProperties();
}

// Function to filter and display properties based on the selected dropdown values
function filterProperties() {
  const country = document.getElementById("countryDropdown").value;
  const city = document.getElementById("cityDropdown").value;
  const type = document.getElementById("typeDropdown").value;
  const rooms = document.getElementById("roomsDropdown").value;
  const forOption = document.getElementById("forDropdown").value;

  const properties = document.querySelectorAll(".listing-item");

  properties.forEach(property => {
    const propertyCountry = property.getAttribute("data-country");
    const propertyCity = property.getAttribute("data-city");
    const propertyType = property.getAttribute("data-type");
    const propertyRooms = property.getAttribute("data-rooms");
    const propertyFor = property.getAttribute("data-for");

    const countryMatch = country === "all" || propertyCountry === country || country === "any"; // Set default to any
    const cityMatch = city === "all" || propertyCity === city || city === "";
    const typeMatch = type === "all" || propertyType === type || type === "";
    const roomsMatch = rooms === "any" || propertyRooms === rooms || rooms === "";
    const forMatch = forOption === "all" || propertyFor === forOption || forOption === "";

    const shouldShow = countryMatch && cityMatch && typeMatch && roomsMatch && forMatch;

    property.style.display = shouldShow ? "block" : "none";
  });
}

// Event listeners for the change in dropdowns
const dropdowns = document.querySelectorAll(".property-filter-dropdown");
dropdowns.forEach(dropdown => {
  dropdown.addEventListener("change", function () {
    if (dropdown.id === "countryDropdown") {
      populateCityDropdown();
    }
    filterProperties();
  });
});

// Initial population of the City dropdown based on the default selected country (set to Cyprus)
populateCityDropdown();
// Initial filter of properties based on default dropdown values
filterProperties();
