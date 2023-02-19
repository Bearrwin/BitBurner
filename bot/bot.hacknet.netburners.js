/** @param {NS} ns */
function range(size, startAt = 0) {
	return [...Array(size).keys()].map(i => i + startAt);
}



export async function main(ns) {

	ns.tail()
	let number_of_nodes = ns.hacknet.numNodes()
	let totalLevels = range(number_of_nodes).reduce((a, b) => a + ns.hacknet.getNodeStats(b).level, 0)

	//ns.tprint(range(number_of_nodes))
	

	//if ( ns.hacknet.getNodeStats(0).level < 100){
	//	ns.hacknet.upgradeLevel(0)
	//	ns.tprint("one")
//
//	}

	while (totalLevels < 479) {
		totalLevels = range(number_of_nodes).reduce((a, b) => a + ns.hacknet.getNodeStats(b).level, 0)
		// ns.tprint(totalLevels)
		try {
			range(number_of_nodes).filter(i => ns.hacknet.getNodeStats(i).level < 60).forEach(i => ns.hacknet.upgradeLevel(i, 1))
		}
		catch { }
	if (number_of_nodes < 8) {
			try {
				ns.hacknet.purchaseNode();
				number_of_nodes = ns.hacknet.numNodes()
			}
			catch { }

		}
		await ns.sleep(100)
	}
		// ns.tprint("You have " + totalLevels + " total levels across your hacknet nodes.") 
}