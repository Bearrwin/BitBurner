/** @param {NS} ns */
export async function main(ns) {
	let augName = ns.args[0];
	let augPrice = ns.singularity.getAugmentationBasePrice(augName)
	ns.tprint(`${ns.nFormat(augPrice, "$0.000a")} `)
	


}