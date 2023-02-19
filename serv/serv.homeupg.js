/** @param {NS} ns */
export async function main(ns) {

	let stillUpg = true

	while (stillUpg == true) {

		let ramUpgCost = ns.singularity.getUpgradeHomeRamCost()

		const queryA = ("Would you like to upgrade your home server RAM for " + Math.floor(ramUpgCost / 1000) +
			"k? You have " + Math.floor(ns.getServerMoneyAvailable("home") / 1000) + "k available");
		const resultA = await ns.prompt(queryA);

		if (resultA == true) {
			ns.singularity.upgradeHomeRam()
			await ns.sleep(1000)
		} else {
			stillUpg = false
		}
	}



}