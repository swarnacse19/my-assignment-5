function updateDate() {
    const date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dayName = days[date.getDay()];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    document.getElementById("day-name").innerText = `${dayName}, `;
    document.getElementById("full-date").innerText = `${month} ${day} ${year}`;
}
