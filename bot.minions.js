/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog("sleep")
	ns.tail()
	var playerFaction = ns.getPlayer().factions
	// lets check if our saved variables are accurate before we read them.
	// This accounts for saved variables being imported from another game
	// and messing up this script.
	if (!playerFaction.includes("CyberSec")) {
		ns.write("/savedVar/csecDone.txt", "false", "w")
	}
	if (!playerFaction.includes("Sector-12")) {
		ns.write("/savedVar/stwelveDone.txt", "false", "w")
	}
	if (!playerFaction.includes("NiteSec")) {
		ns.write("/savedVar/niteSecDone.txt", "false", "w")
	}
	var stageOne = ns.read("/savedVar/stageOne.txt") === "true" ? true : false;
	var csecDone = ns.read("/savedVar/csecDone.txt") === "true" ? true : false;
	var stwelveDone = ns.read("/savedVar/stwelveDone.txt") === "true" ? true : false;
	var niteSecDone = ns.read("/savedVar/niteSecDone.txt") === "true" ? true : false;
	var invite = ns.singularity.checkFactionInvitations()

	ns.tprint(playerFaction)
	ns.print(playerFaction)

	if (stageOne == true) {
		// start doing algorithms course at rothman uni via a sebscript to save on 
		// continual RAM usage
		if (ns.getHackingLevel() < 100) {
			ns.run("/work/uni.rothman.hack.js")
			ns.tprint("Starting Algorithms course at Rothman-uni")
		}

		// wait until we are at hacking level 100 then start working, auto-cancels uni.
		while (ns.getHackingLevel() < 100) {
			await ns.sleep(1000)
		}
		// ns.write("/savedVar/newTarget.txt", "true", "w")
		// Work at Alpha Enterprises until CyberSec faction is available which will auto cancel this.
		ns.run("/work/company.alpha-ent.js")
		await ns.sleep(5000)

		// If we don't belong to CyberSec, then while we don't have an invitation wait,
		// when we do have an invitation run script to accept invite and work for them
		// these actions are RAM hogs so we have split off some actions until 
		// stage two when more home RAM is available.

		// ***** NB First time around in a new bitnode you won't have BruteSSH.exe
		// for some time after your hacking skill gets to the level you can backdoor
		// CSEC and trigger this next stage.  I keep asking myself, why hasn't CyberSec
		// kicked in yet.  Need to reach 800k and buy TOR/Brute before you get 
		// CashRoot Starter Kit from Sector-12 in first aug cycle.

		if (csecDone == false) {
			invite = ns.singularity.checkFactionInvitations()
			playerFaction = ns.getPlayer().factions

			if (!playerFaction.includes("CyberSec")) {
				if (!invite.includes("CyberSec")) {
					ns.tprint("Waiting for an invitation to CyberSec")
					while (!invite.includes("CyberSec")) {
						invite = ns.singularity.checkFactionInvitations()
						await ns.sleep(5000)
					}
					// run the script that accepts the invitation and starts work for this faction.

				}
			}
			ns.run("/work/faction.CyberSec.js")
			while (ns.singularity.getFactionRep("CyberSec") < 2000) {
				await ns.sleep(5000)
			}
			csecDone = true
			ns.write("/savedVar/csecDone.txt", "true", "w")
			await ns.sleep(5000)
		}
		ns.tprint("CyberSec faction is done, moving to next.")

		if (stwelveDone == false) {
			invite = ns.singularity.checkFactionInvitations()
			playerFaction = ns.getPlayer().factions

			if (!playerFaction.includes("Sector-12")) {
				if (!invite.includes("Sector-12")) {
					ns.tprint("Waiting for an invitation to Sector-12")
					while (!invite.includes("Sector-12")) {
						invite = ns.singularity.checkFactionInvitations()
						await ns.sleep(5000)
					}
					// run the script that accepts the invitation and starts work for this faction.

				}
			}
			ns.run("/work/faction.Sector-12.js")
			while (ns.singularity.getFactionRep("Sector-12") < 13000) {
				await ns.sleep(5000)
			}
			stwelveDone = true
			ns.write("/savedVar/stwelveDone.txt", "true", "w")
			await ns.sleep(5000)
		}
		ns.tprint("Sector-12 faction is done, moving to next.")


		if (niteSecDone == false) {
			invite = ns.singularity.checkFactionInvitations()
			playerFaction = ns.getPlayer().factions

			if (!playerFaction.includes("NiteSec")) {
				if (!invite.includes("NiteSec")) {
					ns.tprint("Waiting for an invitation to NiteSec")
					while (!invite.includes("NiteSec")) {
						invite = ns.singularity.checkFactionInvitations()
						await ns.sleep(5000)
					}
					// run the script that accepts the invitation and starts work for this faction.

				}
			}
			ns.run("/work/faction.NiteSec.js")
			while (ns.singularity.getFactionRep("NiteSec") < 20000) {
				await ns.sleep(5000)
			}
			niteSecDone = true
			ns.write("/savedVar/niteSecDone.txt", "true", "w")
			await ns.sleep(5000)
		}
		ns.tprint("NiteSec faction is done.")






	}

}