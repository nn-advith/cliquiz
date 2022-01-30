#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from 'figlet';
import { createSpinner } from "nanospinner";

//  


let playerName ;

const sleep = (ms=2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    console.clear();
    const gTitle = chalkAnimation.rainbow(
        'Become a millionaire ? \n'
    );


    await sleep();
    gTitle.stop();

    console.log(`
        ${chalk.bgBlue('How to play:')}
        I am a process on computer
        If you get any question wrong I will be ${chalk.bgRed('killed')}
        Answer everything well. 

    `)
}


async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;

}

async function question1() {
    const answers = await inquirer.prompt({
        name : 'q1',
        type: 'list',
        message: 'Which is not a planet?\n',
        choices: [
            'Jupiter', 'Mars', 'Pluto', 'Your mom',
        ],

    });

    return handleAns(answers.q1 == 'Pluto');
}

async function handleAns(isCorrect) {
    const spinner = createSpinner('Checking correctness...').start();
    await sleep();
    
    if(isCorrect){
        spinner.success({text: `Nice ${playerName}. Thats right`});
    }else{
        spinner.error({text: `You killed me b****`});
        process.exit(1);
    }
}

function winner() {
    console.clear();
    const msg= `Congrats ${playerName}\n\n You are useless`;

    figlet(msg, (err, data) => { 
        console.log(gradient.fruit(data+'jksdnkjsknflksnelfknlsane'));
    });
}

// await welcome();
// await askName();
// await question1();
await winner();