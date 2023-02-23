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
	let stageOnephaseTwoDone = false
	let stageOnephaseThreeDone = false
	let stageOnephaseFourDone = false
	let stageOnephaseFiveDone = false
	let currentTargetOne = "n00dles"
	let currentTargetTwo = "n00dles"
	let currentTargetThree = "n00dles"
	let firstTarget = "n00dles"
	let secondTarget = "max-hardware"
	let thirdTarget = "phantasy"
	let fourthTarget = "omega-net"
	let fifthTarget = "the-hub"


	while (stageOne == true) {
		stageOne = ns.read("/savedVar/stageOne.txt") === "true" ? true : false;
		if (ns.fileExists("BruteSSH.exe", "home") && ns.getHackingLevel() > 150) {
			if (stageOnephaseTwoDone = false) {
				currentTargetOne = secondTarget
				currentTargetTwo = secondTarget
				currentTargetThree = secondTarget
				stageOnephaseTwoDone = true
			}
		}
		if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(thirdTarget) && (ns.fileExists("FTPCrack.exe", "home"))) {
			if (stageOnephaseThreeDone = false) {
				currentTargetOne = thirdTarget
				currentTargetTwo = thirdTarget
				currentTargetThree = thirdTarget
				stageOnephaseThreeDone = true
			}
		}
		if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(fourthTarget) && ns.hasRootAccess(fourthTarget)) {
			if (stageOnephaseFourDone = false) {
				currentTargetOne = thirdTarget
				currentTargetTwo = fourthTarget
				currentTargetThree = fourthTarget
				stageOnephaseFourDone = true
			}
		}
		if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(fifthTarget) && ns.hasRootAccess(fifthTarget)) {
			if (stageOnephaseFiveDone = false) {
				currentTargetOne = thirdTarget
				currentTargetTwo = fourthTarget
				currentTargetThree = fifthTarget
				stageOnephaseFiveDone = true
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
		ns.run("/worm/worm.wgh.nocrack.loop.pconly.js", 1, currentTarget)
		ns.tprint("Running combo wgh worm on all PC servers (if we have any)")
		ns.tprint("")

		ns.print("var is " + newTarget)
		while (newTarget == false) {
			ns.print("entering loop")
			newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
			await ns.sleep(6000)


		}
		ns.tprint("We have a new targeting request")
		ns.write("/savedVar/newTarget.txt", "false", "w")
		await ns.sleep(1000)
		newTarget = ns.read("/savedVar/newTarget.txt") === "true" ? true : false;
	}










}