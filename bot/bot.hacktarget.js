/** @param {NS} ns */
export async function main(ns) {


	// ns.disableLog("sleep")
	// ns.disableLog("getHackingLevel")
	// ns.disableLog("getServerMoneyAvailable")
	// ns.disableLog("getServerRequiredHackingLevel")
	// ns.disableLog("getServerMaxRam")
	ns.tail()
	// n00dles is the first target to hit because it is the best growth rate until you outgrow it.


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
	var currentTarget = "n00dles"
	let currentTargetOne = "n00dles"
	let currentTargetTwo = "n00dles"
	let currentTargetThree = "n00dles"
	let firstTarget = "n00dles"
	let secondTarget = "max-hardware"
	let thirdTarget = "phantasy"
	let fourthTarget = "silver-helix"
	let fifthTarget = "omega-net"
	let wgh = true
	let wThreads = 1
	let gThreads = 12
	let hThreads = 1
	let cycleDelay = 1000
	let targetChange = false
	let doubleBarrel = false
	let doubleBarrelTarget = "n00dles"
	var pidOne = 0
	var pidTwo = 0

	if (servCount >= 3) {
		if (ns.getServerMaxRam("S") >= 64) {
			wgh = false
		}
	}

	while (wgh == true) {
		if (servCount >= 3) {
			if (ns.getServerMaxRam("S") >= 64) {
				wgh = false
			}
		}
		ns.run("/utils/isexists.purchServ.js")
		await ns.sleep(1000)
		servCount = ns.read("/savedVar/purchServCount.txt")


		//	run the worm to crawl the network and use any available crack 
		//	programs and nuke.exe on any server with enough ports open.
		ns.run("/worm/worm.nuke.js")
		ns.tprint("Running Nuke worm to crack all possible ports and nuke all possible servers.")
		ns.tprint("")
		await ns.sleep(15000)
		// 	run the worm that kills all scripts on all servers except home.
		ns.run("/worm/worm.killall.excepthome.js")
		ns.tprint("Killing old scripts everywhere but home")
		ns.tprint("")
		await ns.sleep(5000)
		// run the worm that copies wgh script to npc servers and runs them at our current target.
		// we always want these servers hitting n00dles their firepower is too low to bother
		// with anything else
		ns.run("/worm/worm.wgh.nocrack.loop.npconly.js", 1, firstTarget)
		ns.tprint("Running combo wgh worm on all NPC servers to target " + firstTarget)
		ns.tprint("")
		await ns.sleep(30000)
		// run the worm that copies wgh script to npc servers and runs them at our current target.
		if (servCount > 0) {
			ns.run("/worm/worm.wgh.nocrack.loop.pconly.js", 1, firstTarget)
			ns.tprint("Running combo wgh worm on all PC servers (if we have any)")
			ns.tprint("")
		}

		while (newTarget == false) {

			newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
			await ns.sleep(6000)


		}
		ns.tprint("We have a new targeting request")
		ns.write("/savedVar/newTarget.txt", "false", "w")
		await ns.sleep(1000)
		newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;

	}
	ns.run("/worm/worm.killall.excepthome.js")
	ns.tprint("Killing old scripts everywhere but home")
	ns.tprint("")
	await ns.sleep(5000)


	while (true) {
		ns.run("/utils/isexists.purchServ.js")
		await ns.sleep(1000)
		servCount = ns.read("/savedVar/purchServCount.txt")
		var servRam = ns.getServerMaxRam("S")
		if (servCount >= 3 && servRam >= 64 && phaseTwoDone == false) {
			wThreads = 1
			gThreads = 1
			hThreads = 5
			cycleDelay = 500
			currentTarget = firstTarget
			targetChange = true
			phaseTwoDone = true
		}
		if (servCount >= 3 && servRam >= 128 && phaseTwoDone == false) {
			wThreads = 1
			gThreads = 1
			hThreads = 10
			cycleDelay = 250
			currentTarget = firstTarget
			targetChange = true
			phaseTwoDone = true
		}

		if (servCount >= 3 && servRam >= 256 && phaseTwoDone == false) {
			wThreads = 1
			gThreads = 1
			hThreads = 10
			cycleDelay = 100
			currentTarget = firstTarget
			targetChange = true
			phaseTwoDone = true
		}
		if (servCount >= 3 && servRam >= 512 && phaseThreeDone == false) {
			wThreads = 1
			gThreads = 12
			hThreads = 1
			cycleDelay = 250
			currentTarget = secondTarget
			targetChange = true
			phaseThreeDone = true
		}
		if (servCount >= 3 && servRam >= 1024 && phaseFourDone == false) {
			wThreads = 2
			gThreads = 24
			hThreads = 2
			cycleDelay = 250
			currentTarget = thirdTarget
			targetChange = true
			phaseFourDone = true
		}
		if (servCount >= 3 && servRam >= 2048 && phaseFiveDone == false) {
			wThreads = 2
			gThreads = 24
			hThreads = 2
			cycleDelay = 100
			currentTarget = thirdTarget
			targetChange = true
			phaseFiveDone = true
		}
		if (servCount >= 3 && servRam >= 4096 && phaseSixDone == false) {
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

		ns.run("/worm/worm.nuke.js")
		ns.tprint("Running Nuke worm to crack all possible ports and nuke all possible servers.")
		ns.tprint("")
		await ns.sleep(1000)

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
		ns.tprint("We have a new targeting request")
		ns.write("/savedVar/newTarget.txt", "false", "w")
		await ns.sleep(1000)
		newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;

		await ns.sleep(10)
	}

}