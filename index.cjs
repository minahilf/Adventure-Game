#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var enemies, maxEnemyHealth, enemmyAttackDamage, health, attackDamage, numHealthPotions, healthPotionMealAmount, healthPotionDropChance, running, enemyHealth, enemy, answers, input, damageDealt, damageTaken, nextAction, nextInput, tryAgain;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                enemies = ["Skeleton", "Warrior", "Zombie", "Assassin"];
                maxEnemyHealth = 75;
                enemmyAttackDamage = 25;
                health = 100;
                attackDamage = 50;
                numHealthPotions = 3;
                healthPotionMealAmount = 30;
                healthPotionDropChance = 50;
                running = true;
                console.log("Welcome to the Dungeon!");
                _a.label = 1;
            case 1:
                if (!running) return [3 /*break*/, 9];
                console.log("------------------------------------------");
                enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
                enemy = enemies[Math.floor(Math.random() * enemies.length)];
                console.log("\t".concat(enemy, " has appeared!\n"));
                _a.label = 2;
            case 2:
                if (!(enemyHealth > 0)) return [3 /*break*/, 8];
                console.log("\t Your HP: ".concat(health));
                console.log("\t ".concat(enemy, " 's HP: ").concat(enemyHealth));
                console.log("\t what would you like to do?");
                console.log("\t1. Attack");
                console.log("\t2. Drink Health Potion");
                console.log("\t3. Run!");
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: 'input',
                            name: 'action',
                            message: 'Enter your choice: ',
                        }
                    ])];
            case 3:
                answers = _a.sent();
                input = answers.action;
                if (input === "1") {
                    damageDealt = Math.floor(Math.random() * attackDamage);
                    damageTaken = Math.floor(Math.random() * enemmyAttackDamage);
                    enemyHealth -= damageDealt;
                    health -= damageTaken;
                    console.log("\t You strike the ".concat(enemy, " for ").concat(damageDealt, " damage"));
                    console.log("\t You receive ".concat(damageTaken, " in retaliation"));
                    if (health < 1) {
                        console.log("\tYou have taken too much damage, you are too weak to go on!");
                        return [3 /*break*/, 8];
                    }
                    else if (input === "2") {
                        if (numHealthPotions > 0) {
                            health += healthPotionMealAmount;
                            numHealthPotions--;
                            console.log(("\tYou drink a health potion, healing yourself for ".concat(healthPotionMealAmount, ".\n\t> You now have ").concat(health, " HP.\n\t> You have ").concat(numHealthPotions, " health potions left.\n")));
                        }
                        else {
                            console.log("\t You have no health potion left, Defeat enemies for a chance to get one!");
                        }
                    }
                    else if (input === "3") {
                        console.log("\t You run away from the enemy!");
                        return [3 /*break*/, 1];
                    }
                    else {
                        console.log("\t Invalid Command");
                    }
                }
                if (health < 1) {
                    console.log("\t You limp out of the dungeon! weak from battle");
                    return [3 /*break*/, 8];
                }
                console.log("------------------------------------------------");
                console.log("".concat(enemy, " was defeated"));
                console.log("You have ".concat(health, " HP left"));
                if (Math.random() * 100 < healthPotionDropChance) {
                    numHealthPotions++;
                    console.log("The ".concat(enemy, " dropped the health potion"));
                    console.log("You now have ".concat(numHealthPotions, " health potion(s)"));
                }
                console.log("----------------------------------------------");
                console.log("What would you like to do now?");
                console.log("1. Continue Fighting");
                console.log("2. Exit Dungeon");
                return [4 /*yield*/, inquirer_1.default.prompt([{
                            type: "input",
                            name: "Action",
                            message: "Enter your choice:"
                        }])];
            case 4:
                nextAction = _a.sent();
                nextInput = nextAction.Action;
                _a.label = 5;
            case 5:
                if (!(nextInput !== "1" && nextInput !== "2")) return [3 /*break*/, 7];
                console.log("Invalid Command");
                return [4 /*yield*/, inquirer_1.default.prompt([{
                            type: "input",
                            name: "Action",
                            message: "Enter your choice:"
                        }])];
            case 6:
                tryAgain = _a.sent();
                nextInput = tryAgain.Action;
                if (nextInput === "1") {
                    console.log("You continue on your dungeon");
                }
                else if (nextInput === "2") {
                    console.log("You exit the dungeon, sucessful from your adventure!");
                    return [3 /*break*/, 7];
                }
                return [3 /*break*/, 5];
            case 7:
                console.log("-------------------------");
                console.log("THANKS FOR PLAYING");
                console.log("-------------------------");
                return [3 /*break*/, 2];
            case 8:
                ;
                return [3 /*break*/, 1];
            case 9: return [2 /*return*/];
        }
    });
}); };
main();
