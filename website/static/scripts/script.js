function changeStatus(carId) {
    const car = document.getElementById(carId);
    const statusElement = car.querySelector('.status');
    
    const statuses = ['Parked', 'Over Time Limit', 'In Servicing'];
    const statusClasses = ['parked', 'over-time', 'servicing'];
    
    let currentStatusIndex = statuses.indexOf(statusElement.innerText);
    
    let nextStatusIndex = (currentStatusIndex + 1) % statuses.length; // this is kinda like circular queue lol
    
    statusElement.innerText = statuses[nextStatusIndex];
    statusElement.className = 'status ' + statusClasses[nextStatusIndex];
}

// Toggle between light and dark theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
