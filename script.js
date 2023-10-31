const seats = document.querySelectorAll('.seat');
const selectedSeats = [];
// Define seat prices for each row (update this as needed)
const seatPrices = [10, 8, 6]; // Example prices for 6 rows

seats.forEach((seat, index) => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        const seatNumber = seat.textContent;

        if (selectedSeats.includes(seatNumber)) {
            selectedSeats.splice(selectedSeats.indexOf(seatNumber), 1);
        } else {
            selectedSeats.push(seatNumber);
        }

        updateSelectedSeats();
    });
});

document.getElementById('confirm-button').addEventListener('click', () => {
    // Implement your logic for confirming the selection here
    alert(`You've selected seats: ${selectedSeats.join(', ')}`);
});

function updateSelectedSeats() {
    const selectedSeatsElement = document.getElementById('selected-seats');
    selectedSeatsElement.textContent = `Selected Seats: ${selectedSeats.join(', ')}`;

    const totalCostElement = document.getElementById('total-cost');
    const totalCost = calculateTotalCost();
    totalCostElement.textContent = `Total Cost: $${totalCost}`;
}

function calculateTotalCost() {
    let totalCost = 0;
    selectedSeats.forEach(seatNumber => {
        const row = Math.floor((parseInt(seatNumber) - 1) / 10); // Assuming 10 seats per row
        totalCost += seatPrices[row];
    });
    return totalCost;
}
