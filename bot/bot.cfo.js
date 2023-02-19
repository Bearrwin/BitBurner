/** @param {NS} ns */

/** 

 * Financial goals
 
 * 1.
 *  Buy TOR router and BruteSSH.exe
 * 	Budget requirement Tor = $200k + Brute = $500k
 * 	Total Budget = $700k
 * 	Threshold = $900k
 * 2.
 * 	Buy FTPCrack.exe
 * 	Budget requirement FTP = $1.5m
 * 	Total Budget = $1.5m
 * 	Threshold = $2m
 * 3.
 * Buy 6 servers of n size
 * Budget requirement is variable and calculated by code
 * 4. Home Ram Upgrade
 * 
 * Cashroot Start Kit S-12
 * Cybersec augments
 * 	
 * Nitesec augments
 * 
 * 
 */
export async function main(ns) {

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
	let goalThreeMaxservPurchCount = 6
	let goalThreeMoney = ns.getPurchasedServerCost(goalThreeServerSize)
	let goalFour = false
	let goalFourMoney = 11000000
	let goalFive = false
	let goalFiveServerSize = goalThreeServerSize * 2
	let goalFiveMoney = Math.ceil((ns.getPurchasedServerCost(goalFiveServerSize) - ns.getPurchasedServerCost(goalThreeServerSize)) * 6.1)
	let goalSix = false
	let goalSixServerSize = goalFiveServerSize * 2
	let goalSixMoney = Math.ceil((ns.getPurchasedServerCost(goalSixServerSize) - ns.getPurchasedServerCost(goalFiveServerSize)) * 6.1)
	let goalSeven = false
	let goalSevenServerSize = goalSixServerSize * 2
	let goalSevenMoney = Math.ceil((ns.getPurchasedServerCost(goalSevenServerSize) - ns.getPurchasedServerCost(goalSixServerSize)) * 6.1)
	let goalEight = false
	let goalEightServerSize = goalSevenServerSize * 2
	let goalEightMoney = Math.ceil((ns.getPurchasedServerCost(goalEightServerSize) - ns.getPurchasedServerCost(goalSevenServerSize)) * 6.1)
	let goalNine = false
	let goalNineServerSize = goalEightServerSize * 2
	let goalNineMoney = Math.ceil((ns.getPurchasedServerCost(goalNineServerSize) - ns.getPurchasedServerCost(goalEightServerSize)) * 6.1)
	let goalTen = false
	let goalTenServerSize = 2048
	let goalTenServerName = goalThreeServerName
	// if the next variable is less than 3, it will cause problems
	let goalTenMaxservPurchCount = 4 + goalThreeMaxservPurchCount
	let goalTenMoney = ns.getPurchasedServerCost(goalTenServerSize * 4)
	let goalEleven = false
	let goalElevenMoney = 150000000
	let goalTwelve = false
	let goalTwelveMoney = 15000000000

	let purchServers = ns.getPurchasedServers();

	for (let server of purchServers) {
		servPurchCount++
		ns.tprint(server + " " + servPurchCount)

	}
	await ns.sleep(1000)

	// If player owns the CashRoot Starter Kit augment (gives player $1m starting cash)
	// when player has  more than 800k run darkweb auto which will buy tor router for 200k 
	// and then BruteSSH.exe for 500k and stop.
	// Then run netburners hacknet bot, which will limit levels to 60 for 8 nodes which is
	// paid back in a couple of hours and gets you a trickle income.


	// goalOne
	if (bruteBought == false || !ns.hasTorRouter()) {
		if (goalOne == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalOneMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalOneMoney && goalOne == false) {
				await ns.sleep(5000)
			}
			ns.run("/utils/darkweb.auto.goalOne.js ")
			ns.tprint("Buying BruteSSH.exe and a Tor router from the darkweb.")
		} else if (bruteBought == true) {
			ns.tprint("You already own BruteSSH.exe")
		}
		ns.run("/bot/bot.hacknet.netburners.js")
		ns.tprint("Starting hacknet bot to make sure our hacknet is running.")
	}
	goalOne = true
	ns.tprint("Goal One is complete, moving to goal Two");
	ns.tprint("");


	// goalTwo
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
	goalTwo = true
	ns.tprint("Goal Two is complete, moving to goal three");
	ns.tprint("");


	// goalThree
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
			servPurchCount++
		}
	}
	goalThree = true
	ns.tprint("Goal Three is complete, moving to goal Four");
	ns.tprint("");


	// goalFour
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
	goalFour = true
	ns.tprint("Goal Four is complete, your home ram is at least 64Gb, moving to goal Five");
	ns.tprint("");

	// goalFive
	if (ns.getServerMaxRam("S") < goalFiveServerSize) {

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
	goalFive = true
	ns.tprint("Goal Five is complete, moving to goal Six");
	ns.tprint("");

	// goalSix
	if (ns.getServerMaxRam("S") < goalSixServerSize) {

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
	goalSix = true
	ns.tprint("Goal Six is complete, moving to goal Seven");
	ns.tprint("");


	// goalSeven
	if (ns.getServerMaxRam("S") < goalSevenServerSize) {

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
	goalSeven = true
	ns.tprint("Goal Seven is complete, moving to goal Eight");
	ns.tprint("");


	// goalEight
	if (ns.getServerMaxRam("S") < goalEightServerSize) {

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
	goalEight = true
	ns.tprint("Goal Eight is complete, moving to goal Nine");
	ns.tprint("");


	// goalNine
	if (ns.getServerMaxRam("S") < goalNineServerSize) {

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
	goalNine = true
	ns.tprint("Goal Nine is complete, moving to goal Ten");
	ns.tprint("");


	// goalTen
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
	goalTen = true
	ns.tprint("Goal Ten is complete, moving to goal Eleven");
	ns.tprint("");


	// goalEleven
	if (ns.getServerMaxRam("home") < 256) {

		if (goalEleven == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(goalElevenMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < goalElevenMoney && goalEleven == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.homeupg.auto.js")
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));
			
			if (ns.getServerMaxRam("home") < 256) {
				ns.run("/serv/serv.homeupg.auto.js")
				await ns.sleep(5000)
				ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));
			
			}
		}
	}
	goalEleven = true
	ns.tprint("Goal Eleven is complete, your home ram is at least 256Gb, moving to goal Twelve");



	// goalTwelve

	if (goalTwelve == false) {
		ns.tprint("Saving up until I have " + `${ns.nFormat(goalTwelveMoney, "$0.000a")} `);
		ns.tprint("");
		while (ns.getServerMoneyAvailable("home") < goalTwelveMoney && goalTwelve == false) {
			await ns.sleep(5000)
		}

		ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Neural-Retention Enhancement")
		ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Embedded Netburner Module")
		ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Cranial Signal Processors - Gen I")
		ns.run("/utils/faction.buy.augment.js", 1, "Sector-12", "CashRoot Starter Kit")
		ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Cranial Signal Processors - Gen II")
		ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Artificial Synaptic Potentiation")
		ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "Neurotrainer II")
		ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "BitWire")
		ns.run("/utils/faction.buy.augment.js", 1, "CyberSec", "Synaptic Enhancement Implant")
		ns.run("/utils/faction.buy.augment.js", 1, "CyberSec", "Neurotrainer I")
		ns.run("/utils/faction.buy.augment.js", 1, "NiteSec", "NeuroFlux Governor")


		ns.tprint("Buying augments if we don't already have them.")
	} 

	goalTwelve = true
	ns.tprint("Goal Twelve is complete, moving to goal Thirteen");
	ns.tprint("");




















}




















