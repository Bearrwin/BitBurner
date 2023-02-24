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
	let stageOnephaseTwoDone = false
	let stageOnephaseThreeDone = false
	let stageOnephaseFourDone = false
	let stageOnephaseFiveDone = false
	let stageOnephaseSixDone = false
	let currentTargetOne = "n00dles"
	let currentTargetTwo = "n00dles"
	let currentTargetThree = "n00dles"
	let currentTargetFour = "n00dles"
	let firstTarget = "n00dles"
	let secondTarget = "max-hardware"
	let thirdTarget = "phantasy"
	let fourthTarget = "omega-net"
	let fifthTarget = "the-hub"
	let sixthTarget = "syscore"
	let seventhTarget = "syscore"




	while (stageOne == true) {
		stageOne = ns.read("/savedVar/stageOne.txt") === "true" ? true : false;
		if (stageOne == true) {


			ns.run("/utils/isexists.purchServ.js")
			await ns.sleep(1000)
			servCount = ns.read("/savedVar/purchServCount.txt")
			if (servCount > 0) {

				if (ns.fileExists("BruteSSH.exe", "home") && (ns.getHackingLevel() > 150)) {
					if (stageOnephaseTwoDone == false) {
						currentTargetOne = secondTarget
						currentTargetTwo = secondTarget
						currentTargetThree = secondTarget
						currentTargetFour = secondTarget
						ns.print("First target set to " + secondTarget)
						ns.print("Second target set to " + secondTarget)
						ns.print("Third target set to " + secondTarget)
						ns.print("")
						stageOnephaseTwoDone = true
					}
				}
				if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(thirdTarget) && (ns.fileExists("FTPCrack.exe", "home") && ns.getServerMaxRam("S") > 128)) {
					if (stageOnephaseThreeDone == false) {
						currentTargetOne = thirdTarget
						currentTargetTwo = thirdTarget
						currentTargetThree = thirdTarget
						currentTargetFour = thirdTarget
						ns.print("First target set to " + thirdTarget)
						ns.print("Second target set to " + thirdTarget)
						ns.print("Third target set to " + thirdTarget)
						ns.print("")
						stageOnephaseThreeDone = true
					}
				}
				if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(fourthTarget) && ns.hasRootAccess(fourthTarget) && ns.getServerMaxRam("S") > 1024) {
					if (stageOnephaseFourDone == false) {
						currentTargetOne = thirdTarget
						currentTargetTwo = fourthTarget
						currentTargetThree = fourthTarget
						currentTargetFour = fourthTarget
						ns.print("First target set to " + thirdTarget)
						ns.print("Second target set to " + fourthTarget)
						ns.print("Third target set to " + fourthTarget)
						ns.print("")
						stageOnephaseFourDone = true
					}
				}
				if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(fifthTarget) && ns.hasRootAccess(fifthTarget) && ns.getServerMaxRam("S") > 2048) {
					if (stageOnephaseFiveDone == false) {
						currentTargetOne = thirdTarget
						currentTargetTwo = fourthTarget
						currentTargetThree = fifthTarget
						currentTargetFour = fifthTarget
						ns.print("First target set to " + thirdTarget)
						ns.print("Second target set to " + fourthTarget)
						ns.print("Third target set to " + fifthTarget)
						ns.print("")
						stageOnephaseFiveDone = true
					}
					newTarget = false
				}
				if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(sixthTarget) && ns.hasRootAccess(sixthTarget) && servCount >= 4) {
					if (stageOnephaseSixDone == false) {
						currentTargetOne = thirdTarget
						currentTargetTwo = fourthTarget
						currentTargetThree = fifthTarget
						currentTargetFour = sixthTarget
						ns.print("First target set to " + thirdTarget)
						ns.print("Second target set to " + fourthTarget)
						ns.print("Third target set to " + fifthTarget)
						ns.print("Fourth target set to " + sixthTarget)
						ns.print("")
						stageOnephaseFiveDone = true
					}
					newTarget = false
				}

			}




			//	run the worm to crawl the network and use any available crack 
			//	programs and nuke.exe on any server with enough ports open.
			ns.run("/worm/worm.nuke.js")
			ns.tprint("Running Nuke worm to crack all possible ports and nuke all possible servers.")
			ns.tprint("")
			await ns.sleep(30000)
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
				ns.run("/worm/worm.wgh.nocrack.loop.pconly.4.js", 1, currentTargetOne, currentTargetTwo, currentTargetThree, currentTargetFour)
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
	}










}