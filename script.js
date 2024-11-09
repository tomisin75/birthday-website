// Countdown Timer
function updateCountdown() {
    const birthday = new Date("2024-12-22T00:00:00"); // Adjust the date and time to your girlfriend's birthday
    const now = new Date();
    const timeRemaining = birthday - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("timer").innerHTML = "It's Your Day!";
    }
}

setInterval(updateCountdown, 1000); // Update the countdown every second
updateCountdown(); // Initial call to display timer immediately
