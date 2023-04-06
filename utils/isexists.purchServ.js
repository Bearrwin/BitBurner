/** @param {NS} ns */
export async function main(ns) {
	ns.write("/savedVar/purchServCount.txt", "", "w")
	let purchasedServers = ns.getPurchasedServers()
	// ns.tprint(purchasedServers)
	let counter = 0

	for (let server of purchasedServers) {
		counter++

	}
	ns.write("/savedVar/purchServCount.txt", counter, "w")
	ns.clearPort(103)
	ns.writePort(103, counter)
}