/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0]
	var fTarget = ns.getServer(target)
	ns.tprint("Before " + fTarget.hackDifficulty + " / " + fTarget.moneyAvailable)
	ns.tprint(fTarget)
	
	fTarget.hackDifficulty = fTarget.minDifficulty
	fTarget.moneyAvailable = fTarget.moneyMax

	// a very simple script to report the below stats to the log window
	// allows the user to assess the server.
	ns.tail()
	ns.tprint("After " + fTarget.hackDifficulty + " / " + fTarget.moneyAvailable)
	ns.print(fTarget)

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
	

	// ns.toast((target) + " probed", "success", (null));








}