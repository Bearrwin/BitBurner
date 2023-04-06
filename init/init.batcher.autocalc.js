/** @param {NS} ns */
export async function main(ns) {

	// eg run init.batcher.autocalc.js home n00dles 1000 900 .1 200

	var sName = ns.args[0];
	var target = ns.args[1];
	var delayms = ns.args[2];
	var counterMax = ns.args[3];
	var hackperc = ns.args[4];
	var nukeThreads = ns.args[5];
	var hackdelayms = 60000
	var weakThreads = 10;
	var growThreads = 120;
	var hackThreads = 10;
	var counter = 1;




	ns.tail()

	// This script is a largely unsuccessful attempt to setup an auto batcher using 
	// ns.hackAnalyzeThreads with the first part of code designed as a server breaker
	// to prep the server, it worked in a limited fashion.  It needs to be redone
	// using the functions from formulas.exe once I work out how, because you can run
	// those functions on a dummy server, so you can make assessments of threads needed
	// based on a prepped server state, not a current server state. I have left it here
	// mostly as a reference for when I get formulas.exe sorted out.

	if (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target) * 0.4 || (ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target) * 1.2)) {
		ns.exec("cw1.js", (sName), nukeThreads, (target), 5000);
		ns.exec("cg1.js", (sName), nukeThreads, (target), 5000);
		ns.print(ns.getServerMoneyAvailable(target));
		await ns.sleep(10000);
		ns.exec("cw1.js", (sName), nukeThreads, (target), 5001);
		await ns.sleep(ns.getWeakenTime(target));
		ns.print(ns.getWeakenTime(target))
	}

	hackdelayms = (ns.getWeakenTime(target));

	ns.print(hackdelayms);


	while (true) {

		hackThreads = ns.hackAnalyzeThreads(target, Math.floor(ns.getServerMoneyAvailable(target) * hackperc)) + 1
		growThreads = hackThreads * 200
		weakThreads = hackThreads * 20

		ns.print(ns.getServerSecurityLevel(target))

		ns.exec("cw1.js", (sName), (weakThreads), (target), (counter));
		ns.exec("cg1.js", (sName), (growThreads), (target), (counter));

		if ((hackdelayms) < 1000) {
			ns.exec("ch1.js", (sName), (hackThreads), (target), (counter));
		}

		counter++
		if ((counter) > (counterMax)) {
			(counter) = 1

		}
		await ns.sleep((delayms));
		if (hackdelayms > 1000) {
			hackdelayms = hackdelayms - delayms
		}
		ns.print(hackdelayms)
	}
}