/** @param {NS} ns */
export async function main(ns) {
	// [hacktarget][cycletime][hakcpercent]
	// 	run /init/init.batcher.pservPool.autocalc.js n00dles 25 10
	ns.disableLog("getServerMaxRam")
	ns.disableLog("getServerUsedRam")
	ns.disableLog("sleep")

	ns.tail()
	await ns.sleep(1000)
	ns.moveTail(50, 50)
	ns.resizeTail(500, 150)

	var baseTarget = ns.args[0];
	var delayms = ns.args[1];
	var hackperc = ns.args[2];

	var person = ns.getPlayer()

	ns.clearPort(1104)
	ns.writePort(1104, delayms)
	ns.clearPort(1105)
	ns.writePort(1105, hackperc)

	var hTarget = ns.getServer(baseTarget)
	hTarget.moneyAvailable = hTarget.moneyMax
	hTarget.hackDifficulty = hTarget.minDifficulty
	var hedPerc = ns.formulas.hacking.hackPercent(hTarget, person)
	var hThreadsDec = (hackperc / 100) / hedPerc

	var hedTarget = hTarget
	hedTarget.moneyAvailable = hedTarget.moneyMax * (1 - ((hackperc *2) / 100))

	var hThreads = Math.ceil(hThreadsDec)
	var gThreads = Math.ceil(ns.formulas.hacking.growThreads(hedTarget, person, hedTarget.moneyMax))
	var wThreads = Math.ceil(((0.004 * gThreads) / 0.05)* 2) 

	ns.tprint("Hack " + hThreads)
	ns.tprint("Grow " + gThreads)
	ns.tprint("Weaken " + wThreads)



	


}