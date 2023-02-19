/** @param {NS} ns */
export async function main(ns) {

	ns.singularity.joinFaction("CyberSec")
	ns.tprint("We have joined CyberSec")
	ns.singularity.workForFaction("CyberSec", "Hacking")
	ns.tprint("Starting work for CyberSec")

}