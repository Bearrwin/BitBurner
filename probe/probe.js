/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0]


	// a very simple script to report the below stats to the log window
	// allows the user to assess the server.
	ns.tail()


	ns.getServerMoneyAvailable(target)
	ns.getServerMaxMoney(target)
	ns.getServerRequiredHackingLevel(target)
	ns.getServerSecurityLevel(target)
	ns.getServerMinSecurityLevel(target)
	ns.getServerMaxRam(target)
	ns.getServerNumPortsRequired(target)
	ns.getServerGrowth(target)
	let hasroot = ns.hasRootAccess(target)
	ns.print(hasroot)
	var hackAmt = ns.getServerMoneyAvailable(target)


	ns.tprint(hackAmt)


	// ns.toast((target) + " probed", "success", (null));








}