/** @param {NS} ns */
export async function main(ns) {

	ns.clearPort(2001)
	ns.writePort(2001, 100)
	ns.clearPort(2002)
	ns.writePort(2002, "Sell for Money")
	ns.clearPort(2003)
	ns.writePort(2003, "")

	let printThresh = ns.peek(2001)
	let printType = ns.peek(2002)
	let printTarget = ns.peek(2003)
	ns.tprint(printThresh)
	ns.tprint(printType)
	ns.tprint(printTarget)




}