/** @param {NS} ns */
export async function main(ns) {

	ns.disableLog("getServerMoneyAvailable")
	ns.disableLog("sleep")

	// Start timer script
	ns.run("/bot/bot.timer.sixty.js")
	ns.tprint("* Fires starter pistol and shouts 'MINIONS GO!'")
	// Start bot to manage jobs and later sleeves
	ns.run("/bot/bot.minions.js")


	// Start the budget manager bot
	ns.run("/bot/bot.cfo.js")
	ns.tprint("I made you the CFO now get to work!")
	

	// start script to determine best target to hack
	ns.tprint("Starting our Hacking target assessment.")
	ns.run("/bot/bot.hacktarget.js")
	await ns.sleep(1000)



	




}