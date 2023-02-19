/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];
	var moneyThresh = ns.getServerMaxMoney(target) * .98;
	while (true) {
		if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			await ns.grow(target);
		}
		await ns.sleep(1000);
	}
}