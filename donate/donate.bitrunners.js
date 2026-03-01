/** @param {NS} ns */
export async function main(ns) {
	let donationAmount = ns.args[0];
	
	ns.singularity.donateToFaction("BitRunners", donationAmount)
}