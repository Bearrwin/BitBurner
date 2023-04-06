/** @param {NS} ns */
export async function main(ns) {

	// run nfgauto.js "BitRunners"

	ns.tail()

	let factionToBuyFrom = ns.args[0];

	while (true) {

		ns.run("/utils/faction.buy.augment.js", 1, factionToBuyFrom, "NeuroFlux Governor")
		await ns.sleep(10)
	}

}