#!/usr/bin/env ts-node
import inquirer from "inquirer";
const main = async () => {
    const enemies = ["Skeleton", "Warrior", "Zombie", "Assassin"];
    const maxEnemyHealth = 75;
    const enemyAttackDamage = 25;
    let health = 100;
    const attackDamage = 50;
    let numHealthPotions = 3;
    const healthPotionHealAmount = 30;
    const healthPotionDropChance = 50;
    let running = true;
    console.log("Welcome to the Dungeon!");
    GAME: while (running) {
        console.log("------------------------------------------");
        let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
        const enemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`\t${enemy} has appeared!\n`);
        while (enemyHealth > 0) {
            console.log(`\t Your HP: ${health}`);
            console.log(`\t ${enemy}'s HP: ${enemyHealth}`);
            console.log("\t What would you like to do?");
            console.log("\t1. Attack");
            console.log("\t2. Drink Health Potion");
            console.log("\t3. Run!");
            const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'action',
                    message: 'Enter your choice: ',
                }
            ]);
            const input = answers.action;
            if (input === "1") {
                const damageDealt = Math.floor(Math.random() * attackDamage);
                const damageTaken = Math.floor(Math.random() * enemyAttackDamage);
                enemyHealth -= damageDealt;
                health -= damageTaken;
                console.log(`\t You strike the ${enemy} for ${damageDealt} damage`);
                console.log(`\t You receive ${damageTaken} in retaliation`);
                if (health < 1) {
                    console.log("\tYou have taken too much damage, you are too weak to go on!");
                    break;
                }
            }
            else if (input === "2") {
                if (numHealthPotions > 0) {
                    health += healthPotionHealAmount;
                    numHealthPotions--;
                    console.log(`\tYou drink a health potion, healing yourself for ${healthPotionHealAmount}.\n\t> You now have ${health} HP.\n\t> You have ${numHealthPotions} health potions left.\n`);
                }
                else {
                    console.log(`\t You have no health potion left, defeat enemies for a chance to get one!`);
                }
            }
            else if (input === "3") {
                console.log(`\t You run away from the ${enemy}!`);
                continue GAME;
            }
            else {
                console.log("\t Invalid Command");
            }
        }
        if (health < 1) {
            console.log("\t You limp out of the dungeon, weak from battle!");
            break;
        }
        console.log("------------------------------------------------");
        console.log(`${enemy} was defeated`);
        console.log(`You have ${health} HP left`);
        if (Math.random() * 100 < healthPotionDropChance) {
            numHealthPotions++;
            console.log(`The ${enemy} dropped a health potion`);
            console.log(`You now have ${numHealthPotions} health potion(s)`);
        }
        console.log("----------------------------------------------");
        console.log("What would you like to do now?");
        console.log("1. Continue Fighting");
        console.log("2. Exit Dungeon");
        const nextAction = await inquirer.prompt([
            {
                type: "input",
                name: "action",
                message: "Enter your choice: "
            }
        ]);
        let nextInput = nextAction.action;
        while (nextInput !== "1" && nextInput !== "2") {
            console.log("Invalid Command");
            const tryAgain = await inquirer.prompt([
                {
                    type: "input",
                    name: "action",
                    message: "Enter your choice: "
                }
            ]);
            nextInput = tryAgain.action;
        }
        if (nextInput === "1") {
            console.log("You continue on your dungeon adventure.");
        }
        else if (nextInput === "2") {
            console.log("You exit the dungeon, successful from your adventure!");
            running = false;
        }
    }
    console.log("-------------------------");
    console.log("THANKS FOR PLAYING");
    console.log("-------------------------");
};
main();
