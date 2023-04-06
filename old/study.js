/** @param {NS} ns */
export async function main(ns) {
	ns.tail()

	var qty = ns.args[0];

	while (true) {

		ns.hacknet.spendHashes("Improve Studying", "", qty)
		await ns.sleep(10)
	}
}