// 	while (true) {




// 		if (!ns.fileExists("BruteSSH.exe", "home")) {
// 			while (ns.getServerMoneyAvailable("home") < 2000000) {
// 				await ns.sleep(1000)
// 			}
// 			ns.run("darkweb.auto.js", 1)
// 			await ns.sleep(10000)
// 			ns.run("worm.nuke.js")

// 		}


// 		while (ns.getServerMoneyAvailable("home") < 2000000) {
// 			await ns.sleep(1000)
// 		}
// 		ns.run("darkweb.auto.js", 1)
// 		await ns.sleep(10000)
// 		ns.run("worm.nuke.js")

// 		while (ns.getServerMoneyAvailable("home") < 5500000) {
// 			await ns.sleep(1000)
// 		}
// 		ns.run("darkweb.auto.js", 1)
// 		await ns.sleep(10000)
// 		ns.run("worm.nuke.js")

// 		while (ns.getServerMoneyAvailable("home") < 35000000) {
// 			await ns.sleep(1000)
// 		}
// 		ns.run("darkweb.auto.js", 1)
// 		await ns.sleep(10000)
// 		ns.run("worm.nuke.js")

// 		while (ns.getServerMoneyAvailable("home") < 265000000) {
// 			await ns.sleep(1000)
// 		}
// 		ns.run("darkweb.auto.js", 1)
// 		await ns.sleep(10000)
// 		ns.run("worm.nuke.js")

// 	}
// }
// if (!ns.fileExists("BruteSSH.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("BruteSSH.exe")) {
// 	ns.singularity.purchaseProgram("BruteSSH.exe");
// }
// if (!ns.fileExists("FTPCrack.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("FTPCrack.exe")) {
// 	ns.singularity.purchaseProgram("FTPCrack.exe");
// }
// if (!ns.fileExists("HTTPWorm.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("relaySMTP.exe")) {
// 	ns.singularity.purchaseProgram("relaySMTP.exe");
// }
// if (!ns.fileExists("relaySMTP.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("HTTPWorm.exe")) {
// 	ns.singularity.purchaseProgram("HTTPWorm.exe");
// }
// if (!ns.fileExists("SQLInject.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("SQLInject.exe")) {
// 	ns.singularity.purchaseProgram("SQLInject.exe")

// }