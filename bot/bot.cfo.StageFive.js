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
	const initialServPurchSize = 128
	const initialServPurchCount = 5
	const initialServPurchMoney = ns.getPurchasedServerCost(initialServPurchSize)
	let ftpPurch = false
	const ftpPurchMoney = 1600000
	let darkwebStageThree = false
	const darkwebStageThreeMoney = 500000000



	let firstServUpg = false
	const firstServUpgServerSize = initialServPurchSize * 2
	const firstServUpgMoney = Math.ceil((ns.getPurchasedServerCost(firstServUpgServerSize) - ns.getPurchasedServerCost(initialServPurchSize)) * initialServPurchCount)
	let secondServUpg = false
	const secondServUpgServerSize = firstServUpgServerSize * 2
	const secondServUpgMoney = Math.ceil((ns.getPurchasedServerCost(secondServUpgServerSize) - ns.getPurchasedServerCost(firstServUpgServerSize)) * initialServPurchCount)
	let thirdServUpg = false
	const thirdServUpgServerSize = secondServUpgServerSize * 2
	const thirdServUpgMoney = Math.ceil((ns.getPurchasedServerCost(thirdServUpgServerSize) - ns.getPurchasedServerCost(secondServUpgServerSize)) * initialServPurchCount)
	let fourthServUpg = false
	const fourthServUpgServerSize = thirdServUpgServerSize * 2
	const fourthServUpgMoney = Math.ceil((ns.getPurchasedServerCost(fourthServUpgServerSize) - ns.getPurchasedServerCost(thirdServUpgServerSize)) * initialServPurchCount)
	let fifthServUpg = false
	const fifthServUpgServerSize = fourthServUpgServerSize * 2
	const fifthServUpgMoney = Math.ceil((ns.getPurchasedServerCost(fifthServUpgServerSize) - ns.getPurchasedServerCost(fourthServUpgServerSize)) * initialServPurchCount)
	let sixthServUpg = false
	const sixthServUpgServerSize = fifthServUpgServerSize * 2
	const sixthServUpgMoney = Math.ceil((ns.getPurchasedServerCost(sixthServUpgServerSize) - ns.getPurchasedServerCost(fifthServUpgServerSize)) * initialServPurchCount)
	let seventhServUpg = false
	const seventhServUpgServerSize = sixthServUpgServerSize * 2
	const seventhServUpgMoney = Math.ceil((ns.getPurchasedServerCost(seventhServUpgServerSize) - ns.getPurchasedServerCost(sixthServUpgServerSize)) * initialServPurchCount)
	let eighthServUpg = false
	const eighthServUpgServerSize = seventhServUpgServerSize * 2
	const eighthServUpgMoney = Math.ceil((ns.getPurchasedServerCost(eighthServUpgServerSize) - ns.getPurchasedServerCost(seventhServUpgServerSize)) * initialServPurchCount)
	let secondServPurch = false
	const secondServPurchCount = 15
	const secondServPurchSize = eighthServUpgServerSize
	const secondServPurchMoney = ns.getPurchasedServerCost(secondServPurchSize)
	let bitrunnerDonation = false
	const bitrunnerDonationMoney = 770000000000
	let homeRamUpgStageTwo = false
	const homeRamUpgStageTwoSize = 65536
	const homeRamUpgStageTwoMoney = 1320000000000
	let augPurchStageTwo = false
	const augPurchStageTwoMoney = 650000000000



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

	if (ns.getServerMaxRam("home") >= 32768) {
		homeRamUpgStageTwo = true
	}





	// torPurch
	if (!ns.hasTorRouter()) {
		if (torPurch == false) {
			ns.tprint("Saving up until I have " + `${ns.formatNumber(torMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(initialServPurchMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(ftpPurchMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(firstServUpgMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(secondServUpgMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(thirdServUpgMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(fourthServUpgMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(fifthServUpgMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(darkwebStageThreeMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(sixthServUpgMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(seventhServUpgMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(eighthServUpgMoney, "$0.000a")} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(secondServPurchMoney, "$0.000a")} `);
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


	// bitrunnerDonation
			if (bitrunnerDonation == false) {
			ns.tprint("Saving up until I have " + `${ns.formatNumber(bitrunnerDonationMoney, "$0.000a")} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < bitrunnerDonationMoney && bitrunnerDonation == false) {
				await ns.sleep(5000)
			}
			ns.run("/donate/donate.bitrunners.js", 1, 760000000000)
			ns.write("/savedVar/bitrunnersDone.txt", "true", "w")
			await ns.sleep(5000)
			ns.tprint("Donating money to the bitrunners");
			}
	
	
	ns.run("/utils/darkweb.auto.js")
	ns.write("/savedVar/newTarget.txt", "true", "w")
	homeRamUpgStageTwo = true
	await ns.sleep(5000)


	var tianDiHuiDone = ns.read("/savedVar/tianDiHuiDone.txt") === "true" ? true : false;
	var bitrunnersDone = ns.read("/savedVar/bitrunnersDone.txt") === "true" ? true : false;

	ns.tprint("T " + tianDiHuiDone + " B " + bitrunnersDone)
	await ns.sleep(5000)

 
	// augPurchStageTwo
	if (augPurchStageTwo == false && tianDiHuiDone == true && bitrunnersDone == true) {
		ns.tprint("Saving up until I have " + `${ns.formatNumber(augPurchStageTwoMoney, "$0.000a")} `);
		ns.tprint("");
		while (ns.getServerMoneyAvailable("home") < augPurchStageTwoMoney && augPurchStageTwo == false) {
			await ns.sleep(5000)
		}

		ns.tprint("Buying augments if we don't already have them.")
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "Embedded Netburner Module Core V2 Upgrade")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "BitRunners Neurolink")
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
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "BitRunners", "NeuroFlux Governor")
		await ns.sleep(5000)
		ns.run("/utils/faction.buy.augment.js", 1, "Tian Di Hui", "Speech Processor Implant")
		await ns.sleep(2000)
		ns.run("/utils/faction.buy.augment.js", 1, "Tian Di Hui", "Speech Enhancement")
		await ns.sleep(2000)

	}

	augPurchStageTwo = true
	ns.tprint("Goal Twelve is complete, time to install augments");
	ns.tprint("");
	ns.write("/savedVar/stageFiveDone.txt", "true", "w")




















}

// homeRamUpgStageTwo
	// if (ns.getServerMaxRam("home") < homeRamUpgStageTwoSize) {

	// 	if (homeRamUpgStageTwo == false) {
	// 		ns.tprint("Saving up until I have " + `${ns.formatNumber(homeRamUpgStageTwoMoney, "$0.000a")} `);
	// 		ns.tprint("");
	// 		while (ns.getServerMoneyAvailable("home") < homeRamUpgStageTwoMoney && homeRamUpgStageTwo == false) {
	// 			await ns.sleep(5000)
	// 		}
	// 		ns.run("/serv/serv.homeupg.auto.js")
	// 		await ns.sleep(5000)
	// 		ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));

	// 		while (ns.getServerMaxRam("home") < homeRamUpgStageTwoSize) {
	// 			ns.run("/serv/serv.homeupg.auto.js")
	// 			await ns.sleep(5000)
	// 			ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));

	// 		}

	// 	}
	// }