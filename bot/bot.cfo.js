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
	let bruteBought = (ns.fileExists("BruteSSH.exe", "home"))
	let ftpBought = (ns.fileExists("FTPCrack.exe", "home"))
	let smtpBought = (ns.fileExists("relaySMTP.exe", "home"))
	let httpBought = (ns.fileExists("HTTPWorm.exe", "home"))
	let sqlBought = (!ns.fileExists("SQLInject.exe", "home"))
	// let number_of_nodes = ns.hacknet.numNodes()
	let servPurchCount = 0

	let goalOne = false
	let goalOneMoney = 800000
	let goalTwo = false
	let goalTwoMoney = 1600000
	let goalThree = false
	let goalThreeServerSize = 64
	let goalThreeServerName = "S"
	// if the next variable is less than 3, it will cause problems
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
	let goalTenMoney = ns.getPurchasedServerCost(goalTenServerSize * 2)
	let goalEleven = false
	let goalElevenMoney = 550000000
	let goalTwelve = false
	let goalTwelveMoney = 15000000000

	// this creates a list in variable purchServers of all the purchased servers you own.
	let purchServers = ns.getPurchasedServers();

	// if this script is restarted for any reason the variable which keeps track of how many servers
	// you have bought starts at 0 again, so this stops you overbuying servers.
	for (let server of purchServers) {
		servPurchCount++
		ns.tprint(server + " " + servPurchCount)

	}
	await ns.sleep(1000)

	// If you have Sector-12-CashRoot Starter Kit aug, you get $1m starting cash/BruteSSH.exe
	// When you have more than 800k run darkweb auto which will buy tor router for 200k 
	// and then BruteSSH.exe for 500k and stop.
	// Then run netburners hacknet bot, which will limit levels to 60 for 8 nodes which is
	// paid back in a couple of hours and gets you a trickle income.


	// goalOne
	// check variable to see if we own BruteSSH.exe yet (|| which is shift+\) says OR we don't 
	// own TOR router ! reverses the check from true to false for this condition
	// so if we are missing either of these proceed into the IF statement otherwise skip it
	// once we are in the IF enter the WHILE loop which checks if we have enough money for our goal
	// and makes sure we haven't finished this goal, waits 5 secs and then checks again.
	// when we have met our conditions proceed past the while loop, run the script that buys the 
	// TOR router and BruteSSH.exe, then print a msg to terminal so we know it has worked.
	// also in this goal is to the start the hacknet bot, which will buy 8 nodes and 60 levels
	// on each, which is more than enough to open up the netburners faction and get you a trickle 
	// income which will pay back your investment in about 2 hours, much more than that and it rapidly
	// escalates how long it takes to pay back your cost of buying the network.
	if (bruteBought == false || !ns.hasTorRouter()) {
		if (goalOne == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalOneMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalOneMoney && goalOne == false) {
				await ns.sleep(5000)
			}
			ns.run("/utils/darkweb.auto.goalOne.js")
			ns.tprint("Buying BruteSSH.exe and a Tor router from the darkweb.")
		} else if (bruteBought == true) {
			ns.tprint("You already own BruteSSH.exe")
		}
		// ns.run("/bot/bot.hacknet.netburners.js")
		// ns.tprint("Starting hacknet bot to make sure our hacknet is running.")
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalOne = true
	ns.tprint("Goal One is complete, moving to goal Two");
	ns.tprint("");


	// goalTwo
	// Waits until you have enough money to buy FTPCrack.exe from the darkweb using the TOR router 
	// you bought in goalOne, with appropriate checks in case you have it. Same basic idea as goalOne.
	if (ftpBought == false) {
		if (goalTwo == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalTwoMoney, "$0.000a")} `);
			ns.tprint("");
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
	// This goal buy purchased servers, which are a different price for each level of RAM
	// and different prices in different BitNodes.
	// First check if you already own six purchased servers(the object of this goal) the autonaming
	// function I am allowing the game to apply by repeatedly buying a server with the same basic
	// name means it starts at S then become S-0 then S-1 up to max of s-23. So S-4 is my sixth
	// server so that is what I check for in the list of servers created in the first IF
	// statement, does it include the name S-4, but it uses variables so that if you change the
	// name of your server or the amount you are buying, it will adjust accordingly.
	// it utilises a while loop to purchase 1 server when it has enough money and then 
	// increases the variable servPurchCount by 1 each time so that once we have the number
	// specified in the variables up the top it will exit the while loop and then continue
	// going down the script

	if (ns.getPurchasedServers().includes(goalThreeServerName + "-" + (servPurchCount - 2))) {
		ns.tprint("You already have at least " + servPurchCount + " servers.")
		goalThree = true
	}
	if (goalThree == false) {
		while (servPurchCount < goalThreeMaxservPurchCount) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalThreeMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalThreeMoney && goalThree == false) {
				await ns.sleep(5000)
			}
			ns.purchaseServer(goalThreeServerName, goalThreeServerSize)
			ns.tprint("Buying a server of size " + goalThreeServerSize);
			ns.write("/savedVar/newTarget.txt", "true", "w")
			servPurchCount++
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalThree = true
	ns.tprint("Goal Three is complete, moving to goal Four");
	ns.tprint("");


	// goalFour

	// This upgrds your home RAM if it is less than 64Gb, using a subscript to do so to save on
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
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam("S"));
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
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam("S"));
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
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam("S"));
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
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam("S"));
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
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam("S"));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	goalNine = true
	ns.tprint("Goal Nine is complete, moving to goal Ten");
	ns.tprint("");


	// goalTen
	// see goalThree for explanation.
	if (ns.getPurchasedServers().includes(goalTenServerName + "-" + (goalTenMaxservPurchCount - 2))) {
		ns.tprint("You already have at least " + goalTenMaxservPurchCount + " servers.")
		goalTen = true
	}
	if (goalTen == false) {
		while (servPurchCount < goalTenMaxservPurchCount) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalTenMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalTenMoney && goalTen == false) {
				await ns.sleep(5000)
			}
			ns.purchaseServer(goalTenServerName, goalTenServerSize)
			ns.tprint("Buying a server of size " + goalTenServerSize);
			servPurchCount++
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
		}
	} ns.write("/savedVar/newTarget.txt", "true", "w")
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





		} 

		goalTwelve = true
		ns.tprint("Goal Twelve is complete, moving to goal Thirteen");
		ns.tprint("");




















	}