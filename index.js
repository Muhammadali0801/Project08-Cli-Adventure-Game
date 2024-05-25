#! /usr/bin/env node
import inquirer from "inquirer";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let playerName = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name ",
    },
]);
let opponentName = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select your opponent",
        choices: ["Skeleton", "Alien", "Zombie"],
    },
]);
let p1 = new player(playerName.name);
let o1 = new opponent(opponentName.Select);
do {
    if (opponentName.Select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            },
        ]);
        if (ask.Opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}.`);
                console.log(`${o1.name} fuel is ${o1.fuel}.`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Better luck next time.");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}.`);
                console.log(`${o1.name} fuel is ${o1.fuel}.`);
                if (o1.fuel <= 0) {
                    console.log("You Win.");
                    process.exit();
                }
            }
        }
        if (ask.Opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion your fuel is ${p1.fuel}.`);
        }
        if (ask.Opt === "Run for your life..") {
            console.log("You loose, Better luck next time.");
            process.exit();
        }
    }
    //Alien
    if (opponentName.Select === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            },
        ]);
        if (ask.Opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}.`);
                console.log(`${o1.name} fuel is ${o1.fuel}.`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Better luck next time.");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}.`);
                console.log(`${o1.name} fuel is ${o1.fuel}.`);
                if (o1.fuel <= 0) {
                    console.log("You Win.");
                    process.exit();
                }
            }
        }
        if (ask.Opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion your fuel is ${p1.fuel}.`);
        }
        if (ask.Opt === "Run for your life..") {
            console.log("You loose, Better luck next time.");
            process.exit();
        }
    }
    // Zombie
    if (opponentName.Select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do",
                choices: ["Attack", "Drink portion", "Run for your life.."],
            },
        ]);
        if (ask.Opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}.`);
                console.log(`${o1.name} fuel is ${o1.fuel}.`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Better luck next time.");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}.`);
                console.log(`${o1.name} fuel is ${o1.fuel}.`);
                if (o1.fuel <= 0) {
                    console.log("You Win.");
                    process.exit();
                }
            }
        }
        if (ask.Opt === "Drink portion") {
            p1.fuelIncrease();
            console.log(`You drink health portion your fuel is ${p1.fuel}.`);
        }
        if (ask.Opt === "Run for your life..") {
            console.log("You loose, Better luck next time.");
            process.exit();
        }
    }
} while (true);
