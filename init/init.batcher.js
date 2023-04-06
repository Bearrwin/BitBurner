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

	// This script is spawned from the "/init/init.batcher.ishackable.js" script for every
	// server in your refined list of targets.
	// the first section of this code has to do with "prepping" a server, ie reduce security
	// to minimum and available money to maximum using a high thread count brute force
	// weaken/grow/weaken cycle, grow increases security and bit grow increases it a lot so
	// we fire off a second weakend timed to land after the grow which lands after the first weaken.
	// when sufficiently overpowered you could probably get away with doing grow/weaken, skipping
	// first grow due to brute force.

	if (needSecBreaking == true) {

		ns.exec("/ammo/cw1.single.js", (target), (weakThreads) * 100,(dest), 1)
		await ns.sleep(30000)
		ns.exec("/ammo/cw1.single.js", (target), (weakThreads) * 100, (dest), 2)
		await ns.sleep(growdelay + 15000)
		ns.exec("/ammo/cg1.single.js", (target), (growThreads) * 20, (dest), 1)
		await ns.sleep(secBreakDelay + 30000)
	}

	// this then spawns the individual bots the 3 prongs of your attack, weaken, grow, and hack
	// this is the woodchipper system, rather than trying to time the landing of the 
	// wgh cycle, it works on the premise that you send out a constant stream of them all landing
	// at approx the same time, for eg, every second one batch is sent, weaken might take 10 mins
	// grow 8 mins and hack 2 mins, but after enough time, there is one of each landing every second
	// despite the difference in travel times, below you will see sleep(hackdelay) so you can get the
	// stream of slower threads in the air before you start your hacks which are much faster
	// and can drain the money and max security before your w and g streams arrive, which is 
	// not the best way to do it.  the rest of it is just understanding assigning and passing on
	// variables. and using ns.exec to spawn scripts and its associated foibles.

	ns.exec("/bot/bot.weak.js", (target), 1, (weakThreads), (target), (dest), (delayms), (counterMax), 1)

	ns.exec("/bot/bot.grow.js", (target), 1, (growThreads), (target), (dest), (delayms), (counterMax), 1)

	await ns.sleep((hackdelayms))

	ns.exec("/bot/bot.hack.js", (target), 1, (hackThreads), (target), (dest), (delayms), (counterMax), 1)

}