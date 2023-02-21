/** @param {NS} ns */
export async function main(ns) {

	ns.disableLog("getServerMoneyAvailable")
	ns.disableLog("sleep")
	// Start the budget manager bot
	ns.run("/bot/bot.cfo.js")
	ns.tprint("I made you the CFO now get to work!")

	await ns.sleep(60000)

	// Start timer script
	// ns.run("/bot/bot.timer.5mins.js")
	ns.tprint("* Fires starter pistol and shouts 'MINIONS GO!'")
	// Start bot to manage jobs and later sleeves
	ns.run("/bot/bot.minions.js")


	await ns.sleep(60000)



	// start script to determine best target to hack
	ns.tprint("Starting our Hacking target assessment.")
	ns.run("/bot/bot.hacktarget.js")
	await ns.sleep(1000)

	ns.tprint("Sleep now!")
	await ns.sleep(2000)
	//  ns.singularity.installAugmentations("TheFatController.js")








}