/** @param {NS} ns */
export async function main(ns) {

	// 	run /init/init.batcher.pservPool.js n00dles 1 1 10 5000 2
	ns.disableLog("getServerMaxRam")
	ns.disableLog("getServerUsedRam")
	ns.disableLog("sleep")
	
	ns.tail()
	await ns.sleep(1000)
	ns.moveTail(50, 50)
	ns.resizeTail(500, 150)

	var hackTarget = ns.args[0];
	var weakThreads = ns.args[1];
	var growThreads = ns.args[2];
	var hackThreads = ns.args[3];
	var delayms = ns.args[4];
	var breakThreshold = ns.args[5];
	ns.clearPort(101)
	ns.writePort(101, weakThreads)
	ns.clearPort(102)
	ns.writePort(102, growThreads)
	ns.clearPort(103)
	ns.writePort(103, hackThreads)
	ns.clearPort(104)
	ns.writePort(104, delayms)

	var counterMax = 100000
	var counter = 1
	var hackDelay = false
	var hackDelayms = 0
	var hackDelaycounter = hackDelayms

	let nextHost = false
	let haveHost = false
	let nextBreakHost = false
	let haveBreakHost = false
	let purchServList = ns.getPurchasedServers()
	let scriptOne = "/ammo/cw1.single.js"
	let scriptTwo = "/ammo/cg1.single.js"
	let scriptThree = "/ammo/ch1.single.js"
	let scriptRam = ((ns.getScriptRam(scriptOne) * weakThreads) + (ns.getScriptRam(scriptTwo) * growThreads) + (ns.getScriptRam(scriptThree) * hackThreads))
	let reserveHomeRam = 64
	const minSec = ns.getServerMinSecurityLevel(hackTarget);
	const sec = ns.getServerSecurityLevel(hackTarget);
	let secHigh = sec - minSec
	var breakdelay = ns.getWeakenTime(hackTarget)
	var breakAmmoCounter = 10
	

	// ns.run("/serv/serv.propagate.all.js")
	await ns.sleep(5000);

	// Check and see if we need to break server security first.
	if (secHigh > breakThreshold) {
		while (breakAmmoCounter > 0) {

			ns.tprint("Breaking Security on " + hackTarget)
			let breakWeakThreads = Math.ceil(secHigh * 2)
			ns.tprint("Break Threads " + breakWeakThreads)
			let breakScriptRam = ns.getScriptRam(scriptOne) * breakWeakThreads
			ns.tprint("Break RAM " + breakScriptRam)

			for (let server of purchServList) {
				if (haveBreakHost == false) {
					if (Math.floor(ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) > (breakScriptRam * 5)) {
						haveBreakHost = true
						nextBreakHost = server
					} else {
						haveBreakHost = false
					}
				}

			}
			if (haveBreakHost == false) {
				if ((Math.floor(ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) - reserveHomeRam) > (breakScriptRam * 5)) {
					haveBreakHost = true
					nextBreakHost = "home"
				} else {
					haveBreakHost = false
				}
			}
			await ns.sleep(100);
			if (haveBreakHost == true) {
				ns.exec("/ammo/cw1.single.js", (nextBreakHost), (breakWeakThreads), (hackTarget), 5011 - breakAmmoCounter);
				ns.tprint("Waiting for " + ns.tFormat(breakdelay + 5000))
				breakAmmoCounter--
			}

			await ns.sleep(100);
		}
		await ns.sleep(breakdelay + 5000);
	}
	hackDelayms = ns.getWeakenTime(hackTarget)
	hackDelaycounter = hackDelayms
	while (true) {
		scriptRam = ((ns.getScriptRam(scriptOne) * weakThreads) + (ns.getScriptRam(scriptTwo) * growThreads) + (ns.getScriptRam(scriptThree) * hackThreads))
		if (hackDelayms < delayms) {
			hackDelayms = 0
		}
		purchServList = ns.getPurchasedServers()
		// ns.tprint("scriptRam is " + scriptRam)
		for (let server of purchServList) {
			if (haveHost == false) {
				if (Math.floor(ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) > (scriptRam * 2)) {
					haveHost = true
					nextHost = server

				} else {
					haveHost = false

				}
			}

		}
		if (haveHost == false) {
			if ((Math.floor(ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) - reserveHomeRam) > (scriptRam * 2)) {
				haveHost = true
				nextHost = "home"
			} else {
				haveHost = false
			}
		}
		await ns.sleep(10);
		if (haveHost == true) {
			weakThreads = ns.peek(101);
			growThreads = ns.peek(102);
			hackThreads = ns.peek(103);
			delayms = ns.peek(104);
			scriptRam = ((ns.getScriptRam(scriptOne) * weakThreads) + (ns.getScriptRam(scriptTwo) * growThreads) + (ns.getScriptRam(scriptThree) * hackThreads))
			ns.exec("/ammo/cw1.single.js", (nextHost), (weakThreads), (hackTarget), (counter));
			ns.exec("/ammo/cg1.single.js", (nextHost), (growThreads), (hackTarget), (counter));

			if (hackDelay == false) {

				ns.exec("/ammo/ch1.single.js", (nextHost), (hackThreads), (hackTarget), (counter));
			}



			await ns.sleep((delayms));
			counter++
			if ((counter) >= (counterMax)) {
				(counter) = 1
			}
			if (hackDelay == true) {
				hackDelaycounter -= delayms
			}
			if (hackDelay == true && hackDelaycounter < delayms) {
				hackDelaycounter = 0
				hackDelay = false
			}
			ns.print("Hack Delay .." + ns.formatNumber(hackDelaycounter))
			haveHost = false


		}


		await ns.sleep(1);
	}

}