/** @param {NS} ns */
export async function main(ns) {
	var sName = ns.args[0];
	var tcount = ns.args[1];
	var target = ns.args[2];
	var delayms = ns.args[3];
	var counterMax = ns.args[4];
	var counter = 1


	while (true) {


		ns.exec("/ammo/cg1.single.js", (tcount), (sName), (target), (counter));
		await ns.sleep((delayms));
		counter++
		if ((counter) > (counterMax)) {
			(counter) = 1
			}
	}



}