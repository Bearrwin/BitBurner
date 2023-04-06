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
	var chongqingDone = false
	var theSyndicateDone = false
	var aevumDone = false
	var sectorTwelveDone = false
	var volhavenDone = false
	var daedalusDone = false
	var invites = ns.singularity.checkFactionInvitations()
	var currentWork = ns.singularity.getCurrentWork()
	var currentCity = ns.getPlayer().city
	ns.tprint(playerFaction)
	ns.print(playerFaction)

	await ns.sleep(15000)

	if (ns.getHackingLevel() < 100) {
		ns.run("/work/uni.rothman.hack.js")
		ns.tprint("Starting Algorithms course at Rothman-uni")
	}


	while (ns.getHackingLevel() < 100) {
		await ns.sleep(1000)
	}

	ns.run("/work/company.alpha-ent.js")
	await ns.sleep(1000)

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

			if (
				invite != "Sector-12" && 
				invite != "Aevum" && 
				// invite != "Volhaven" &&
				invite != "Chongqing" &&
				invite != "New Tokyo" &&
				invite != "Ishima"

			)
				ns.singularity.joinFaction(invite)
		}
		await ns.sleep(2000)

		if (
			currentCity != "Volhaven" &
			!playerFaction.includes("Volhaven")				
		) {
			ns.singularity.travelToCity("Volhaven")
		}


		if (
			playerFaction.includes("Volhaven") &&
			currentCity != "Sector-12"
		) {
			ns.singularity.travelToCity("Sector-12")
		}
		// -----------------------------



		// if (
		// 	currentCity != "New Tokyo" &
		// 	(!playerFaction.includes("New Tokyo") |
		// 	!playerFaction.includes("Tian Di Hui"))
		// ) {
		// 	ns.singularity.travelToCity("New Tokyo")
		// }

		// if (
		// 	!playerFaction.includes("Chongqing") &&
		// 	playerFaction.includes("New Tokyo") &&
		// 	playerFaction.includes("Tian Di Hui") &&
		// 	currentCity != "Chongqing"
		// ) {
		// 	ns.singularity.travelToCity("Chongqing")
		// }

		// if (
		// 	!playerFaction.includes("Ishima") &&
		// 	playerFaction.includes("Chongqing") &&
		// 	currentCity != "Ishima"
		// ) {
		// 	ns.singularity.travelToCity("Ishima")
		// }

		// if (
		// 	playerFaction.includes("Ishima") &&
		// 	currentCity != "Sector-12"
		// ) {
		// 	ns.singularity.travelToCity("Sector-12")
		// }
		// // -----------------------------


		if (
			playerFaction.includes("CyberSec") &&
			csecDone == false &&
			!Object.values(currentWork).includes("CyberSec")
		) {
			ns.singularity.workForFaction("CyberSec", "hacking", false)
		}
		await ns.sleep(3000)

		currentWork = ns.singularity.getCurrentWork()
		if (
			playerFaction.includes("Volhaven") &&
			volhavenDone == false &&
			!Object.values(currentWork).includes("Volhaven")
		) {
			csecDone = true
			ns.singularity.workForFaction("Volhaven", "Field", false)
		}


		// currentWork = ns.singularity.getCurrentWork()
		// if (
		// 	playerFaction.includes("Daedalus") &&
		// 	ns.singularity.getFactionRep("Volhaven") >= 15000 &&
		// 	daedalusDone == false &&
		// 	!Object.values(currentWork).includes("hacking")
		// ) {
		// 	volhavenDone = true
		// 	ns.singularity.workForFaction("Daedalus", "hacking", false)
		// }

		// if (ns.singularity.getFactionRep("Daedalus") >= 280000) {

		// 	ns.write("/savedVar/daedalusDone.txt", "true", "w")
		// }
		// await ns.sleep(60000)




	}





}