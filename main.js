#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgMagenta.bold(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`));
console.log(chalk.bgMagenta.bold(`<<<<<<<<<<<<<<<<<<<<<<     Welcome to the Count Down Timer     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`));
console.log(chalk.bgMagenta.bold(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`));
let anwser = await inquirer.prompt([
    {
        name: "userAnswer",
        type: "number",
        message: "Enter your timer in the second"
    }
]);
let { userAnswer } = anwser;
async function start() {
    async function startNow() {
        if (userAnswer >= 0) {
            setTimeout(startNow, 1000);
            console.log(chalk.bgGreen.whiteBright(userAnswer));
            userAnswer--;
            if (userAnswer === -1) {
                setTimeout(startNow, 1000);
                console.log(chalk.bgRed(`Thanks for using`));
            }
        }
    }
    ;
    startNow();
}
;
start();
