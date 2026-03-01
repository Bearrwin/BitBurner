/** @param {NS} ns */
export async function main(ns) {
	// create a list of purchased servers and store them in the variable we called purchasedServers
	let purchasedServers = ns.getPurchasedServers()
	
	// use our list from above variable to step through each entry and calculate free and
	// used ram and then report the server name and those figures in a list to the terminal.
	for (let pServer of purchasedServers) {
		let totalRam = ns.getServerMaxRam(pServer)
		let freeRam = Math.floor(ns.getServerMaxRam(pServer) - ns.getServerUsedRam(pServer))

		ns.tprint(pServer + " has " + freeRam + " / " + totalRam + " Gb available.")
	}
	await ns.sleep(1000)


}