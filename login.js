const input = document.getElementById("cardInput");
const button = document.getElementById("btn");

input.addEventListener("input", (event) => {
    console.log(input.value);
    if (input.value.length > 16) {
        input.value = input.value.slice(0, 16)
    }
});

button.addEventListener("click", () => {
    if (input.value ===  "5202322586153804") window.location.href = "index.html";
});