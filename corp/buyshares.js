/** @param {NS} ns */
export async function main(ns) {

	// run buyshares.js 1000 100

	ns.tail()

	let shareQty = ns.args[0];
	let buyDelay = ns.args[1];

	while (true) {
		try {
			ns.corporation.buyBackShares(shareQty)
		} catch { }
		await ns.sleep(buyDelay)
	}


}