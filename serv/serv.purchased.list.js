/** @param {NS} ns */
export async function main(ns) {

	let purchasedServers = ns.getPurchasedServers()

	for (let pServer of purchasedServers) {
		let totalRam = ns.getServerMaxRam(pServer)
		let freeRam = Math.floor(ns.getServerMaxRam(pServer) - ns.getServerUsedRam(pServer))

		ns.tprint(pServer + " has " + freeRam + " / " + totalRam + " Gb available.")
	}
	await ns.sleep(1000)


}