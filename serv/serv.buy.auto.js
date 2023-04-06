/** @param {NS} ns */
export async function main(ns) {
	ns.tail()
	// run /serv/serv.buy.auto.js S 64 22

	var serverName = ns.args[0];
	var ram = ns.args[1];
	var servQty = ns.args[2];

	ns.run("/utils/isexists.purchServ.js")
	await ns.sleep(2000)
	var purchServCount = ns.read("/savedVar/purchServCount.txt")

	while (purchServCount < servQty) {
		ns.purchaseServer(serverName, (ram));
		ns.run("/utils/isexists.purchServ.js")
		await ns.sleep(1000)
		var purchServCount = ns.read("/savedVar/purchServCount.txt")

	}

}