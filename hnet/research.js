/** @param {NS} ns */
export async function main(ns) {

	ns.clearPort(1)
	ns.writePort(1, 4)
	ns.clearPort(2)
	ns.writePort(2, "Exchange for Corporation Research")
	ns.clearPort(3)
	ns.writePort(3, "")


	let printThresh = ns.peek(1)
	let printType = ns.peek(2)
	let printTarget = ns.peek(3)
	ns.tprint(printThresh)
	ns.tprint(printType)
	ns.tprint(printTarget)

}