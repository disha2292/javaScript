function getDayName(dayIndex) {
    let dayName;

    switch (dayIndex) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day index";
    }

    return dayName;
}

console.log(getDayName(3)); // Outputs: Wednesday
console.log(getDayName(8)); // Outputs: Invalid day index


const dayNames = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};

function getDayName(dayIndex) {
    return dayNames[dayIndex] || "Invalid day index";
}

console.log(getDayName(3)); // Outputs: Wednesday
console.log(getDayName(8)); // Outputs: Invalid day index