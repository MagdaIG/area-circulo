document.getElementById("area-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue :)

    const radio = document.getElementById("radio").value;
    if (radio) {
        const area = Math.PI * Math.pow(radio, 2); // Calcula el área
        document.getElementById("result").textContent = `El área del círculo es: ${area.toFixed(2)} unidades cuadradas.`;
    } else {
        document.getElementById("result").textContent = "Por favor, ingresa un valor válido para el radio.";
    }
});
