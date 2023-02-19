/** @param {NS} ns */
export async function main(ns) {

	ns.singularity.joinFaction("NiteSec")
	ns.tprint("We have joined NiteSec")
	ns.singularity.workForFaction("NiteSec", "Hacking")
	ns.tprint("Starting work for NiteSec")

}