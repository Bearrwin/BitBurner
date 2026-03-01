/** @param {NS} ns */
export async function main(ns) {
	let faction = ns.args[0];
	let augment = ns.args[1];

	ns.singularity.purchaseAugmentation(faction, augment)


}