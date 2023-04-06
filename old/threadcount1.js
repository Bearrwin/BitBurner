/** @param {NS} ns */
export async function main(ns) {

	var weakThreads = ns.args[0];
	var growThreads = ns.args[1];
	var hackThreads = ns.args[2];
	var delayms = ns.args[3];
	ns.clearPort(101)
	ns.writePort(101, weakThreads)
	ns.clearPort(102)
	ns.writePort(102, growThreads)
	ns.clearPort(103)
	ns.writePort(103, hackThreads)
	ns.clearPort(104)
	ns.writePort(104, delayms)


}