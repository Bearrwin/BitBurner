/** @param {NS} ns */
export async function main(ns) {

	ns.disableLog("getServerMoneyAvailable")
	ns.disableLog("sleep")
	ns.tail()
	ns.moveTail(60, 60)
	ns.resizeTail(500, 150)

	// Start the budget manager bot
	ns.run("/bot/bot.cfo.StageThree.js")
	ns.tprint("I made you the CFO now get to work!")

	await ns.sleep(1000)

	// Start timer script
	ns.run("/bot/bot.timer.5mins.js")
	ns.tprint("* Fires starter pistol and shouts 'MINIONS GO!'")
	// Start bot to manage jobs and later sleeves
	ns.run("/bot/bot.minions.StageThree.js")


	await ns.sleep(5000)



	// start script to determine best target to hack
	ns.tprint("Starting our Hacking target assessment.")
	ns.run("/bot/bot.hacktarget.StageThree.js")
	await ns.sleep(1000)

	var stageThreeDone = false

	while (stageThreeDone == false) {
		stageThreeDone = ns.read("/savedVar/stageThreeDone.txt") === "true" ? true : false;
		await ns.sleep(60000)

	}
	
	// ns.tprint("Stage 3 marked complete! Are we ready to install augments?")
	// await ns.sleep(2000)
	// if (stageThreeDone == true) {
	// 	ns.tprint("Sleep now!")
	// 	ns.singularity.installAugmentations("TheFatController.StageFour.js")

	// }









}