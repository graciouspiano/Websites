var Bot = require('bot');
var PF = require('pathfinding');
//var bot = new Bot('nia8zt3n', 'arena', 'http://24.6.28.217:9000'); //Put your bot's code here and change training to Arena when you want to fight others.
var bot = new Bot('wbwsfqs9', 'arena', 'http://vindinium.org'); //Put your bot's code here and change training to Arena when you want to fight others.
var goDir;
var Promise = require('bluebird');
Bot.prototype.botBrain = function() {
    return new Promise(function(resolve, reject) {
        _this = bot;
        /* Write your bot below Here */
        /* Set `bot.goDir` in the direction you want to go */
        // This Code moves in random directions //
        //     var rand = Math.floor(Math.random() * 4);
        //     var dirs = ["north", "south", "east", "west"];
        //     bot.goDir = dirs[rand];
        //these are enemies
        var bots = [];
        if(bot.yourBot.id != 1) bots.push(bot.bot1);
        if(bot.yourBot.id != 2) bots.push(bot.bot2);
        if(bot.yourBot.id != 3) bots.push(bot.bot3);
        if(bot.yourBot.id != 4) bots.push(bot.bot4);
        //these are enemy mines
        var enemyMines = [];
        if(bot.yourBot.id != 1) enemyMines = enemyMines.concat(bot.bot1mines);
        if(bot.yourBot.id != 2) enemyMines = enemyMines.concat(bot.bot2mines);
        if(bot.yourBot.id != 3) enemyMines = enemyMines.concat(bot.bot3mines);
        if(bot.yourBot.id != 4) enemyMines = enemyMines.concat(bot.bot4mines);
        var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y];
        var closestMine = bot.freeMines[0];
        var closestTavern = bot.taverns[0];
        var dirs = ["north", "east", "south", "west"];
        //find lowest health and attack them
        //         var lowestHealth=enemyBots[0];
        //         for (i=0;i<enemyBots.length;i++){
        //             if(lowestHealth.life>enemyBots[i].life){
        //                 lowestHealth=enemyBots[i];
        //             }
        //             if(lowestHealth< 30){
        //             bot.goDir=findPath(myPos,[lowestHealth.pos.x,lowestHealth.pos.y])
        //             }
        //             }
        //attempting to find closest tavern to enemies
        //         for (i=0; i < bot.taverns.length;i++){
        //         if (bot.findDistance(bots[0],bot.taverns[i])< bot.findDistance(bots[1],bot.taverns[i])){
        //         }
        //         }
        //free mines
        for(i = 0; i < bot.freeMines.length; i++) {
            if(bot.findDistance(myPos, closestMine) > bot.findDistance(myPos, bot.freeMines[i])) {
                closestMine = bot.freeMines[i];
            }
        }
        var closestEnemyMine = enemyMines[0];
        //this states that if my life is above 50 go to the closest free mine, if not go to a tavern
        if(bot.yourBot.life > 25) {
            bot.goDir = bot.findPath(myPos, closestMine);
        } else if(bot.yourBot.life < 40) {
            for(i = 0; i < bot.taverns.length; i++) {
                if(bot.findDistance(closestTavern, myPos) > bot.findDistance(myPos, bot.taverns[i])) {
                    closestTavern = bot.taverns[i];
                }
            }
            //go to closest tavern}
            bot.goDir = bot.findPath(myPos, closestTavern);
        }
        if((bot.findDistance(myPos, closestTavern) === 2) && (bot.yourBot.life < 75)) {
            bot.goDir = bot.findPath(myPos, closestTavern)
            console.log("doubleshot")
        }
        //I take enemy mines here
       else if(bot.freeMines[0] === undefined && bot.yourBot.life > 50) {
            closestMine = enemyMines[0];
            for(i = 0; i < enemyMines.length; i++) {
                if(bot.findDistance(myPos, closestMine) > bot.findDistance(myPos, enemyMines[i])) {
                    closestMine = enemyMines[i];
                }
            }
            bot.goDir = bot.findPath(myPos, closestMine);
        }
        /*pvp, if someone has less than 30 health and i have more than 60, find them and kill them.
        for(i = 0; i < bots.length; i++) {
            if(bots[i].life < 30 && bot.yourBot.life > 60) {
                bot.goDir = bot.findPath(myPos, [bots[i].pos.x, bots[i].pos.y]);
            }
        }*/
        //this is if I am just stuck not doing anything, it will move me in a random direction
        if(bot.goDir == "none") {
            bot.goDir = bot.findPath(dirs[Math.floor(Math.random() * 4)]);
        }
        //Pvp
        for(i = 0; i < bots.length; i++) {
            if(bot.findDistance(myPos, [bots[i].pos.x, bots[i].pos.y]) < 5 && bots[i].life < 30) {
                bot.goDir = bot.findPath(myPos, [bots[i].pos.x, bots[i].pos.y])
            }
        }
        /* DON'T REMOVE ANTYTHING BELOW THIS LINE */
        resolve();
    });
}
bot.runGame();