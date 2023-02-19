/** @param {NS} ns */
export async function main(ns) {
	//                       [host][target][delay][hackdelay][wthread][gthread][hthread][script cycle limit][Break server first?]  
	// eg run init.batcher.js home n00dles 1000 300000 12 120 15 900 true/false

	var target = ns.args[0];
	var dest = ns.args[1];
	var delayms = ns.args[2];
	var hackdelayms = ns.args[3];
	var weakThreads = ns.args[4];
	var growThreads = ns.args[5];
	var hackThreads = ns.args[6];
	var counterMax = ns.args[7];
	var needSecBreaking = ns.args[8];
	var secBreakDelay = ns.getWeakenTime(dest)
	var growdelay = ns.getWeakenTime(dest) - ns.getGrowTime(dest)


	if (needSecBreaking == true) {

		ns.exec("/ammo/cw1.single.js", (target), (weakThreads) * 100,(dest), 1)
		await ns.sleep(30000)
		ns.exec("/ammo/cw1.single.js", (target), (weakThreads) * 100, (dest), 2)
		await ns.sleep(growdelay + 15000)
		ns.exec("/ammo/cg1.single.js", (target), (growThreads) * 20, (dest), 1)
		await ns.sleep(secBreakDelay + 30000)
	}

	ns.exec("/bot/bot.weak.js", (target), 1, (weakThreads), (target), (dest), (delayms), (counterMax), 1)

	ns.exec("/bot/bot.grow.js", (target), 1, (growThreads), (target), (dest), (delayms), (counterMax), 1)

	await ns.sleep((hackdelayms))

	ns.exec("/bot/bot.hack.js", (target), 1, (hackThreads), (target), (dest), (delayms), (counterMax), 1)

}