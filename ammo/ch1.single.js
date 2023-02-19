/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];
	var hold = ns.args[1]
	
	if (hold > 0)
	await ns.hack(target);
}