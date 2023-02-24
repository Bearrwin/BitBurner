/** @param {NS} ns */

export async function main(ns) {

	// a lot of parameters to set and use for this, some are unused, because first augment cycle
	// through 4.1 I probably wont get to the point of buying the last 3 cracks, I want to get
	// some hacking multipliers in place as soon as I can, at the bottom is the list of augments
	// I am going to apply in the first round, I have calculated the total cost and then
	// built in a margin and then told the script to buy them all at once, after I have the cash.

	// For now the basic sequence is
	/**
	 * 1. Buy BruteSSH and TOR router
	 * 2. Buy FTPCrack
	 * 3. Buy 6 x 64 Gb servers to start adding firepower to my hacking
	 * 4. Buy first home RAM upgrade, to allow me to use more singularity functions
	 * 5-9. Upgrade those 6 initial servers to 2Tb each in stages
	 * 10. Buy 3 more 2Tb servers
	 * 11. Buy 2 more home RAM upgrades, so that next cycle we have plenty of RAM for bot.scripts
	 * 12. buy augments as per the list, pretty much increases to hacking, with preference to +skill
	 * 
	 */
	ns.disableLog("sleep")
	ns.disableLog("getServerMoneyAvailable")
	// ns.tail()

	// Start by updating saved variables that we will need using subscripts 
	// to save ongoing RAM usage.  Most singularity actions are very expensive
	// first time through Bn4.1 so we need to split off as many as we can subscripts
	// that don't loop so they use the ram they need and then release it.
	// We therefore write to files in the savedVar folder one file per variable that we need
	// to pass between scripts so that we can assess the variable state in the script
	// you can write "strings" (a series of characters, that is treated as such)
	// a number which can be read into a variable and will actually be used
	// as a number, but not a boolean (true/false), but if you write a string
	// "true" you can then read it into a variable and in the process ask is the
	// contents of what is being read and placed into that variable the string "true"
	// the answer to that question is a boolean (true/false), allowing you to effectively
	// pass booleans between scripts which is very useful.

	// We need to make sure our variable will read in, up to date information,
	// so we run the script that uses RAM expensive actions and will update our
	// savedVar file which stores a count of purchased servers that we own and shortly
	// we declare var servCount = ns.read("/savedVar/purchServCount.txt") which will then
	// give us a usable variable to allow us to cheaply perform a check to make sure we
	// are not buying more servers than we have set as our limit.
	ns.run("/utils/isexists.purchServ.js")
	await ns.sleep(1000)

	// Set various variables needed for this script
	// This block of variables will be used to determine whether to buy the 
	// various files from the black market via the TOR router/

	//**********************************
	// VERY important, how to use the var/let/const method of declaring a variable

	// var is a variable that can be seen throughout this entire script no matter where 
	// it is declared, and you can re-declare it later using var myVariable = value
	// the same way you did first time.

	// let can only be seen within the "block" in which it is declared, so if it is 
	// declared at the top most tier, ie not inside an if statement or for/while loop
	// then any later statements/loops etc can see this variable.
	// But if you declare it inside a loop or if statement then only that loop/statement
	// and it is substatements/loops can see it. Also very important to note that you cannot
	// re-declare a variable declared with let, you can update it, which you do by doing
	// exactly what you do to declare that variable, except remove the let from the beginning.

	// const works exactly the same as let with one important exception, once declared
	// it CANNOT be updated.

	let bruteBought = (ns.fileExists("BruteSSH.exe", "home"))
	let ftpBought = (ns.fileExists("FTPCrack.exe", "home"))
	let smtpBought = (ns.fileExists("relaySMTP.exe", "home"))
	let httpBought = (ns.fileExists("HTTPWorm.exe", "home"))
	let sqlBought = (!ns.fileExists("SQLInject.exe", "home"))
	var purchServCount = ns.read("/savedVar/purchServCount.txt")


	// These variables will allow us to control what we buy and when,
	// the logic of which can be seen in the individual goals below.

	let goalOne = false
	let goalOneMoney = 800000
	let goalTwo = false
	let goalTwoMoney = 1600000
	let goalThree = false
	let goalThreeServerSize = 64
	let goalThreeServerName = "S"
	let goalThreeMaxservPurchCount = 3
	let goalThreeMoney = ns.getPurchasedServerCost(goalThreeServerSize)
	let goalFour = false
	let goalFourMoney = 11000000
	let goalFive = false
	let goalFiveServerSize = goalThreeServerSize * 2
	let goalFiveMoney = Math.ceil((ns.getPurchasedServerCost(goalFiveServerSize) - ns.getPurchasedServerCost(goalThreeServerSize)) * goalThreeMaxservPurchCount)
	let goalSix = false
	let goalSixServerSize = goalFiveServerSize * 2
	let goalSixMoney = Math.ceil((ns.getPurchasedServerCost(goalSixServerSize) - ns.getPurchasedServerCost(goalFiveServerSize)) * goalThreeMaxservPurchCount)
	let goalSeven = false
	let goalSevenServerSize = goalSixServerSize * 2
	let goalSevenMoney = Math.ceil((ns.getPurchasedServerCost(goalSevenServerSize) - ns.getPurchasedServerCost(goalSixServerSize)) * goalThreeMaxservPurchCount)
	let goalEight = false
	let goalEightServerSize = goalSevenServerSize * 2
	let goalEightMoney = Math.ceil((ns.getPurchasedServerCost(goalEightServerSize) - ns.getPurchasedServerCost(goalSevenServerSize)) * goalThreeMaxservPurchCount)
	let goalNine = false
	let goalNineServerSize = goalEightServerSize * 2
	let goalNineMoney = Math.ceil((ns.getPurchasedServerCost(goalNineServerSize) - ns.getPurchasedServerCost(goalEightServerSize)) * goalThreeMaxservPurchCount)
	let goalTen = false
	let goalTenServerSize = 2048
	let goalTenServerName = goalThreeServerName
	// if the next variable is less than 3, it will cause problems this is due to autonaming system
	// for servers and how I am referring to them in these algorithms
	let goalTenMaxservPurchCount = 7 + goalThreeMaxservPurchCount
	let goalTenMoney = ns.getPurchasedServerCost(goalTenServerSize)
	let goalEleven = false
	let goalElevenMoney = 550000000
	let goalTwelve = false
	let goalTwelveMoney = 15000000000


	ns.write("/savedVar/StageOneDone", "false", "w")
	// The above block initialises all our variables, now we will go through and update them.
	// When you declare or update a variable use a single = when you evaluate if a variable is 
	// equal to something use a double == Below you can see we are checking with our if statement
	// is bruteBought true, so we use == but when update the variable goalOne we use a single =
	// very easy to get mixed up until you get it used it. I spent a long time tracking down
	// errors caused by that.

	// It occurs to me as I am writing this that some of this is redundant, I will go through
	// on another pass and try to remove that redundancy, but it has been a PITA to debug
	// so for now leaving in the redundancy in the interests of making it work.

	if (bruteBought == true && ns.hasTorRouter()) {
		goalOne = true
	}
	if (ftpBought == true) {
		goalTwo = true
	}
	if (purchServCount >= goalThreeMaxservPurchCount) {
		goalThree = true
	}
	if (ns.getServerMaxRam("home") >= 64) {
		goalFour = true
	}
	if (purchServCount > 0) {

		if (ns.getServerMaxRam(goalThreeServerName) >= goalFiveServerSize) {
			goalFive = true
		}
		if (ns.getServerMaxRam(goalThreeServerName) >= goalSixServerSize) {
			goalSix = true
		}
		if (ns.getServerMaxRam(goalThreeServerName) >= goalSevenServerSize) {
			goalSeven = true
		}
		if (ns.getServerMaxRam(goalThreeServerName) >= goalEightServerSize) {
			goalEight = true
		}
		if (ns.getServerMaxRam(goalThreeServerName) >= goalNineServerSize) {
			goalNine = true
		}
	}

	if (purchServCount >= goalTenMaxservPurchCount) {
		goalTen = true
	}
	if (ns.getServerMaxRam("home") >= 512) {
		goalEleven = true
	}




	// If you have Sector-12-CashRoot Starter Kit aug, you get $1m starting cash/BruteSSH.exe
	// When you have more than 800k run darkweb auto which will buy tor router for 200k 
	// and then BruteSSH.exe for 500k and stop.
	// Then run netburners hacknet bot, which will limit levels to 60 for 8 nodes which is
	// paid back in a couple of hours and gets you a trickle income.


	// goalOne
	// && = AND 
	// || = OR 
	// Putting a ! before something like !ns.hasTorRouter() means the condition evaluates
	// as oppsosite, so !ns.hasTorRouter() is true if we do NOT have a TOR router.

	// Do we own BruteSSH.exe (read into bruteBought variable in variable block at top)
	// perform a second check, OR do we not own a TOR router, if either of these conditions is true
	// then we can proceed INTO the if statement, but if we have a TOR router and BruteSSH.exe
	// everything inside the {} relating to that if statement will be skipped.
	if (bruteBought == false || !ns.hasTorRouter()) {
		// check that we have not marked this goals as complete, if we have skip to next goal
		if (goalOne == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalOneMoney, "$0.000a")} `);
			ns.tprint("");
			// create a wait state until we meet our requirements for this goal, which is having
			// enough money, when that is met, and as long as goalOne hasn't been marked complete,
			// proceed, which will trigger the "utils/darkweb.auto.goalOne.js" script
			// which will buy a TOR router and BruteSSH.exe.
			while (ns.getServerMoneyAvailable("home") < goalOneMoney && goalOne == false) {
				await ns.sleep(5000)
			}
			ns.run("/utils/darkweb.auto.goalOne.js")
			// Prints to terminal, to print to log use ns.print instead of ns.tprint.
			ns.tprint("Buying BruteSSH.exe and a Tor router from the darkweb.")
		} else if (bruteBought == true) {
			ns.tprint("You already own BruteSSH.exe")
		}
	}
	// Write a variable to be read by the bot.hacktarget.js script which is "listening"
	// by reading from "/savedVar/newTarget.txt" in a 5 sec loop while it still reads as "false"
	// By writing to that file from this script, we are in effect telling our targeting 
	// script to start another target evaluation run also to re-launch
	// the scripts that deploy the actual hacking scripts.  Everytime we buy a new server
	// or upgrade its ram, we will write to this savedVar to trigger that re-evaluation.
	ns.write("/savedVar/newTarget.txt", "true", "w")
	ns.tprint("Goal One is complete, moving to goal Two");
	ns.tprint("");


	// goalTwo
	// Waits until you have enough money to buy FTPCrack.exe from the darkweb using the TOR router 
	// you bought in goalOne, with appropriate checks in case you have it. Same basic idea as goalOne.

	// check if you own FTPCrack.exe by looking at the state of the variable we declared at
	// the beginning.
	if (ftpBought == false) {
		if (goalTwo == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalTwoMoney, "$0.000a")} `);
			ns.tprint("");
			// same as goalOne, establish a "wait state" by having a timed while loop
			// which we will exit when the conditions of the while are no longer met
			// so in this example when our money(measured by getting available money) on
			// our "home" server is greater than the amount in the variable goalTwoMoney
			// then as long as goalTwo is not set to true we will proceed and trigger
			// the darkweb.auto.goalTwo script which will buy FTPcrack.exe for us.
			while (ns.getServerMoneyAvailable("home") < goalTwoMoney && goalTwo == false) {
				await ns.sleep(5000)
			}
			ns.run("/utils/darkweb.auto.goalTwo.js")
			ns.tprint("Buying FTPCrack.exe from the darkweb.")
		} else if (ftpBought == true) {
			ns.tprint("You already own FTPCrack.exe")
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalTwo = true
	ns.tprint("Goal Two is complete, moving to goal three");
	ns.tprint("");


	// goalThree
	// This goal is to  buy purchased servers, which are a different price for each
	// level of RAM and different prices in different BitNodes.

	// check to see if we already own more servers than this goal is set to buy if we do, then
	// skip this entire goal's code.
	if (purchServCount >= goalThreeMaxservPurchCount) {
		ns.tprint("You already have " + purchServCount + " servers.")
		goalThree = true
	}
	if (goalThree == false) {
		// check to see if we already own more servers than this goal is set to buy
		// if we don't then proceed and enter the while loop. Note this goal has
		// one while loop inside another. We want to keep buying servers unti
		// we have enough but we want to buy them one at a time.
		// So that each time we expand our abilities we start using them.

		while (purchServCount < goalThreeMaxservPurchCount) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalThreeMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalThreeMoney && goalThree == false) {
				await ns.sleep(5000)
			}
			// run the script to buy a server, using subscript to save ongoing RAM usage.
			ns.run("/serv/serv.buy.js", 1, goalThreeServerName, goalThreeServerSize)
			ns.tprint("Buying a server of size " + goalThreeServerSize);
			// update the newTarget savedVar to trigger a target re-evaluation
			ns.write("/savedVar/newTarget.txt", "true", "w")
			// using a subscript, re-count our purchased servers and update the savedVar for that
			ns.run("/utils/isexists.purchServ.js")
			await ns.sleep(1000)
			purchServCount = ns.read("/savedVar/purchServCount.txt")
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalThree = true
	ns.tprint("Goal Three is complete, moving to goal Four");
	ns.tprint("");


	// goalFour

	// This upgrdes your home RAM if it is less than 64Gb, using a subscript to do so to save on
	// ongoing RAM cost of this script.
	if (ns.getServerMaxRam("home") < 64) {

		if (goalFour == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalFourMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalFourMoney && goalFour == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.homeupg.auto.js")
			ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));
			await ns.sleep(2000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalFour = true
	ns.tprint("Goal Four is complete, your home ram is at least 64Gb, moving to goal Five");
	ns.tprint("");

	// goalFive
	// This goal upgrades the purchased servers that were bought in goal 3, goals 6-9 are basically
	// copies of this one, with adjustments in variable names accordingly.
	// the subscript /serv/serv.purchasedupg.auto.js creates a list of purchased servers
	// and then steps through the list upgrading each one based on parameters set here.
	// first IF statement checks that the first purchased server's RAM is not higher than 
	// what you are trying to make it in this goal.  Because everything is automated
	// it is assumed you haven't upgraded any servers manually, doing so might cause
	// this system to work improperly.
	if (ns.getServerMaxRam(goalThreeServerName) < goalFiveServerSize) {

		if (goalFive == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalFiveMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalFiveMoney && goalFive == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, goalFiveServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + goalFiveServerSize);
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalFive = true
	ns.tprint("Goal Five is complete, moving to goal Six");
	ns.tprint("");

	// goalSix
	// See goalFive for explanation
	if (ns.getServerMaxRam(goalThreeServerName) < goalSixServerSize) {

		if (goalSix == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalSixMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalSixMoney && goalSix == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, goalSixServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + goalSixServerSize);
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalSix = true
	ns.tprint("Goal Six is complete, moving to goal Seven");
	ns.tprint("");


	// goalSeven
	// See goalFive for explanation
	if (ns.getServerMaxRam(goalThreeServerName) < goalSevenServerSize) {

		if (goalSeven == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalSevenMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalSevenMoney && goalSeven == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, goalSevenServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + goalSevenServerSize);
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalSeven = true
	ns.tprint("Goal Seven is complete, moving to goal Eight");
	ns.tprint("");


	// goalEight
	// See goalFive for explanation
	if (ns.getServerMaxRam(goalThreeServerName) < goalEightServerSize) {

		if (goalEight == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalEightMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalEightMoney && goalEight == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, goalEightServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + goalEightServerSize);
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalEight = true
	ns.tprint("Goal Eight is complete, moving to goal Nine");
	ns.tprint("");


	// goalNine
	// See goalFive for explanation
	if (ns.getServerMaxRam(goalThreeServerName) < goalNineServerSize) {

		if (goalNine == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalNineMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalNineMoney && goalNine == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, goalNineServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + goalNineServerSize);
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalNine = true
	ns.tprint("Goal Nine is complete, moving to goal Ten");
	ns.tprint("");




	// goalTen
	// see goalThree for explanation.
	ns.run("/utils/isexists.purchServ.js")
	await ns.sleep(1000)
	purchServCount = ns.read("/savedVar/purchServCount.txt")
	if (purchServCount >= goalTenMaxservPurchCount) {
		ns.tprint("You already have " + purchServCount + " servers.")
		goalTen = true
	}
	if (goalTen == false) {
		while (purchServCount < goalTenMaxservPurchCount) {
			ns.tprint("We have " + purchServCount + " / " + goalTenMaxservPurchCount);
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalTenMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalTenMoney && goalTen == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.buy.js", 1, goalTenServerName, goalTenServerSize)
			ns.tprint("Buying a server of size " + goalTenServerSize);
			ns.write("/savedVar/newTarget.txt", "true", "w")
			ns.run("/utils/isexists.purchServ.js")
			await ns.sleep(1000)
			purchServCount = ns.read("/savedVar/purchServCount.txt")

		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalTen = true
	ns.tprint("Goal Ten is complete, moving to goal Eleven");
	ns.tprint("");


	// goalEleven
	if (ns.getServerMaxRam("home") < 512) {

		if (goalEleven == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalElevenMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalElevenMoney && goalEleven == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.homeupg.auto.js")
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));

			while (ns.getServerMaxRam("home") < 512) {
				ns.run("/serv/serv.homeupg.auto.js")
				await ns.sleep(5000)
				ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));

			}
			ns.run("/utils/darkweb.auto.js")
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalEleven = true
	ns.tprint("Goal Eleven is complete, your home ram is at least 512Gb, moving to goal Twelve");


	var niteSecDone = ns.read("/savedVar/niteSecDone.txt") === "true" ? true : false;
	// goalTwelve
	// This simply waits until you have $15b then using subscript to save on RAM
	// buys the augments listed below from their relevant factions. Price etc 
	// all calculated manually for now.
	if (goalTwelve == false) {
		ns.tprint("Saving up until I have " + `${ns.nFormat(goalTwelveMoney, "$0.000a")} `);
		ns.tprint("");
		while (ns.getServerMoneyAvailable("home") < goalTwelveMoney && goalTwelve == false) {
			await ns.sleep(5000)
		}

		if (niteSecDone == false) {
			ns.tprint("Waiting on NiteSec rep to purchase augments")
			while (niteSecDone == false) {
				niteSecDone = ns.read("/savedVar/niteSecDone.txt") === "true" ? true : false;
				await ns.sleep(30000)
			}
		}

		if (ns.singularity.getFactionRep("CyberSec") > 2000 && ns.singularity.getFactionRep("Sector-12") > 12500 && ns.singularity.getFactionRep("NiteSec") > 20000) {
			ns.tprint("Buying augments if we don't already have them.")
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Neural-Retention Enhancement")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Embedded Netburner Module")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Cranial Signal Processors - Gen I")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "Sector-12", "CashRoot Starter Kit")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Cranial Signal Processors - Gen II")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Artificial Synaptic Potentiation")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Neurotrainer II")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "BitWire")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "CyberSec", "Synaptic Enhancement Implant")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "CyberSec", "Neurotrainer I")
			await ns.sleep(2000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "NeuroFlux Governor")
			await ns.sleep(5000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "NeuroFlux Governor")
			await ns.sleep(5000)
			ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "NeuroFlux Governor")

			ns.tprint("Faction check met")
		} else {

			ns.tprint("Faction check not met")
		}


	}

	goalTwelve = true
	ns.tprint("Goal Twelve is complete, time to install augments");
	ns.tprint("");
	ns.write("/savedVar/StageOneDone", "true", "w")




















}