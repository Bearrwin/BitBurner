/** @param {NS} ns */
export async function main(ns) {
	ns.tail()
	var target = ns.args[0];
	var securityThresh = ns.getServerMinSecurityLevel(target) + 1;
	if (ns.fileExists("BruteSSH.exe", "home")) {
		ns.brutessh(target);
	}
	if (ns.fileExists("FTPCrack.exe", "home")) {
		ns.ftpcrack(target);
	}
	if (ns.fileExists("HTTPWorm.exe", "home")) {
		ns.httpworm(target);
	}
	if (ns.fileExists("relaySMTP.exe", "home")) {
		ns.relaysmtp(target);
	}
	if (ns.fileExists("SQLInject.exe", "home")) {
		ns.sqlinject(target);
	}

	ns.nuke(target);

	// to be used in concert with g.loop and h.loop also includes the code to crack ports 
	// and a nuke a server for convenience, because thread count is low, compared to grow,
	// you can afford the extra RAM use, but you can setup a simple weaken cycling script
	// if that is preffered.

	while (true) {
		if (ns.getServerSecurityLevel(target) > securityThresh) {
			await ns.weaken(target);
		}
		await ns.sleep(1000);
	}
}