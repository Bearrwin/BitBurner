/** @param {NS} ns */
export async function main(ns) {

	let stillUpg = true

	// for when you are manually upgrading home server, sometimes multiple levels in a row

	// keep loop going until users chooses no prompt
	while (stillUpg == true) {

		// work out the current ram upgrade cost to use in the query
		let ramUpgCost = ns.singularity.getUpgradeHomeRamCost()

	// self explanatory
		const queryA = ("Would you like to upgrade your home server RAM for " + Math.floor(ramUpgCost / 1000) +
			"k? You have " + Math.floor(ns.getServerMoneyAvailable("home") / 1000) + "k available");
		const resultA = await ns.prompt(queryA);

	// if user answered yes upgrade the home ram, otherwise skip that and change the
	// variable stillUpg which will have the effect of ending the script as the while loop
	// will end and there is nothing else to do.
		if (resultA == true) {
			ns.singularity.upgradeHomeRam()
			await ns.sleep(1000)
		} else {
			stillUpg = false
		}
	}



}