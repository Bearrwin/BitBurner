/** @param {NS} ns */
export async function main(ns) {


	// ns.writePort(2001, 4)
	// ns.writePort(2002, "Sell for Money")
	// ns.writePort(2003, "")
	let threshHashes = ns.peek(2001);
	let hashType = ns.peek(2002);
	let hashTarget = ns.peek(2003);

	while (true) {
		threshHashes = ns.peek(2001);
		hashType = ns.peek(2002);
		hashTarget = ns.peek(2003);
		// ns.tprint(threshHashes + hashType + hashTarget)
		if (ns.hacknet.numHashes() > threshHashes) {
			while (ns.hacknet.numHashes() > ns.hacknet.hashCost(hashType, 1)) {
				threshHashes = ns.peek(2001);
				hashType = ns.peek(2002);
				hashTarget = ns.peek(2003);
				ns.hacknet.spendHashes(hashType, hashTarget)
				await ns.sleep(10)
			}
		}
		await ns.sleep(1000)
	}
}