/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];
	var moneyThresh = ns.getServerMaxMoney(target) * 0.5;
	

	// a simple looping hack function that will act as long as money is higher than
	// 50% of maximum for that server. Use post wgh loop with low-med thread count (test)
	// to keep siphoning money off the the server while the g.loop keeps it at max money.
	// when you hack a server you take a percentage of it's money, so more money there 
	// = bigger value hacks for the same RAM usage. w.loop keep security low at the same time, 
	// but takes a lot longer to complete a weaken action so you have to limit the thread count
	// and adjust the moneyThresh accordingly.
	// same concept as the wgh script except that each action is happening in parallel
	// instead of in series and you can tailor thread counts between the different actions
	// to avoid overhacking a server and having to spend too much time building it back up.

	while (true) {
		if (ns.getServerMoneyAvailable(target) > moneyThresh) {
			await ns.hack(target);
		}
		await ns.sleep(1000);
	}
}