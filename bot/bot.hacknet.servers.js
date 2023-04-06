/** @param {NS} ns */
function range(size, startAt = 0) {
	return [...Array(size).keys()].map(i => i + startAt);
}



export async function main(ns) {
	// [total levels] [max cores per node] [max ram per node] [max level per node] [max num nodes]
	// run /bot/bot.hacknet.servers.js 8000 200 8192 400 20
	let purchLevels = ns.args[0];
	let threshCores = ns.args[1];
	let threshRam = ns.args[2];
	let threshLevel = ns.args[3];
	let threshNodes = ns.args[4];
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

	ns.run("/bot/bot.hacknet.cashonly.js")
	while (totalLevels < purchLevels) {
		// while (ns.hacknet.numHashes() > 4) {
		// 	ns.hacknet.spendHashes("Sell for Money", "", 1)
		// }
		if (number_of_nodes < threshNodes) {
			try {
				ns.hacknet.purchaseNode();
				ns.hacknet.upgradeCache(0,1)
				number_of_nodes = ns.hacknet.numNodes()
			}
			catch { }

		}
		totalLevels = range(number_of_nodes).reduce((a, b) => a + ns.hacknet.getNodeStats(b).level, 0)

		try {
			range(number_of_nodes).filter(i => ns.hacknet.getNodeStats(i).cores < threshCores).forEach(i => ns.hacknet.upgradeCore(i, 1))
			range(number_of_nodes).filter(i => ns.hacknet.getNodeStats(i).ram < threshRam).forEach(i => ns.hacknet.upgradeRam(i, 1))
			range(number_of_nodes).filter(i => ns.hacknet.getNodeStats(i).level < threshLevel).forEach(i => ns.hacknet.upgradeLevel(i, 1))
		}
		catch { }
		await ns.sleep(10)
	}
	// ns.tprint("You have " + totalLevels + " total levels across your hacknet nodes.") 
}