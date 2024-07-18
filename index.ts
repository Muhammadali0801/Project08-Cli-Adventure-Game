#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    this.fuel -= 25;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    this.fuel -= 25;
  }
}

async function startGame() {
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

  let p1 = new Player(playerName.name);
  let o1 = new Opponent(opponentName.Select);

  do {
    let ask = await inquirer.prompt([
      {
        name: "Opt",
        type: "list",
        message: "What would you like to do",
        choices: ["Attack", "Drink potion", "Run for your life.."],
      },
    ]);
    if (ask.Opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
      } else {
        o1.fuelDecrease();
      }
      console.log(chalk.blue(`${p1.name}'s fuel is ${p1.fuel}.`));
      console.log(chalk.red(`${o1.name}'s fuel is ${o1.fuel}.`));

      if (p1.fuel <= 0) {
        console.log(chalk.red.bold("You lose, better luck next time."));
        break;
      }
      if (o1.fuel <= 0) {
        console.log(chalk.green.bold("You win!"));
        break;
      }
    } else if (ask.Opt === "Drink potion") {
      p1.fuelIncrease();
      console.log(chalk.green(`You drink a health potion, your fuel is ${p1.fuel}.`));
    } else if (ask.Opt === "Run for your life..") {
      console.log(chalk.red.bold("You lose, better luck next time."));
      break;
    }
  } while (true);

  let playAgain = await inquirer.prompt([
    {
      name: "playAgain",
      type: "confirm",
      message: "Do you want to play again?",
    },
  ]);

  if (playAgain.playAgain) {
    startGame();
  } else {
    console.log(chalk.yellow("Thanks for playing!"));
    process.exit();
  }
}

startGame();
