/** @param {NS} ns */
export async function main(ns) {

// Self-explanatory
	ns.singularity.joinFaction("Sector-12")
	ns.tprint("We have joined Sector-12")
	ns.singularity.workForFaction("Sector-12", "Hacking")
	ns.tprint("Starting work for Sector-12")

}