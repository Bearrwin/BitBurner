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
// see init.batcher.ishackable.js this is a copy and past of the top part of that script
// to allow you to generate a list of servers based on parameters you enter.


export async function main(ns) {
	let serverCount = 0

	const moneyMininput = await ns.prompt("Please enter the minimum money to accept on server (in $M) eg 3000 = 3b", { type: "text" });
	const moneyMaxinput = await ns.prompt("Please enter the maximum money to accept on server (in $M) enter 10000000 (10,000,000) for all ", { type: "text" });

	let desiredMoneyMin = moneyMininput * 1000000;
	let desiredMoneyMax = moneyMaxinput * 1000000;
	let hackSkill = ns.getHackingLevel()
	ns.tprint("Your hacking skill is  " + hackSkill + " and is high enough to hack these servers")

	let hackable = serverList(ns).filter(a => ns.getServerRequiredHackingLevel(a) < (hackSkill));
	let hasmoney = hackable.filter(a => ns.getServerMoneyAvailable(a) > 0);
	let hasenough = hasmoney.filter(a => ns.getServerMaxMoney(a) > desiredMoneyMin);
	let goldilocks = hasenough.filter(a => ns.getServerMaxMoney(a) < desiredMoneyMax);


	for (let server of goldilocks) {
		let separator = ns.args[1];
		let weakTime = ns.getWeakenTime(server)
		let maxMoney = Math.floor(ns.getServerMaxMoney(server) / 1000000);
		let minsecurity = ns.getServerMinSecurityLevel(server);
		let hackreq = ns.getServerRequiredHackingLevel(server);
		let growrate = ns.getServerGrowth(server);
		// ns.print(server + " Max $" + maxMoney + "M / " + growrate + " Grow / " + minsecurity + " Min Sec / " + hackreq + " Req Hack " + `${ns.tFormat(weakTime)}` + " Weak Time")
		ns.tprint(server + " Max $" + maxMoney + "M / " + growrate + " Grow / " + minsecurity + " Min Sec / " + hackreq + " Req Hack / " + `${ns.tFormat(weakTime)}` + " Weak Time")
		serverCount++
		if (separator == 1) {
			ns.tprint("---------------------------------------------------------------------------------------")
		}
	}
	ns.tprint("I found " + serverCount + " servers that have between $" + moneyMininput / 1000 + "b and $" + moneyMaxinput / 1000 + "b")



}