/** @param {NS} ns */
export async function main(ns) {


	ns.writePort(1, 4)
	ns.writePort(2, "Sell for Money")
	ns.writePort(3, "")
	let threshHashes = ns.peek(1);
	let hashType = ns.peek(2);
	let hashTarget = ns.peek(3);

	while (true) {
		threshHashes = ns.peek(1);
		hashType = ns.peek(2);
		hashTarget = ns.peek(3);
		// ns.tprint(threshHashes + hashType + hashTarget)
		if (ns.hacknet.numHashes() > threshHashes) {
			while (ns.hacknet.numHashes() > ns.hacknet.hashCost(hashType, 1)) {
				threshHashes = ns.peek(1);
				hashType = ns.peek(2);
				hashTarget = ns.peek(3);
				ns.hacknet.spendHashes(hashType, hashTarget)
				await ns.sleep(10)
			}
		}
		await ns.sleep(1000)
	}
}