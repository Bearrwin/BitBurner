/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];

	//  No frills spawnable ammo type script with a simple target variable but no counter
		await ns.hack(target)
	
}