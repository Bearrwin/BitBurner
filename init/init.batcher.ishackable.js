/** @param {NS} ns */

function serverList(ns, current = "home", set = new Set()) {
	let connections = ns.scan(current)
	let next = connections.filter(c => !set.has(c))
	next.forEach(n => {
		set.add(n);
		return serverList(ns, n, set)

	})
	set.delete("home")
	return Array.from(set.keys())

}

export async function main(ns) {
	let serverCount = 0
	let purchasedServers = ns.getPurchasedServers()
	let happy = false
	let moneyMin = 0
	let moneyMax = 0
	let goldilocks = serverList(ns)

	while (happy == false) {

	const moneyMininput = await ns.prompt("Please enter the minimum money to accept on server (in $M) eg 3000 = 3b", { type: "text" });
			moneyMin = moneyMininput
	const moneyMaxinput = await ns.prompt("Please enter the maximum money to accept on server (in $M) enter 10000000 (10,000,000) for all ", { type: "text" });
			moneyMax = moneyMaxinput

	let desiredMoneyMin = moneyMininput * 1000000;
	let desiredMoneyMax = moneyMaxinput * 1000000;
	let hackSkill = ns.getHackingLevel()
	ns.tprint("Your hacking skill is  " + hackSkill + " and is high enough to hack these servers")

	let hackable = serverList(ns).filter(a => ns.getServerRequiredHackingLevel(a) < (hackSkill));
	let hasmoney = hackable.filter(a => ns.getServerMaxMoney(a) > 0);
	let hasenough = hasmoney.filter(a => ns.getServerMaxMoney(a) > desiredMoneyMin);
		goldilocks = hasenough.filter(a => ns.getServerMaxMoney(a) < desiredMoneyMax);
		
		
		for (let server of goldilocks) {
			let maxMoney = Math.floor(ns.getServerMaxMoney(server) / 1000000);
			let minsecurity = ns.getServerMinSecurityLevel(server);
			let currSecurity = Math.floor(ns.getServerSecurityLevel(server))
			let hackreq = ns.getServerRequiredHackingLevel(server);
			let growrate = ns.getServerGrowth(server);

			ns.tprint(server + " Has Max $" + maxMoney + " Mil / " + growrate + " Grow Rate / "
				+ currSecurity + " Current Sec / " + minsecurity + " Min Sec / " + hackreq + " Req Hack Skill")
			serverCount++
		}
		ns.tprint(" ")
		const queryHappy = "Are you happy with this list of servers?";
		const resultHappy = await ns.prompt(queryHappy);
		happy = resultHappy

	}

	ns.tprint("I found " + serverCount + " servers that have between $" + moneyMin + "m and $" + moneyMax + "m")
	ns.tprint("---------------------------------------------------------------------------------------")
	ns.tprint(" ")

	for (let pServer of purchasedServers) {
		let totalRam = ns.getServerMaxRam(pServer)
		let freeRam = Math.floor(ns.getServerMaxRam(pServer) - ns.getServerUsedRam(pServer))

		ns.tprint(pServer + " has " + freeRam + " / " + totalRam + " Gb available.")
	}
	await ns.sleep(1000)


	const queryA = "Do you want to hack all these servers?";
	const resultA = await ns.prompt(queryA);
	ns.tprint(`${queryA} ${resultA}`);



	if (resultA == true) {

		const wThreads = await ns.prompt("How many weaken threads to use on these servers ", { type: "text" });
		const gThreads = await ns.prompt("How many grow threads to use on these servers ", { type: "text" });
		const hThreads = await ns.prompt("How many hack threads to use on these servers ", { type: "text" });
		const cycleDelay = await ns.prompt("How long should I wait between batches for these servers (in seconds)", { type: "text" });
		const hStartDelay = await ns.prompt("How long should I wait to start hacks on these servers (in seconds", { type: "text" });

		const queryA = "Do you want to break these servers first? (Large WGW batch first, with delay to start woodchipper";
		const needsBreaking = await ns.prompt(queryA);


		for (let hackTarget of goldilocks) {
			const hostServer = await ns.prompt("Name of server to hack " + hackTarget, { type: "text" });

			ns.exec("/init/init.batcher.js", "home", 1, hostServer, hackTarget, cycleDelay * 1000, hStartDelay * 1000, wThreads, gThreads, hThreads, 3000, needsBreaking)
			ns.tprint("Master, I am hacking (" + hackTarget + ") every (" + cycleDelay + " seconds), and waiting for (" + hStartDelay + " seconds) to start hacking, using these thread counts ("
				+ wThreads + " Weaken) (" + gThreads + " Grow) and (" + hThreads + " Hack). Using (" + hostServer + ") and we are breaking the server security first (" + needsBreaking + ")")
		}
	}

	else ns.tprint("Ok Master, we will not hack these servers!")


}