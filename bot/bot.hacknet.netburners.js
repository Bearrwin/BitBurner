/** @param {NS} ns */
function range(size, startAt = 0) {
	return [...Array(size).keys()].map(i => i + startAt);
}



export async function main(ns) {

	// this is a slightly modified version of the script from youtube "Hrhr"
	// it checks how many nodes exist with the first let variable.
	// Second variable I only understand a little of how it does it but it counts levels
	// across all nodes then it uses a while loop to stop it going past a certain number
	// of total levels which we set manually, and then tries to buy more levels and in a similar 
	// fashion buy more nodes up to the maximum.  This means you can get a trickle income whose cost
	// is paid back in a couple of hourse, instead of sinking large amounts into the hacknet
	// which will likely not be paid back before you apply augments again.


	ns.tail()
	let number_of_nodes = ns.hacknet.numNodes()
	let totalLevels = range(number_of_nodes).reduce((a, b) => a + ns.hacknet.getNodeStats(b).level, 0)


	while (totalLevels < 479) {
		totalLevels = range(number_of_nodes).reduce((a, b) => a + ns.hacknet.getNodeStats(b).level, 0)
		
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