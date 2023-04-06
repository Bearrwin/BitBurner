/** @param {NS} ns */
export async function main(ns) {
	var servRamSize = ns.args[0];
	var serverList = ns.getPurchasedServers()
	var servCount = 0

	while (ns.getServerMoneyAvailable("home") > 1000000 && servCount <= 24) {
		servCount = 0
		serverList = ns.getPurchasedServers()

		for (let server of serverList) {
			servCount++
			ns.tprint(server)
		}
		if (servCount == 0) {
			var newServName = "s1"
		} else {
			var newServName = ("s" + (servCount + 1))
		}
		ns.tprint(newServName)
		ns.purchaseServer(newServName, servRamSize);


		servCount++
		await ns.sleep(1000)
	}


	ns.exec("batchp.js", "home", 1)


}