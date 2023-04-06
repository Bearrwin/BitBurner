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
	const torMoney = 800000
	let homeRamUpgStageOne = false
	const homeRamUpgStageOneSize = 64
	const homeRamUpgStageOneMoney = 11000000
	let initialServPurch = false
	const initialServPurchSize = 64
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
	const secondServPurchCount = 10
	const secondServPurchSize = sixthServUpgServerSize
	const secondServPurchMoney = ns.getPurchasedServerCost(secondServPurchSize)
	let bitrunnerDonation = false
	const bitrunnerDonationMoney = 770000000000
	let homeRamUpgStageTwo = false
	const homeRamUpgStageTwoSize = 4096
	const homeRamUpgStageTwoMoney = 16000000000
	let augPurchStageTwo = false
	const augPurchStageTwoMoney = 60000000000



	if (ns.hasTorRouter()) {
		torPurch = true
	}
	if (ns.getServerMaxRam("home") >= 64) {
		homeRamUpgStageOne = true
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

	if (ns.getServerMaxRam("home") >= 4096) {
		homeRamUpgStageTwo = true
	}





	// torPurch
	if (!ns.hasTorRouter()) {
		if (torPurch == false) {
			ns.tprint("Saving up until I have " + `${ns.formatNumber(torMoney)} `);
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

	// homeRamUpgStageOne
	if (ns.getServerMaxRam("home") < homeRamUpgStageOneSize) {

		if (homeRamUpgStageOne == false) {
			ns.tprint("Saving up until I have " + `${ns.formatNumber(homeRamUpgStageOneMoney)} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < homeRamUpgStageOneMoney && homeRamUpgStageOne == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.homeupg.auto.js")
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));

			while (ns.getServerMaxRam("home") < homeRamUpgStageOneSize) {
				ns.run("/serv/serv.homeupg.auto.js")
				await ns.sleep(5000)
				ns.tprint("Upgrading RAM on our home server it is now.. " + ns.getServerMaxRam("home"));

			}

		}
	}


	// initialServPurch
	if (purchServCount >= initialServPurchCount) {
		ns.tprint("You already have " + purchServCount + " servers.")
		initialServPurch = true
	}
	if (initialServPurch == false) {
		while (purchServCount < initialServPurchCount) {
			ns.tprint("Saving up until I have " + `${ns.formatNumber(initialServPurchMoney)} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(ftpPurchMoney)} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(firstServUpgMoney)} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(secondServUpgMoney)} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(thirdServUpgMoney)} `);
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
			ns.tprint("Saving up until I have " + `${ns.formatNumber(fourthServUpgMoney)} `);
			ns.tprint("");
			while (ns.getServerMoneyAvailable("home") < fourthServUpgMoney && fourthServUpg == false) {
				await ns.sleep(5000)
			}
			ns.run("/serv/serv.purchasedupg.auto.js", 1, fourthServUpgServerSize)
			await ns.sleep(5000)
			ns.tprint("Upgrading RAM on our purchased servers it is now.. " + ns.getServerMaxRam(purchServerName));
			await ns.sleep(5000)
		}
	ns.write("/savedVar/newTarget.txt", "true", "w")



	ns.tprint("");
	ns.write("/savedVar/thirtyTwogbDone.txt", "true", "w")
	}



}