/** @param {NS} ns */

export async function main(ns) {

	/**
	 * 1. Buy TOR router
	 * 2. Buy 3 x 64 Gb servers to start adding firepower to my hacking
	 * 3. Buy FTPCrack
	 * 4-9. Upgrade those 6 initial servers to 4Tb each in stages
	 * 10. Buy 3 more 4Tb servers
	 * 11. Buy more home RAM upgrades.
	 * 12. buy augments as per the list, pretty much increases to hacking, with preference to +skill
	 * 
	 */
	ns.disableLog("sleep")
	ns.disableLog("getServerMoneyAvailable")
	ns.tail()
	await ns.sleep(1000)
	ns.moveTail(50, 50)
	ns.resizeTail(500, 150)

	ns.run("/utils/isexists.purchServ.js")
	await ns.sleep(1000)


	let bruteBought = (ns.fileExists("BruteSSH.exe", "home"))
	let ftpBought = (ns.fileExists("FTPCrack.exe", "home"))
	let smtpBought = (ns.fileExists("relaySMTP.exe", "home"))
	let httpBought = (ns.fileExists("HTTPWorm.exe", "home"))
	let sqlBought = (!ns.fileExists("SQLInject.exe", "home"))
	var purchServCount = ns.read("/savedVar/purchServCount.txt")


	const purchServerName = "S"



	let torPurch = false
	const torMoney = 300000
	let initialServPurch = false
	const initialServPurchSize = 64
	const initialServPurchCount = 3
	const initialServPurchMoney = ns.getPurchasedServerCost(initialServPurchSize)
	let ftpPurch = false
	const ftpPurchMoney = 1600000
	let darkwebStageThree = false
	const darkwebStageThreeMoney = 500000000



	let firstServUpg = false
	const firstServUpgServerSize = initialServPurchSize * 2
	const firstServUpgMoney = Math.ceil((ns.getPurchasedServerCost(firstServUpgServerSize) - ns.getPurchasedServerCost(initialServPurchSize)) * purchServCount)
	let secondServUpg = false
	const secondServUpgServerSize = firstServUpgServerSize * 2
	const secondServUpgMoney = Math.ceil((ns.getPurchasedServerCost(secondServUpgServerSize) - ns.getPurchasedServerCost(firstServUpgServerSize)) * purchServCount)
	let thirdServUpg = false
	const thirdServUpgServerSize = secondServUpgServerSize * 2
	const thirdServUpgMoney = Math.ceil((ns.getPurchasedServerCost(thirdServUpgServerSize) - ns.getPurchasedServerCost(secondServUpgServerSize)) * purchServCount)
	let fourthServUpg = false
	const fourthServUpgServerSize = thirdServUpgServerSize * 2
	const fourthServUpgMoney = Math.ceil((ns.getPurchasedServerCost(fourthServUpgServerSize) - ns.getPurchasedServerCost(thirdServUpgServerSize)) * purchServCount)
	let fifthServUpg = false
	const fifthServUpgServerSize = fourthServUpgServerSize * 2
	const fifthServUpgMoney = Math.ceil((ns.getPurchasedServerCost(fifthServUpgServerSize) - ns.getPurchasedServerCost(fourthServUpgServerSize)) * purchServCount)
	let sixthServUpg = false
	const sixthServUpgServerSize = fifthServUpgServerSize * 2
	const sixthServUpgMoney = Math.ceil((ns.getPurchasedServerCost(sixthServUpgServerSize) - ns.getPurchasedServerCost(fifthServUpgServerSize)) * purchServCount)
	let seventhServUpg = false
	const seventhServUpgServerSize = sixthServUpgServerSize * 2
	const seventhServUpgMoney = Math.ceil((ns.getPurchasedServerCost(seventhServUpgServerSize) - ns.getPurchasedServerCost(sixthServUpgServerSize)) * purchServCount)
	let eighthServUpg = false
	const eighthServUpgServerSize = seventhServUpgServerSize * 2
	const eighthServUpgMoney = Math.ceil((ns.getPurchasedServerCost(eighthServUpgServerSize) - ns.getPurchasedServerCost(seventhServUpgServerSize)) * purchServCount)
	let secondServPurch = false
	const secondServPurchCount = 10
	const secondServPurchSize = eighthServUpgServerSize
	const secondServPurchMoney = ns.getPurchasedServerCost(secondServPurchSize)
	let homeRamUpgStageTwo = false
	const homeRamUpgStageTwoSize = 16384
	const homeRamUpgStageTwoMoney = 105000000000
	let augPurchStageTwo = false
	const augPurchStageTwoMoney = 135000000000



	if (ns.hasTorRouter()) {
		torPurch = true
	}
	if (purchServCount >= initialServPurchCount) {
		initialServPurch = true
	}
	if (ftpBought == true) {
		ftpPurch = true
	}
	if (purchServCount > 0) {
		if (ns.getServerMaxRam(purchServerName) >= firstServUpgServerSize) {
			secondServUpg = true
		}
		if (ns.getServerMaxRam(purchServerName) >= secondServUpgServerSize) {
			secondServUpg = true
		}
		if (ns.getServerMaxRam(purchServerName) >= thirdServUpgServerSize) {
			thirdServUpg = true
		}
		if (ns.getServerMaxRam(purchServerName) >= fourthServUpgServerSize) {
			fourthServUpg = true
		}
		if (ns.getServerMaxRam(purchServerName) >= fifthServUpgServerSize) {
			fifthServUpg = true
		}
		if (ns.getServerMaxRam(purchServerName) >= sixthServUpgServerSize) {
			sixthServUpg = true
		}
		if (ns.getServerMaxRam(purchServerName) >= seventhServUpgServerSize) {
			seventhServUpg = true
		}
		if (ns.getServerMaxRam(purchServerName) >= eighthServUpgServerSize) {
			eighthServUpg = true
		}
		if (purchServCount >= secondServPurchCount) {
			secondServPurch = true
		}
	}

	if (ns.getServerMaxRam("home") >= 16384) {
		homeRamUpgStageTwo = true
	}





	// torPurch
	if (!ns.hasTorRouter()) {
		if (torPurch == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(torMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < torMoney && torPurch == false) {
				await ns.sleep(5000)
			}
			ns.run("/utils/darkweb.auto.goalOne.js")
			ns.tprint("Buying a Tor router from the darkweb.")
		} else if (torPurch == true) {
			ns.tprint("You already own a TOR Router")
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")


	// initialServPurch
	if (purchServCount >= initialServPurchCount) {
		ns.tprint("You already have " + purchServCount + " servers.")
		initialServPurch = true
	}
	if (initialServPurch == false) {
		while (purchServCount < initialServPurchCount) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(initialServPurchMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < initialServPurchMoney && initialServPurch == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.buy.js", 1, purchServerName, initialServPurchSize)
			ns.tprint("Buying a server of size " + initialServPurchSize);
			ns.write("/savedVar/newTarget.txt", "true", "w")
			ns.run("/utils/isexists.purchServ.js")
			await ns.sleep(1000)
			purchServCount = ns.read("/savedVar/purchServCount.txt")
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	initialServPurch = true

	// ftpPurch
	if (ftpBought == false) {
		if (ftpPurch == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(ftpPurchMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < ftpPurchMoney && ftpPurch == false) {
				await ns.sleep(5000)
			}
			ns.run("/utils/darkweb.auto.goalTwo.js")
			ns.tprint("Buying FTPCrack.exe from the darkweb.")
		} else if (ftpBought == true) {
			ns.tprint("You already own FTPCrack.exe")
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	ftpPurch = true

	// firstServUpg
	if (ns.getServerMaxRam(purchServerName) < firstServUpgServerSize) {

		if (firstServUpg == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(firstServUpgMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < firstServUpgMoney && firstServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, firstServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	firstServUpg = true



	// secondServUpg
	if (ns.getServerMaxRam(purchServerName) < secondServUpgServerSize) {

		if (secondServUpg == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(secondServUpgMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < secondServUpgMoney && secondServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, secondServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	secondServUpg = true

	// thirdServUpg
	if (ns.getServerMaxRam(purchServerName) < thirdServUpgServerSize) {

		if (thirdServUpg == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(thirdServUpgMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < thirdServUpgMoney && thirdServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, thirdServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	thirdServUpg = true


	// fourthServUpg
	if (ns.getServerMaxRam(purchServerName) < fourthServUpgServerSize) {

		if (fourthServUpg == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(fourthServUpgMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < fourthServUpgMoney && fourthServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, fourthServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	fourthServUpg = true


	// fifthServUpg
	if (ns.getServerMaxRam(purchServerName) < fifthServUpgServerSize) {

		if (fifthServUpg == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(fifthServUpgMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < fifthServUpgMoney && fifthServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, fifthServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	fifthServUpg = true

	// darkwebStageThree
	if (!ns.fileExists("SQLInject.exe", "home")) {
		if (darkwebStageThree == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(darkwebStageThreeMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < darkwebStageThreeMoney && darkwebStageThree == false) {
				await ns.sleep(5000)
			}
			ns.run("/utils/darkweb.auto.goalThree.js")
			ns.tprint("Buying missing programs from the darkweb, except formulas.exe.")
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	ns.tprint("");


	// sixthServUpg
	if (ns.getServerMaxRam(purchServerName) < sixthServUpgServerSize) {

		if (sixthServUpg == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(sixthServUpgMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < sixthServUpgMoney && sixthServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, sixthServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	sixthServUpg = true

	
	// seventhServUpg
	if (ns.getServerMaxRam(purchServerName) < seventhServUpgServerSize) {

		if (seventhServUpg == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(seventhServUpgMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < seventhServUpgMoney && seventhServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, seventhServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	seventhServUpg = true


	// eighthServUpg
	if (ns.getServerMaxRam(purchServerName) < eighthServUpgServerSize) {

		if (eighthServUpg == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(eighthServUpgMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < eighthServUpgMoney && eighthServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, eighthServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	eighthServUpg = true




	// secondServPurch
	ns.run("/utils/isexists.purchServ.js")
	await ns.sleep(1000)
	purchServCount = ns.read("/savedVar/purchServCount.txt")
	if (purchServCount >= secondServPurchCount) {
		ns.tprint("You already have " + purchServCount + " servers.")
		secondServPurch = true
	}
	if (secondServPurch == false) {
		while (purchServCount < secondServPurchCount) {
			ns.tprint("We have " + purchServCount + " / " + secondServPurchCount);
			ns.tprint("Saving up until I have " + `${ns.nFormat(secondServPurchMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < secondServPurchMoney && secondServPurch == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.buy.js", 1, purchServerName, secondServPurchSize)
			ns.tprint("Buying a server of size " + secondServPurchSize);
			ns.write("/savedVar/newTarget.txt", "true", "w")
			ns.run("/utils/isexists.purchServ.js")
			await ns.sleep(1000)
			purchServCount = ns.read("/savedVar/purchServCount.txt")

		}
	}
	await ns.sleep(5000)
	ns.write("/savedVar/newTarget.txt", "true", "w")
	secondServPurch = true


	// homeRamUpgStageTwo
	if (ns.getServerMaxRam("home") < homeRamUpgStageTwoSize) {

		if (homeRamUpgStageTwo == false) {
			ns.tprint("Saving up until I have " + `${ns.nFormat(homeRamUpgStageTwoMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < homeRamUpgStageTwoMoney && homeRamUpgStageTwo == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.homeupg.auto.js")
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));

			while (ns.getServerMaxRam("home") < homeRamUpgStageTwoSize) {
				ns.run("/serv/serv.homeupg.auto.js")
				await ns.sleep(5000)
				ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));

			}

		}
	}
	ns.write("/savedVar/newTarget.txt", "true", "w")
	homeRamUpgStageTwo = true
	await ns.sleep(5000)


	var chongqingDone = ns.read("/savedVar/chongqingDone.txt") === "true" ? true : false;
	var bitrunnersDone = ns.read("/savedVar/bitrunnersDone.txt") === "true" ? true : false;

	ns.tprint("C " + chongqingDone + " B " + bitrunnersDone)
	await ns.sleep(5000)

//  && chongqingDone == true && bitrunnersDone == true
	// augPurchStageTwo
	if (augPurchStageTwo == false) {
		ns.tprint("Saving up until I have " + `${ns.nFormat(augPurchStageTwoMoney, "$0.000a")} `);
		ns.tprint("");
		while (ns.getServerMoneyAvailable("home") < augPurchStageTwoMoney && augPurchStageTwo == false) {
			await ns.sleep(5000)
		}

		ns.tprint("Buying augments if we don't already have them.")
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "Artificial Bio-neural Network Implant")
		await ns.sleep(2000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "Embedded Netburner Module Core Implant")
		await ns.sleep(2000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "Cranial Signal Processors - Gen IV")
		await ns.sleep(2000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "Cranial Signal Processors - Gen V")
		await ns.sleep(2000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "Neural Accelerator")
		await ns.sleep(2000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "DataJack")
		await ns.sleep(2000)
		ns.run("/utils/faction.buy.augment.js", 1, "Chongqing", "Neuregen Gene Modification")
		await ns.sleep(2000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		
		// 	ns.tprint("Faction check met")
		// } else {

		// 	ns.tprint("Faction check not met")
		// }


	}

	augPurchStageTwo = true
	ns.tprint("Goal Twelve is complete, time to install augments");
	ns.tprint("");
	ns.write("/savedVar/stageThreeDone.txt", "true", "w")




















}