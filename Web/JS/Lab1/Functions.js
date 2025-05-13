function getAge(age) {
    if (age > 0 && age <= 2) {
        console.log("Младенец")
    }

    if (age > 2 && age <= 13) {
        console.log("Ребенок")
    }

    if (age > 12 && age <= 19) {
        console.log("Подросток")
    }

    if (age > 19 && age <= 65) {
        console.log("Взрослый")
    }

    if (age > 65) {
        console.log("Пожилой")
    }

    if (age < 0) {
        console.log("Ошибка")
    }
}

function round(value, precision) {
    if (precision > 15) {
        precision = 15;
    }
    const factor = Math.pow(10, precision);
    const rounded = Math.round(value * factor) / factor;

    console.log(parseFloat(rounded.toFixed(precision)));
}

function isDel(value) {
    var del = null;

    if (value % 2 == 0) {
        del = 2;
    }

    if (value % 3 == 0) {
        del = 3;
    }

    if (value % 6 == 0) {
        del = 6;
    }

    if (value % 7 == 0) {
        del = 7;
    }

    if (value % 10 == 0) {
        del = 10;
    }

    if (del == null) {

        console.log("Не делится");
    }
    else {
        console.log(del);

    }
}

function calculateTotalPrice(peopleCount, groupType, day) {
    const prices = {
        Students: { Friday: 8.45, Saturday: 9.80, Sunday: 10.46 },
        Corporate: { Friday: 10.90, Saturday: 15.60, Sunday: 16.00 },
        Regular: { Friday: 15.00, Saturday: 20.00, Sunday: 22.50 }
    };

    let pricePerPerson = prices[groupType][day];
    let totalPeople = peopleCount;

    if (groupType === "Students" && peopleCount >= 30) {
        let totalPrice = pricePerPerson * totalPeople * 0.85;
        return `Общая цена: ${totalPrice.toFixed(2)}`;
    }

    if (groupType === "Corporate" && peopleCount >= 100) {
        totalPeople -= 10;
    }

    let totalPrice = pricePerPerson * totalPeople;

    if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice *= 0.95;
    }

    return `Общая цена: ${totalPrice.toFixed(2)}`;
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Високосный год";
    } else {
        return "Обычный год";
    }
}


