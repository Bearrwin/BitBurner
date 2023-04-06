/** @param {NS} ns */
export async function main(ns) {
	let upgSize = ns.args[0];

	// run /serv/serv.upgmultiauto.js 128

	while (ns.getServerMaxRam("S-19") < upgSize) {
		ns.run("/serv/serv.purchasedupg.auto.js", 1, upgSize)
		await ns.sleep(10000)
	}


}