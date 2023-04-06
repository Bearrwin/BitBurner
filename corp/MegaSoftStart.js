/** @param {NS} ns */
export async function main(ns) {


	try {
		ns.corporation.createCorporation("Megalomanie Inc.", true)
	} catch { }



	ns.clearPort(1)
	ns.writePort(1, 4)
	ns.clearPort(2)
	ns.writePort(2, "Sell for Corporation Funds")
	ns.clearPort(3)
	ns.writePort(3, "")



}