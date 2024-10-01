function changeStatus(carId) {
    const car = document.getElementById(carId);
    const statusElement = car.querySelector('.status');
    
    // Define the statuses to cycle through
    const statuses = ['Parked', 'Over Time Limit', 'In Servicing'];
    const statusClasses = ['parked', 'over-time', 'servicing'];
    
    // Get the current status index
    let currentStatusIndex = statuses.indexOf(statusElement.innerText);
    
    // Cycle to the next status
    let nextStatusIndex = (currentStatusIndex + 1) % statuses.length;
    
    // Update the status text and class
    statusElement.innerText = statuses[nextStatusIndex];
    statusElement.className = 'status ' + statusClasses[nextStatusIndex];
}

// Toggle between light and dark theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
