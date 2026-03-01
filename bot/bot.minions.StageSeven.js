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




	// ns.disableLog("sleep")
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
	var chongqingDone = false
	var tetradsDone = false
	var daedalusDone = false
	var invites = ns.singularity.checkFactionInvitations()
	var currentWork = ns.singularity.getCurrentWork()
	var currentCity = ns.getPlayer().city
	ns.tprint(playerFaction)
	ns.print(playerFaction)
	ns.write("/savedVar/daedalusDone.txt", "false", "w")

	if (ns.getHackingLevel() < 60) {
		ns.run("/work/uni.rothman.hack.js")
		ns.tprint("Starting Algorithms course at Rothman-uni")
	}

	while (ns.getHackingLevel() < 60) {
		await ns.sleep(1000)
	}

	ns.run("/work/company.alpha-ent.js")
	await ns.sleep(2000)
	if (!playerFaction.includes("CyberSec")) {
		ns.write("/savedVar/newTarget.txt", "true", "w")
		await ns.sleep(30000)
	}

	while (true) {
		currentWork = ns.singularity.getCurrentWork()
		playerFaction = ns.getPlayer().factions
		invites = ns.singularity.checkFactionInvitations()
		currentCity = ns.getPlayer().city
		await ns.sleep(1000)
		for (let invite of invites) {
			ns.tprint("your invite is " + invite)
			// && invite != "Chongqing" && invite != "New Tokyo" && invite != "Ishima"
			if (invite != "Sector-12" && invite != "Aevum" && invite != "Volhaven")
				ns.singularity.joinFaction(invite)
		}
		await ns.sleep(1000)

		// -----------------------------

		if (playerFaction.includes("CyberSec") && !Object.values(currentWork).includes("CyberSec") && csecDone == false) {
			ns.singularity.workForFaction("CyberSec", "Hacking")
		}
		await ns.sleep(1000)
		if (playerFaction.includes("Daedalus") && !Object.values(currentWork).includes("Daedalus")) {
			csecDone = true
			ns.singularity.workForFaction("Daedalus", "hacking")
		}
		await ns.sleep(1000)

		if (ns.singularity.getFactionRep("Daedalus") > 280000) {
			daedalusDone = true
			ns.write("/savedVar/daedalusDone.txt", "true", "w")
		}
		await ns.sleep(30000)




	}





}

// if (!playerFaction.includes("New Tokyo") && currentCity != "New Tokyo") {
// 	ns.singularity.travelToCity("New Tokyo")
// }
// if (!playerFaction.includes("Chongqing") && playerFaction.includes("New Tokyo") && currentCity != "Chongqing") {
// 	ns.singularity.travelToCity("Chongqing")
// }
// if (!playerFaction.includes("Ishima") && playerFaction.includes("Chongqing") && currentCity != "Ishima") {
// 	ns.singularity.travelToCity("Ishima")
// }
// if (playerFaction.includes("Ishima") && currentCity != "Sector-12") {
// 	ns.singularity.travelToCity("Sector-12")
// }