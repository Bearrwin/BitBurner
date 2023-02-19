/** @param {NS} ns */
export async function main(ns) {
	let playerFaction = ns.getPlayer().factions


	// start doing algorithms course at rothman uni
	if (ns.getHackingLevel() < 100) {
		ns.run("/work/uni.rothman.hack.js")
		ns.tprint("Starting Algorithms course at Rothman-uni")
	}

	// wait until we are at hacking level 100 then start working, auto-cancels uni.
	while (ns.getHackingLevel() < 100) {
		await ns.sleep(1000)
	}

	// Work at Alpha Enterprises until CyberSec faction is available which will auto cancel this.
	ns.run("/work/company.alpha-ent.js")
	await ns.sleep(5000)

	// If we don't belong to CyberSec, then while we don't have an invitation wait,
	// when we do have an invitation run script to accept invite and work for them
	// these actions are RAM hogs so we have split off some actions until 
	// Source file 4.3 is available.
	if (!playerFaction.includes("CyberSec")) {
		if (!ns.singularity.checkFactionInvitations("CyberSec")) {
			ns.tprint("Waiting for an invitation to CyberSec")
			while (!ns.singularity.checkFactionInvitations("CyberSec")) {
				await ns.sleep(5000)
			}
			// run the script that accepts the inviation and starts work for this faction.
			ns.run("/work/faction.CyberSec.js")
		}
	}

	// this if statement is to catch this script being run after faction joined but before
	// sufficient faction rep earned. Previous run statement wont take effect if you 
	// have joined the faction already
	if (ns.singularity.getFactionRep("CyberSec") < 2000) {
		ns.run("/work/faction.CyberSec.js")
		while (ns.singularity.getFactionRep("CyberSec") < 2000) {
			await ns.sleep(5000)
		}
	}
	await ns.sleep(5000)


	if (!playerFaction.includes("Sector-12")) {
		if (!ns.singularity.checkFactionInvitations("Sector-12")) {
			ns.tprint("Waiting for an invitation to Sector-12")
			while (!ns.singularity.checkFactionInvitations("Sector-12")) {
				await ns.sleep(5000)
			}
		}
	}
	if (ns.singularity.getFactionRep("Sector-12") < 12500) {
		ns.run("/work/faction.Sector-12.js")
		while (ns.singularity.getFactionRep("Sector-12") < 12500) {
			await ns.sleep(5000)
		}
	}
	await ns.sleep(5000)


	if (!playerFaction.includes("NiteSec")) {
		if (!ns.singularity.checkFactionInvitations("NiteSec")) {
			ns.tprint("Waiting for an invitation to NiteSec")
			while (!ns.singularity.checkFactionInvitations("NiteSec")) {
				await ns.sleep(5000)
			}
		}
	}
	if (ns.singularity.getFactionRep("NiteSec") < 20000) {
		ns.run("/work/faction.NiteSec.js")
		while (ns.singularity.getFactionRep("NiteSec") < 20000) {
			await ns.sleep(5000)
		}
	}
	await ns.sleep(5000)







}