/** @param {NS} ns */
export async function main(ns) {


	// ns.disableLog("sleep")
	// ns.disableLog("getHackingLevel")
	// ns.disableLog("getServerMoneyAvailable")
	// ns.disableLog("getServerRequiredHackingLevel")
	// ns.disableLog("getServerMaxRam")
	ns.tail()


	var stageOne = ns.read("/savedVar/stageOne.txt") === "true" ? true : false;
	var newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
	var servCount = ns.read("/savedVar/purchServCount.txt")
	var phaseOneDone = false
	var phaseTwoDone = false
	var phaseThreeDone = false
	var phaseFourDone = false
	var phaseFiveDone = false
	var phaseSixDone = false
	var phaseSevenDone = false
	var currentTarget = "max-hardware"
	let firstTarget = "n00dles"
	let secondTarget = "max-hardware"
	let thirdTarget = "phantasy"
	let fourthTarget = "silver-helix"
	let fifthTarget = "omega-net"
	let wThreads = 1
	let gThreads = 12
	let hThreads = 1
	let cycleDelay = 1000
	let targetChange = false
	let doubleBarrel = false
	let doubleBarrelTarget = "n00dles"
	var pidOne = 0
	var pidTwo = 0

	while (ns.getHackingLevel() < 100) {
		await ns.sleep(1000)
	}
	ns.run("/worm/worm.nuke.js")
	ns.tprint("Running Nuke worm to crack all possible ports and nuke all possible servers.")
	ns.tprint("")
	await ns.sleep(10000)

	while (true) {
		ns.run("/utils/isexists.purchServ.js")
		await ns.sleep(1000)
		servCount = ns.read("/savedVar/purchServCount.txt")
		if (servCount > 0) {
			var servRam = ns.getServerMaxRam("S")
		}

		if (servCount <= 3 && phaseThreeDone == false) {
			wThreads = 2
			gThreads = 24
			hThreads = 2
			cycleDelay = 250
			currentTarget = secondTarget
			targetChange = true
			phaseThreeDone = true
		}
		if (ns.getHackingLevel() > 200 && phaseFourDone == false && ns.hasRootAccess(thirdTarget)) {
			wThreads = 2
			gThreads = 24
			hThreads = 2
			cycleDelay = 250
			currentTarget = thirdTarget
			targetChange = true
			phaseFourDone = true
		}
		if (servCount >= 3 && servRam >= 1024 && phaseFiveDone == false) {
			wThreads = 2
			gThreads = 24
			hThreads = 2
			cycleDelay = 100
			currentTarget = thirdTarget
			targetChange = true
			phaseFiveDone = true
		}
		if (servCount >= 3 && servRam >= 2048 && phaseSixDone == false) {
			wThreads = 2
			gThreads = 24
			hThreads = 2
			cycleDelay = 50
			currentTarget = thirdTarget
			targetChange = true
			phaseSixDone = true
		}



		if (targetChange == true) {
			ns.run("/worm/worm.nuke.js")
			ns.tprint("Running Nuke worm to crack all possible ports and nuke all possible servers.")
			ns.tprint("")

			ns.run("/serv/serv.propagate.all.js")
			await ns.sleep(5000)
			ns.tprint("PID to kill is " + pidOne)
			ns.kill(pidOne)
			await ns.sleep(10000)
			var pidOne = ns.run("/init/init.batcher.pservPool.js", 1, currentTarget, wThreads, gThreads, hThreads, cycleDelay)
			if (doubleBarrel == true) {
				ns.tprint("PID2 to kill is " + pidTwo)
				ns.kill(pidTwo)
				var pidTwo = ns.run("/init/init.batcher.pservPool.js", 1, doubleBarrelTarget, wThreads, gThreads, hThreads, cycleDelay)

			}
		}
		targetChange = false


		let timeOut = 100
		while (newTarget == false) {

			newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
			await ns.sleep(6000)
			timeOut--
			ns.print(timeOut)
			if (timeOut < 1) {
				newTarget = true
			}


		}
		ns.run("/serv/serv.propagate.all.js")
		await ns.sleep(5000)
		ns.tprint("We have a new targeting request")
		ns.write("/savedVar/newTarget.txt", "false", "w")
		await ns.sleep(1000)
		newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;

		await ns.sleep(10)
	}

}