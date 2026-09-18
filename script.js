const button = document.getElementById("addEventButton");
const form = document.getElementById("eventForm");

button.addEventListener("click", function() {
    form.style.display = "flex";
});

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const place = document.getElementById("eventPlace").value;
    const city = document.getElementById("eventCity").value;

    alert(
        "Événement ajouté ! 🎉\n\n" +
        name + "\n" +
        date + "\n" +
        place + " — " + city
    );

});
