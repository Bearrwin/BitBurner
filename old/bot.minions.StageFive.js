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
			// && invite != "Chongqing" && invite != "New Tokyo" && invite != "Ishima"
			if (invite != "Sector-12" && invite != "Aevum" && invite != "Volhaven")
				ns.singularity.joinFaction(invite)
		}
		await ns.sleep(2000)

		if (
			currentCity != "New Tokyo" &
			(!playerFaction.includes("New Tokyo") |
			!playerFaction.includes("Tian Di Hui"))
		) {
			ns.singularity.travelToCity("New Tokyo")
		}

		if (
			!playerFaction.includes("Chongqing") &&
			playerFaction.includes("New Tokyo") &&
			playerFaction.includes("Tian Di Hui") &&
			currentCity != "Chongqing"
		) {
			ns.singularity.travelToCity("Chongqing")
		}

		if (
			!playerFaction.includes("Ishima") &&
			playerFaction.includes("Chongqing") &&
			currentCity != "Ishima"
		) {
			ns.singularity.travelToCity("Ishima")
		}

		if (
			playerFaction.includes("Ishima") &&
			currentCity != "Sector-12"
		) {
			ns.singularity.travelToCity("Sector-12")
		}
		// -----------------------------

		if (
			playerFaction.includes("CyberSec") &&
			csecDone == false &&
			!Object.values(currentWork).includes("CyberSec")
		) {
			ns.singularity.workForFaction("CyberSec", "Hacking", false)
		}
		await ns.sleep(3000)


		currentWork = ns.singularity.getCurrentWork()
		if (
			playerFaction.includes("Daedalus") &&
			daedalusDone == false &&
			!playerFaction.includes("The Syndicate") &&
			!Object.values(currentWork).includes("Daedalus")
		) {
			csecDone = true
			ns.singularity.workForFaction("Daedalus", "field", false)
		}


		currentWork = ns.singularity.getCurrentWork()
		if (
			playerFaction.includes("Daedalus") &&
			daedalusDone == false &&
			playerFaction.includes("The Syndicate") &&
			!Object.values(currentWork).includes("hacking")
		) {
			csecDone = true
			ns.singularity.workForFaction("Daedalus", "hacking", false)
		}


		currentWork = ns.singularity.getCurrentWork()
		if (
			playerFaction.includes("The Syndicate") &&
			ns.singularity.getFactionRep("Daedalus") >= 200000 &&
			!Object.values(currentWork).includes("The Syndicate")
		) {
			var daedalusDone = true
			ns.write("/savedVar/daedalusDone.txt", "true", "w")
			ns.singularity.workForFaction("The Syndicate", "hacking", false)
		}


		if (ns.singularity.getFactionRep("The Syndicate") >= 150000) {

			ns.write("/savedVar/theSyndicateDone.txt", "true", "w")
		}
		await ns.sleep(60000)




	}





}