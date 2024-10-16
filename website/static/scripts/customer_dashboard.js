function checkParkingAvailability() {
    const emptySpots = document.querySelectorAll('.car-spot.empty');
    const message = document.getElementById('availability-message');

    if (emptySpots.length > 0) {
        message.textContent = 'Parking is available! You can park your car.';
        message.style.color = 'green';
    } else {
        message.textContent = 'No parking spots available at the moment.';
        message.style.color = 'red';
    }
}
