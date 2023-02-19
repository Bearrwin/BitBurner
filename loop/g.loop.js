/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];
	var moneyThresh = ns.getServerMaxMoney(target) * .98;

	// a simple looping grow function that will act as long as money is lower than
	// 98% of maximum for that server. Use post wgh loop with high thread count
	// to keep the server at max money.  It's partners using w and h do the same thing.
	// same concept as the wgh script except that each action is happening in parallel
	// instead of in series and you can tailor thread counts between the different actions
	// to avoid overhacking a server and having to spend too much time building it back up.
	


	while (true) {
		if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			await ns.grow(target);
		}
		await ns.sleep(1000);
	}
}