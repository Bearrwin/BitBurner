/** @param {NS} ns */
export async function main(ns) {
	ns.tail()
	let saleQty = ns.args[0];

	while (true) {
		ns.hacknet.spendHashes("Sell for Money", "", saleQty)
		await ns.sleep(10)
	}

}