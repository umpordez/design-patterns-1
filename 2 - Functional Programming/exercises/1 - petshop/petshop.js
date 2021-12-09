function buildAnimal(name, type, isAgressive = false) {
    return { name, type, isAgressive };
}

function buildCat(name, isAgressive) {
    return buildAnimal(name, 'cat', isAgressive);
}

function buildDog(name, isAgressive) {
    return buildAnimal(name, 'dog', isAgressive);
}

function showerAnimals(schedule) {
    for (const day in schedule) {
        console.log(`> Ohh, its ${day}! :)`);

        for (const pet of schedule[day]) {
            console.log(`\tLet's shower ${pet.name}!`);
            console.log(`\t${pet.name}, is sooo clean now! 😌`);
            console.log('');
        }

        console.log('');
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomWeekDay() {
    const arr = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday'
    ];

    return arr[randomNumber(0, arr.length - 1)];
}

function hasAgressivePetInDay(schedule, day) {
    if (!schedule[day]) { return false; }
    return schedule[day].some((pet) => pet.isAgressive);
}

function main() {
    const myPets = [
        buildDog('Logan'),
        buildDog('Pandora'),
        buildDog('Snoopy', true),

        buildCat('Blue'),
        buildCat('Bartolomeu'),
        buildCat('Lua', true)
    ];

    const showerSchedule = { };

    for (const pet of myPets) {
        let day = getRandomWeekDay();
        scheduleShower(showerSchedule, day, pet);
    }

    showerAnimals(showerSchedule)
}

main();

function scheduleShower(schedule, day, pet) {

}
