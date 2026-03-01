/** @param {NS} ns */
function range(size, startAt = 0) {
	return [...Array(size).keys()].map(i => i + startAt);
}



export async function main(ns) {
	let reqPaybackTime = (24 * 60 * 60 * 1000)
	let contingencyFund = 0
	ns.tail()
	let number_of_nodes = ns.hacknet.numNodes()
	let totalLevels = range(number_of_nodes).reduce((a, b) => a + ns.hacknet.getNodeStats(b).level, 0)

	ns.tprint(range(number_of_nodes))
	ns.tprint(totalLevels)

	//if ( ns.hacknet.getNodeStats(0).level < 100){
	//	ns.hacknet.upgradeLevel(0)
	//	ns.tprint("one")
	//
	//	}
  ns.tail()
  
	while (ns.getServerMoneyAvailable("home") > contingencyFund) {
		let nextUpg = 0

	
		ns.hacknet.getPurchaseNodeCost
		try {
			range(number_of_nodes).forEach(i => 
			ns.hacknet.upgradeLevel(i, 1))
		}
		catch { }
	if (number_of_nodes < 27) {
			try {
				ns.hacknet.purchaseNode();
				number_of_nodes = ns.hacknet.numNodes()
			}
			catch { }

		}
		await ns.sleep(100)
	}


	
}