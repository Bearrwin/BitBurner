/** @param {NS} ns */
export async function main(ns) {
	/**
	 * List of factions
	 * "Tian Di Hui"
	 * "New Tokyo"
	 * "Chongqing"
	 * "Ishima"
	 * "Aevum"
	 * "Sector-12"
	 * "Volhaven"
	 * 
	 * 
	 * "CyberSec"
	 * "NiteSec"
	 * "The Black Hand"
	 * "BitRunners"
	 * 
	 * 
	 */




	ns.disableLog("sleep")
	ns.tail()
	await ns.sleep(1000)
	ns.moveTail(50, 50)
	ns.resizeTail(500, 150)


	var playerFaction = ns.getPlayer().factions

	var csecDone = false
	var niteSecDone = false
	var tianDiHuiDone = false
	var blackhandDone = false
	var bitrunnersDone = false
	var invites = ns.singularity.checkFactionInvitations()
	var currentWork = ns.singularity.getCurrentWork()
	ns.tprint(playerFaction)
	ns.print(playerFaction)

	if (ns.getHackingLevel() < 60) {
		ns.run("/work/uni.rothman.hack.js")
		ns.tprint("Starting Algorithms course at Rothman-uni")
	}


	while (ns.getHackingLevel() < 60) {
		await ns.sleep(1000)
	}

	ns.run("/work/company.alpha-ent.js")
	await ns.sleep(1000)
	if (!playerFaction.includes("CyberSec")) {
		ns.write("/savedVar/newTarget.txt", "true", "w")
		await ns.sleep(60000)
	}

	while (true) {
		currentWork = ns.singularity.getCurrentWork()
		playerFaction = ns.getPlayer().factions
		invites = ns.singularity.checkFactionInvitations()
		await ns.sleep(1000)
		for (invite of invites) {
			// && !invite == "Chongqing" && !invite == "New Tokyo" && !invite == "Ishima"
			if (!invite == "Sector-12" && !invite == "Aevum" && !invite == "Volhaven")
				ns.singularity.joinFaction(invite)
		}
		if (!playerFaction.includes("Tian Di Hui") || !playerFaction.includes("New Tokyo")) {
			ns.singularity.travelToCity("New Tokyo")
		}
		if (!playerFaction.includes("Chongqing") && playerFaction.includes("New Tokyo") && (playerFaction.includes("Tian Di Hui"))) {
			ns.singularity.travelToCity("Chongqing")
		}
		if (!playerFaction.includes("Ishima") && playerFaction.includes("Chongqing")) {
			ns.singularity.travelToCity("Ishima")
		}
		if (playerFaction.includes("Ishima")) {
			ns.singularity.travelToCity("Sector-12")
		}

		// -----------------------------

		if (playerFaction.includes("CyberSec") && csecDone == false && !Object.values(currentWork).includes("CyberSec")) {
			ns.singularity.workForFaction("CyberSec", "Hacking")
		}
		await ns.sleep(1000)
		if (playerFaction.includes("NiteSec") && niteSecDone == false && !Object.values(currentWork).includes("NiteSec")) {
			csecDone = true
			ns.singularity.workForFaction("NiteSec", "Hacking")
		}
		await ns.sleep(1000)
		if (playerFaction.includes("Tian Di Hui") && tianDiHuiDone == false && ns.singularity.getFactionRep("NiteSec") > 45000 && !Object.values(currentWork).includes("Tian Di Hui")) {
			niteSecDone = true
			ns.write("/savedVar/niteSecDone.txt", "true", "w")
			ns.singularity.workForFaction("Tian Di Hui", "Hacking")
		}
		await ns.sleep(1000)
		if (playerFaction.includes("The Black Hand") && blackhandDone == false && ns.singularity.getFactionRep("Tian Di Hui") > 7000 && !Object.values(currentWork).includes("The Black Hand")) {
			tianDiHuiDone = true
			ns.write("/savedVar/tianDiHuiDone.txt", "true", "w")
			ns.singularity.workForFaction("The Black Hand", "Hacking")
		}
		await ns.sleep(1000)
		if (playerFaction.includes("BitRunners") && bitrunnersDone == false && ns.singularity.getFactionRep("The Black Hand") > 100000 && !Object.values(currentWork).includes("BitRunners")) {
			blackhandDone = true
			ns.write("/savedVar/blackhandDone.txt", "true", "w")
			ns.singularity.workForFaction("BitRunners", "Hacking")
		}

		if (ns.singularity.getFactionRep("BitRunners") >= 100000) {
			bitrunnersDone = true
			ns.write("/savedVar/bitrunnersDone.txt", "true", "w")
		}
		await ns.sleep(60000)




	}





}