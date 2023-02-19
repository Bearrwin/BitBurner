/** @param {NS} ns */
export async function main(ns) {

	// this is a somewhat complicated script that is still at least in part a work in progress.
	// It has changed in design since my initial thoughts on how to manage this concept which is 
	// reflected in the fact that most targets are not in fact used.
	// Basic idea, check various factors and determine if the hacking target of our wgh worm
	// should change or not, and also if the "cycle" needs to be run again because we have gotten
	// more servers or upgraded their ram, in which case, kill all scripts except on home
	// and then re run the worm so that all available RAM across PC and NPC servers is used
	// running the combo wgh script. It is only applicable early in the bitnode cycle when 
	// when you have more resources their are far more effective systems but while resources are
	// low it is an easy low maintenance, automatable sytem.
	// the wgh variable will be used to skip most of what is currently here in later aug cycles
	// when you are far more capable. Once we change that variable the entire while loop which
	// everything is currently in will fail it's check and it will be simply bypassed.

	ns.disableLog("sleep")
	ns.disableLog("getHackingLevel")
	ns.disableLog("getServerMoneyAvailable")
	ns.disableLog("getServerRequiredHackingLevel")
	ns.disableLog("getServerMaxRam")
	// ns.tail()
	// n00dles is the first target to hit because it is the best growth rate until you outgrow it.

	let wgh = true
	let firstRun = true
	let newTarget = false
	let currentTarget = "n00dles"
	let secondTarget = "harakiri-sushi"
	let thirdTarget = "max-hardware"
	let fourthTarget = "phantasy"
	let fifthTarget = "silver-helix"
	let sixthTarget = "omega-net"
	let seventhTarget = "the-hub"


	while (wgh == true) {
		// Bypass the main cycle first time around to evaluate starting target and start the worm.
		if (firstRun == false) {

			// Evaluate various factors to determine what target to hit or when to restart worms.

			// This is fairly self-explanatory.
			if (!ns.fileExists("BruteSSH.exe", "home")) {
				ns.tprint("Waiting until you have BruteSSH.exe, then we will re-evaluate.")
				ns.tprint("")
				while (!ns.fileExists("BruteSSH.exe", "home")) {
					await ns.sleep(5000)
				}
				ns.tprint("You have BruteSSH.exe restarting worms.")
				ns.tprint("")
				newTarget = true
			}

			// This is fairly self-explanatory.
			if (newTarget == false) {
				if (!ns.fileExists("FTPCrack.exe", "home")) {
					ns.tprint("Waiting until you have FTPCrack.exe, then we will re-evaluate.")
					ns.tprint("")
					while (!ns.fileExists("FTPCrack.exe", "home")) {
						await ns.sleep(5000)
					}
					ns.tprint("You have FTPCrack.exe restarting worms.")
					ns.tprint("")
					newTarget = true
				}
			}
			// This is fairly self-explanatory if you have studied the bot.cfo, notably this
			// does not account for the naming system changing, when I develop cross script
			// variables I will make that change. For now if you use a different naming convention
			// you will need to modify this manually. Where it says "S-4"
			if (newTarget == false) {
				if (!ns.getPurchasedServers().includes("S-4")) {
					ns.tprint("Waiting until you have 6 x 64Gb servers, then we will re-evaluate.")
					ns.tprint("")
					while (!ns.getPurchasedServers().includes("S-4")) {
						await ns.sleep(5000)
					}
					ns.tprint("You have new purchased servers restarting worms.")
					ns.tprint("")
					newTarget = true
				}
			}
			// See above
			if (newTarget == false) {
				if (ns.getServerMaxRam("S-4") < 128) {
					ns.tprint("Waiting until you have upgraded your servers to 124Gb, then we will re-evaluate.")
					ns.tprint("")
					while (ns.getServerMaxRam("S-4") < 128) {
						await ns.sleep(5000)
					}
					ns.tprint("You have upgraded your purchased servers restarting worms.")
					ns.tprint("")
					newTarget = true
				}
			}
			// See above
			if (newTarget == false) {
				if (ns.getServerMaxRam("S-4") < 256) {
					ns.tprint("Waiting until you have upgraded your servers to 256Gb, then we will re-evaluate.")
					ns.tprint("")
					while (ns.getServerMaxRam("S-4") < 256) {
						await ns.sleep(5000)
					}
					ns.tprint("You have upgraded your purchased servers restarting worms.")
					ns.tprint("")
					newTarget = true
				}
			}
			// this checkes your hacking skill versus the amount you need for the fourth target
			// in this case "phantasy" and also that you don't own FTPCrack.exe if you do and
			// your hacking skill is high enough it will end the while loop which waits 5 secs
			// then checks again.  When you meet the conditions it changes the newTarget variable
			// so that you can bypass the rest of the conditions in this script and get to the
			// bottom that allows you restart the scripts using the worms, and also to 
			// crack any ports and nuke any servers that you can now do that aren't already done.
			if (newTarget == false) {
				if ((ns.getHackingLevel() < ns.getServerRequiredHackingLevel(fourthTarget)) || (!ns.fileExists("FTPCrack.exe", "home"))) {
					ns.tprint("Waiting until your hacking skill is high enough for " + fourthTarget + ns.getServerRequiredHackingLevel(fourthTarget) + " and you have FTPCrack.exe, then we will re-evaluate.")
					ns.tprint("")
					while ((ns.getHackingLevel() < ns.getServerRequiredHackingLevel(fourthTarget)) || (!ns.fileExists("FTPCrack.exe", "home"))) {
						await ns.sleep(5000)
					}
					currentTarget = fourthTarget
					ns.tprint("Your hacking skill is now high enough and we have cracked our target..  " + currentTarget)
					ns.tprint("")
					newTarget = true
				}
			}
// See above
			if (newTarget == false) {
				if (ns.getServerMaxRam("S-4") < 512) {
					ns.tprint("Waiting until you have upgraded your servers to 512Gb, then we will re-evaluate.")
					ns.tprint("")
					while (ns.getServerMaxRam("S-4") < 512) {
						await ns.sleep(5000)
					}
					ns.tprint("You have upgraded your purchased servers restarting worms.")
					ns.tprint("")
					newTarget = true
				}
			}
// See above
			if (newTarget == false) {
				if (ns.getServerMaxRam("S-4") < 1024) {
					ns.tprint("Waiting until you have upgraded your servers to 1Tb, then we will re-evaluate.")
					ns.tprint("")
					while (ns.getServerMaxRam("S-4") < 1024) {
						await ns.sleep(5000)
					}
					ns.tprint("You have upgraded your purchased servers restarting worms.")
					ns.tprint("")
					newTarget = true
				}
			}
// See above
			if (newTarget == false) {
				if (ns.getServerMaxRam("S-4") < 2048) {
					ns.tprint("Waiting until you have upgraded your servers to 2Tb, then we will re-evaluate.")
					ns.tprint("")
					while (ns.getServerMaxRam("S-4") < 2048) {
						await ns.sleep(5000)
					}
					ns.tprint("You have upgraded your purchased servers restarting worms.")
					ns.tprint("")
					newTarget = true
				}
			}

// See above
			if (newTarget == false) {
				if ((ns.getHackingLevel() < ns.getServerRequiredHackingLevel(fifthTarget)) || (!ns.fileExists("FTPCrack.exe", "home"))) {
					ns.tprint("Waiting until your hacking skill is high enough for " + fifthTarget + ns.getServerRequiredHackingLevel(fifthTarget) + " and you have FTPCrack.exe, then we will re-evaluate.")
					ns.tprint("")
					while ((ns.getHackingLevel() < ns.getServerRequiredHackingLevel(fifthTarget)) || (!ns.fileExists("FTPCrack.exe", "home"))) {
						await ns.sleep(5000)
					}
					currentTarget = fifthTarget
					ns.tprint("Your hacking skill is now high enough and we have cracked our target..  " + currentTarget)
					ns.tprint("")
					newTarget = true
				}
			}
// See above
			if (newTarget == false) {
				if ((ns.getHackingLevel() < ns.getServerRequiredHackingLevel(sixthTarget)) || (!ns.fileExists("FTPCrack.exe", "home"))) {
					ns.tprint("Waiting until your hacking skill is high enough for " + sixthTarget + ns.getServerRequiredHackingLevel(sixthTarget) + " and you have FTPCrack.exe, then we will re-evaluate.")
					ns.tprint("")
					while ((ns.getHackingLevel() < ns.getServerRequiredHackingLevel(sixthTarget)) || (!ns.fileExists("FTPCrack.exe", "home"))) {
						await ns.sleep(5000)
					}
					currentTarget = sixthTarget
					ns.tprint("Your hacking skill is now high enough and we have cracked our target..  " + currentTarget)
					ns.tprint("")
					newTarget = true
				}
			}
// See above
			if (newTarget == false) {
				if ((ns.getHackingLevel() < ns.getServerRequiredHackingLevel(seventhTarget)) || (!ns.fileExists("FTPCrack.exe", "home"))) {
					ns.tprint("Waiting until your hacking skill is high enough for " + seventhTarget + ns.getServerRequiredHackingLevel(seventhTarget) + " and you have FTPCrack.exe, then we will re-evaluate.")
					ns.tprint("")
					while ((ns.getHackingLevel() < ns.getServerRequiredHackingLevel(seventhTarget)) || (!ns.fileExists("FTPCrack.exe", "home"))) {
						await ns.sleep(5000)
					}
					currentTarget = seventhTarget
					ns.tprint("Your hacking skill is now high enough and we have cracked our target..  " + currentTarget)
					ns.tprint("")
					newTarget = true

				}
			}

			// this is here so you dont keep restarting the worms, at least until this 
			// script is more complete.
			if (newTarget == false) {
				await ns.sleep(6000)
				ns.tprint("No new targets exiting script")
				ns.kill()
			}
			if (newTarget == false) {

			}
			if (newTarget == false) {

			}
			if (newTarget == false) {

			}
		}

		// because of the conditionals used to make the above wait system work
		// we need to bypass all the waiting and make sure our first target to hit is the right
		// in later aug cycles you power up extremely fast compared to first few times, so 
		// you wont hit n00dles for very long at all, if at all.  This attempts to allow
		// for that situation.  It does the same basic checks as the cycle above, but skips 
		// all the waiting cycles to allow this system to get the required skills/cracks.
		
		if (firstRun == true) {
			// work out what our first target should be.
			ns.tprint("Evaluating the best target to start hacking.")
			ns.tprint("Our starting target is.. " + currentTarget)
			ns.tprint("")
			if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel(secondTarget)) {
				currentTarget = secondTarget
				ns.tprint("your hacking skill is high enough, choosing.. " + secondTarget)
				ns.tprint("")
			}

			if ((ns.getHackingLevel() > ns.getServerRequiredHackingLevel(thirdTarget)) && (ns.fileExists("BruteSSH.exe", "home"))) {
				currentTarget = thirdTarget
				ns.tprint("your hacking skill is high enough, choosing.. " + thirdTarget)
				ns.tprint("")
			}

			if ((ns.getHackingLevel() > ns.getServerRequiredHackingLevel(fourthTarget)) && (ns.fileExists("FTPCrack.exe", "home"))) {
				currentTarget = fourthTarget
				ns.tprint("your hacking skill is high enough, choosing.. " + fourthTarget)
				ns.tprint("")
			}

			if ((ns.getHackingLevel() > ns.getServerRequiredHackingLevel(fifthTarget)) && (ns.fileExists("FTPCrack.exe", "home"))) {
				currentTarget = fifthTarget
				ns.tprint("your hacking skill is high enough, choosing.. " + fifthTarget)
				ns.tprint("")
			}

			if ((ns.getHackingLevel() > ns.getServerRequiredHackingLevel(sixthTarget)) && (ns.fileExists("FTPCrack.exe", "home"))) {
				currentTarget = sixthTarget
				ns.tprint("your hacking skill is high enough, choosing.. " + sixthTarget)
				ns.tprint("")
			}

			if ((ns.getHackingLevel() > ns.getServerRequiredHackingLevel(seventhTarget)) && (ns.fileExists("FTPCrack.exe", "home"))) {
				currentTarget = seventhTarget
				ns.tprint("your hacking skill is high enough, choosing.. " + seventhTarget)
				ns.tprint("")
			}

			firstRun = false
			ns.tprint("Completed our initial assessment")
			ns.tprint("")

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
		ns.run("/worm/worm.wgh.nocrack.loop.npconly.js", 1, currentTarget)
		ns.tprint("Running combo wgh worm on all NPC servers to target " + currentTarget)
		ns.tprint("")
		await ns.sleep(30000)
		// run the worm that copies wgh script to npc servers and runs them at our current target.
		ns.run("/worm/worm.wgh.nocrack.loop.pconly.js", 1, currentTarget)
		ns.tprint("Running combo wgh worm on all PC servers (if we have any) to target " + currentTarget)
		ns.tprint("")
		newTarget = false


	}










}