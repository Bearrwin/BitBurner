/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];

	// to be used in concert with g.loop and h.loop also includes the code to crack ports 
	// and a nuke a server for convenience, because thread count is low, compared to grow,
	// you can afford the extra RAM use, but you can setup a simple weaken cycling script
	// if that is preffered.
	
	while (true) {
			await ns.weaken(target);
		await ns.sleep(1000);
	}
}