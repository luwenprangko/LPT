// Set the target date: September 27, 2024
const targetDate = new Date('September 29, 2024 14:00:00').getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the time difference between now and the target date
    const timeDifference = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown in the div
    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown reaches zero, reveal the paragraph
    if (timeDifference < 0) {
        clearInterval(countdownInterval);  // Stop the countdown
        document.getElementById("countdown").innerHTML = "— After Exam";
        document.getElementById("hiddenParagraph").style.display = "block";  // Show the paragraph
    }
}, 1000);