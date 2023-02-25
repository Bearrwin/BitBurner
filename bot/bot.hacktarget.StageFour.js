/** @param {NS} ns */
export async function main(ns) {


	ns.disableLog("sleep")
	ns.disableLog("getHackingLevel")
	ns.disableLog("getServerMoneyAvailable")
	ns.disableLog("getServerRequiredHackingLevel")
	ns.disableLog("getServerMaxRam")
	ns.tail()
	ns.moveTail(50, 50)
	ns.resizeTail(500, 150)


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
	let firstTarget = "n00dles"
	let secondTarget = "max-hardware"
	let thirdTarget = "phantasy"
	let fourthTarget = "omega-net"
	let fifthTarget = "the-hub"
	let sixthTarget = "catalyst"
	let seventhTarget = "alpha-ent"
	let eighthTarget = "syscore"
	let wThreads = 1
	let gThreads = 12
	let hThreads = 1
	let cycleDelay = 1000
	let targetChange = false
	let doubleBarrel = false
	let doubleBarrelTarget = "n00dles"
	var pidOne = 0
	var pidTwo = 0



	while (stageOne == true) {
		stageOne = ns.read("/savedVar/stageOne.txt") === "true" ? true : false;
		if (stageOne == true) {
			ns.run("/utils/isexists.purchServ.js")
			await ns.sleep(1000)
			servCount = ns.read("/savedVar/purchServCount.txt")
			if (servCount > 0) {
				var servRam = ns.getServerMaxRam("S")
			}


			// First config to run

			if (servCount <= 3 && phaseOneDone == false) {
				wThreads = 2
				gThreads = 10
				hThreads = 20
				cycleDelay = 100
				currentTarget = firstTarget
				targetChange = true
				phaseOneDone = true
			}
			await ns.sleep(200)
			if (servCount >= 5 && servRam >= 128 && phaseTwoDone == false) {
				wThreads = 5
				gThreads = 60
				hThreads = 5
				cycleDelay = 250
				currentTarget = secondTarget
				targetChange = true
				phaseTwoDone = true
			}
			await ns.sleep(200)
			if (servCount >= 5 && servRam >= 1024 && phaseThreeDone == false) {
				wThreads = 5
				gThreads = 60
				hThreads = 5
				cycleDelay = 250
				currentTarget = thirdTarget
				targetChange = true
				phaseThreeDone = true
			}
			await ns.sleep(200)
			if (servCount >= 5 && servRam >= 4096 && phaseFourDone == false) {
				wThreads = 4
				gThreads = 45
				hThreads = 4
				cycleDelay = 100
				currentTarget = thirdTarget
				targetChange = true
				phaseFourDone = true
			}
			await ns.sleep(200)
			if (servCount >= 5 && servRam >= 8192 && phaseFiveDone == false) {
				wThreads = 10
				gThreads = 120
				hThreads = 10
				cycleDelay = 1000
				currentTarget = fourthTarget
				targetChange = true
				phaseFiveDone = true
			}
			await ns.sleep(200)
			if (servCount >= 5 && servRam >= 8192 && phaseSixDone == false) {
				wThreads = 10
				gThreads = 120
				hThreads = 10
				cycleDelay = 1000
				currentTarget = fifthTarget
				doubleBarrel = true
				doubleBarrelTarget = sixthTarget
				targetChange = true
				phaseSixDone = true
			}
			await ns.sleep(200)
			if (servCount >= 10 && servRam >= 16384 && phaseSevenDone == false) {
				wThreads = 10
				gThreads = 120
				hThreads = 10
				cycleDelay = 500
				currentTarget = seventhTarget
				doubleBarrel = true
				doubleBarrelTarget = eighthTarget
				targetChange = true
				phaseSevenDone = true
			}




			if (targetChange == true) {


				ns.run("/serv/serv.propagate.all.js")
				await ns.sleep(5000)
				ns.tprint("PID to kill is " + pidOne)
				ns.kill(pidOne)
				var pidOne = ns.run("/init/init.batcher.pservPool.js", 1, currentTarget, wThreads, gThreads, hThreads, cycleDelay)
				await ns.sleep(500)
				ns.tprint("New PID is " + pidOne)
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
			await ns.sleep(30000)

			ns.run("/worm/worm.wgh.nocrack.loop.npconly.js", 1, firstTarget)
			ns.tprint("Running combo wgh worm on all NPC servers to target " + firstTarget)
			ns.tprint("")
			await ns.sleep(30000)

			while (newTarget == false) {

				newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
				await ns.sleep(6000)


			}
			ns.tprint("We have a new targeting request")
			ns.write("/savedVar/newTarget.txt", "false", "w")
			await ns.sleep(1000)
			newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
		}

	}
}












		// while (stageOne == true) {
		// 	stageOne = ns.read("/savedVar/stageOne.txt") === "true" ? true : false;
		// 	if (stageOne == true) {
		// 		ns.run("/utils/isexists.purchServ.js")
		// 		await ns.sleep(1000)
		// 		servCount = ns.read("/savedVar/purchServCount.txt")
		// 		servRam = ns.getServerMaxRam("S")
		// 		if (servCount >= 3 && servRam >= 128) {

		// 		}


		// 		if (wgh == true) {
		// 			if (servCount > 0) {

		// 				if (ns.fileExists("BruteSSH.exe", "home") && (ns.getHackingLevel() > 150)) {
		// 					if (stageOnephaseTwoDone == false) {
		// 						currentTargetOne = secondTarget
		// 						currentTargetTwo = secondTarget
		// 						currentTargetThree = secondTarget
		// 						currentTargetFour = secondTarget
		// 						ns.print("First target set to " + secondTarget)
		// 						ns.print("Second target set to " + secondTarget)
		// 						ns.print("Third target set to " + secondTarget)
		// 						ns.print("")
		// 						stageOnephaseTwoDone = true
		// 					}
		// 				}
		// 				if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(thirdTarget) && (ns.fileExists("FTPCrack.exe", "home") && ns.getServerMaxRam("S") > 128)) {
		// 					if (stageOnephaseThreeDone == false) {
		// 						currentTargetOne = thirdTarget
		// 						currentTargetTwo = thirdTarget
		// 						currentTargetThree = thirdTarget
		// 						currentTargetFour = thirdTarget
		// 						ns.print("First target set to " + thirdTarget)
		// 						ns.print("Second target set to " + thirdTarget)
		// 						ns.print("Third target set to " + thirdTarget)
		// 						ns.print("")
		// 						stageOnephaseThreeDone = true
		// 					}
		// 				}
		// 				if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(fourthTarget) && ns.hasRootAccess(fourthTarget) && ns.getServerMaxRam("S") > 1024) {
		// 					if (stageOnephaseFourDone == false) {
		// 						currentTargetOne = thirdTarget
		// 						currentTargetTwo = fourthTarget
		// 						currentTargetThree = fourthTarget
		// 						currentTargetFour = fourthTarget
		// 						ns.print("First target set to " + thirdTarget)
		// 						ns.print("Second target set to " + fourthTarget)
		// 						ns.print("Third target set to " + fourthTarget)
		// 						ns.print("")
		// 						stageOnephaseFourDone = true
		// 					}
		// 				}
		// 				if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(fifthTarget) && ns.hasRootAccess(fifthTarget) && ns.getServerMaxRam("S") > 2048) {
		// 					if (stageOnephaseFiveDone == false) {
		// 						currentTargetOne = thirdTarget
		// 						currentTargetTwo = fourthTarget
		// 						currentTargetThree = fifthTarget
		// 						currentTargetFour = fifthTarget
		// 						ns.print("First target set to " + thirdTarget)
		// 						ns.print("Second target set to " + fourthTarget)
		// 						ns.print("Third target set to " + fifthTarget)
		// 						ns.print("")
		// 						stageOnephaseFiveDone = true
		// 					}
		// 					newTarget = false
		// 				}
		// 				if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(sixthTarget) && ns.hasRootAccess(sixthTarget) && servCount >= 4) {
		// 					if (stageOnephaseSixDone == false) {
		// 						currentTargetOne = thirdTarget
		// 						currentTargetTwo = fourthTarget
		// 						currentTargetThree = fifthTarget
		// 						currentTargetFour = sixthTarget
		// 						ns.print("First target set to " + thirdTarget)
		// 						ns.print("Second target set to " + fourthTarget)
		// 						ns.print("Third target set to " + fifthTarget)
		// 						ns.print("Fourth target set to " + sixthTarget)
		// 						ns.print("")
		// 						stageOnephaseFiveDone = true
		// 					}
		// 					newTarget = false
		// 				}

		// 			}

		// 		}
		// 		if (wc == true) {

		// 		}

		// 		//	run the worm to crawl the network and use any available crack 
		// 		//	programs and nuke.exe on any server with enough ports open.
		// 		ns.run("/worm/worm.nuke.js")
		// 		ns.tprint("Running Nuke worm to crack all possible ports and nuke all possible servers.")
		// 		ns.tprint("")
		// 		await ns.sleep(30000)
		// 		// 	run the worm that kills all scripts on all servers except home.
		// 		ns.run("/worm/worm.killall.excepthome.js")
		// 		ns.tprint("Killing old scripts everywhere but home")
		// 		ns.tprint("")
		// 		await ns.sleep(5000)
		// 		// run the worm that copies wgh script to npc servers and runs them at our current target.
		// 		// we always want these servers hitting n00dles their firepower is too low to bother
		// 		// with anything else
		// 		ns.run("/worm/worm.wgh.nocrack.loop.npconly.js", 1, firstTarget)
		// 		ns.tprint("Running combo wgh worm on all NPC servers to target " + firstTarget)
		// 		ns.tprint("")
		// 		await ns.sleep(30000)
		// 		// run the worm that copies wgh script to npc servers and runs them at our current target.
		// 		// if (servCount > 0) {
		// 		// 	ns.run("/worm/worm.wgh.nocrack.loop.pconly.4.js", 1, currentTargetOne, currentTargetTwo, currentTargetThree, currentTargetFour)
		// 		// 	ns.tprint("Running combo wgh worm on all PC servers (if we have any)")
		// 		// 	ns.tprint("")
		// 		// }

		// 		while (newTarget == false) {

		// 			newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
		// 			await ns.sleep(6000)


		// 		}
		// 		ns.tprint("We have a new targeting request")
		// 		ns.write("/savedVar/newTarget.txt", "false", "w")
		// 		await ns.sleep(1000)
		// 		newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
		// 	}
		// }