/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0]

	ns.tail()
		
	
		ns.getServerMoneyAvailable(target)
		ns.getServerMaxMoney(target)
		ns.getServerRequiredHackingLevel(target)
		ns.getServerSecurityLevel(target)
		ns.getServerMinSecurityLevel(target)
		ns.getServerMaxRam(target)		
		ns.getServerNumPortsRequired(target)
		ns.getServerGrowth(target)
		var hackAmt = ns.getServerMoneyAvailable(target)
	
	
	ns.tprint (hackAmt)


		// ns.toast((target) + " probed", "success", (null));
		

			

	
	
	

}