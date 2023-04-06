/** @param {NS} ns */
export async function main(ns) {

	var stageOneDone = false

	ns.write("/savedVar/stageOneDone.txt", "false", "w")

	// ns.disableLog("sleep")

	// initialize ports

	ns.run("initports.js")
	ns.tprint("Initialising ports")

	await ns.sleep(2000)

	var number_of_nodes = ns.hacknet.numNodes()
	if(number_of_nodes > 0){
	// Start selling hashes from hacknet servers
	ns.run("bot.hacknet.cashonly.js")
	} else {
		// setup script to buy stage 1 hacknet server network to help build server farm, for after first augment installation

	}

	// Start the budget manager bot
	ns.run("/bot/bot.cfo.js")
	ns.tprint("I made you the CFO now get to work!")

	await ns.sleep(15000)

	// Start timer script
	ns.run("/bot/bot.timer.5mins.js")
	ns.tprint("* Fires starter pistol and shouts 'MINIONS GO!'")
	// Start bot to manage jobs and later sleeves
	ns.run("/bot/bot.minions.js")

	await ns.sleep(15000)

	// start script to determine best target to hack
	ns.tprint("Starting our Hacking target assessment.")
	ns.run("/bot/bot.hacktarget.js")
	await ns.sleep(1000)



	while (stageOneDone == false) {
		stageOneDone = ns.read("/savedVar/stageOneDone.txt") === "true" ? true : false;
		await ns.sleep(60000)

	}
	ns.tprint("Sleep now!")
	await ns.sleep(2000)
	if (stageOneDone == true) {

		// ns.singularity.installAugmentations("TheFatController.StageTwo.js")

	}







}