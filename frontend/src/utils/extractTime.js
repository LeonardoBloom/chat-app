export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    return `${hours}:${minutes}`
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}

// TODO parse day date for top of chat day