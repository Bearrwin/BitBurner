/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0]

	ns.tail()
		
	while (true) {
		ns.getServerMaxMoney(target)
		ns.getServerMoneyAvailable(target)
		ns.getServerMinSecurityLevel(target)
		ns.getServerSecurityLevel(target)
		await ns.sleep(1000)

	
	}
	

}