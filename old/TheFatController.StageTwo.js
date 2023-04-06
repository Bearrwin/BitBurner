/** @param {NS} ns */
export async function main(ns) {

	var stageTwoDone = false

	ns.write("/savedVar/stageTwoDone.txt", "false", "w")

	// ns.disableLog("sleep")
	// Start the budget manager bot
	ns.run("/bot/bot.cfo.StageTwo.js")
	ns.tprint("I made you the CFO now get to work!")

	await ns.sleep(15000)

	// Start timer script
	ns.run("/bot/bot.timer.5mins.js")
	ns.tprint("* Fires starter pistol and shouts 'MINIONS GO!'")
	// Start bot to manage jobs and later sleeves
	ns.run("/bot/bot.minions.StageTwo.js")

	await ns.sleep(15000)

	// start script to determine best target to hack
	ns.tprint("Starting our Hacking target assessment.")
	ns.run("/bot/bot.hacktarget.StageTwo.js")
	await ns.sleep(1000)



	while (stageTwoDone == false) {
		await ns.sleep(60000)
		stageTwoDone = ns.read("/savedVar/stageTwoDone.txt") === "true" ? true : false;

	}
	ns.tprint("Stage 2 marked complete! Are we ready to install augments?")

	await ns.sleep(2000)
	if (stageTwoDone == true) {
	ns.tprint("Sleep now!")

		ns.singularity.installAugmentations("TheFatController.StageThree.js")

	}







}