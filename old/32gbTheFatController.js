/** @param {NS} ns */
export async function main(ns) {

	var thirtyTwogbDone = false

	ns.write("/savedVar/stageOneDone.txt", "false", "w")

	// ns.disableLog("sleep")
	// Start the budget manager bot
	ns.run("/bot/bot.32gbcfo.js")
	ns.tprint("I made you the CFO now get to work!")

	await ns.sleep(15000)

	// Start timer script
	ns.run("/bot/bot.timer.5mins.js")
	ns.tprint("* Fires starter pistol and shouts 'MINIONS GO!'")
	// Start bot to manage jobs and later sleeves
	ns.run("/bot/bot.32gbminions.js")

	await ns.sleep(15000)

	// start script to determine best target to hack
	ns.tprint("Starting our Hacking target assessment.")
	ns.run("/bot/bot.32gbhacktarget.js")
	await ns.sleep(1000)



	while (thirtyTwogbDone == false) {
		thirtyTwogbDone = ns.read("/savedVar/thirtyTwogbDone.txt") === "true" ? true : false;
		await ns.sleep(60000)

	}
	ns.tprint("Sleep now!")
	await ns.sleep(2000)
	if (thirtyTwogbDone == true) {

		ns.run("TheFatController.js")
		ns.exit()

	}







}