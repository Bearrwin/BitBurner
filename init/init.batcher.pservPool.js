/** @param {NS} ns */
export async function main(ns) {

	// 	run test.js computek 3 18 2 5000 
	ns.tail()
	await ns.sleep(1000)
	ns.moveTail(50, 50)
	ns.resizeTail(500, 150)

	var hackTarget = ns.args[0];
	var weakThreads = ns.args[1];
	var growThreads = ns.args[2];
	var hackThreads = ns.args[3];
	var delayms = ns.args[4];
	var counterMax = 2400
	var counter = 1
	var hackDelay = true
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

	ns.run("/serv/serv.propagate.all.js")
	await ns.sleep(2000);

	//	Check and see if we need to break server security first.
	while (breakAmmoCounter > 0) {

		if (secHigh > 2) {
			ns.tprint("Breaking Security on " + hackTarget)
			let breakWeakThreads = Math.ceil(secHigh * 2)
			ns.tprint("Break Threads " + breakWeakThreads)
			let breakScriptRam = ns.getScriptRam(scriptOne) * breakWeakThreads
			ns.tprint("Break RAM " + breakScriptRam)

			for (let server of purchServList) {
				if (haveBreakHost == false) {
					if (Math.floor(ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) > (breakScriptRam * 4)) {
						haveBreakHost = true
						nextBreakHost = server
					} else {
						haveBreakHost = false
					}
				}

			}
			if (haveBreakHost == false) {
				if ((Math.floor(ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) - reserveHomeRam) > (breakScriptRam * 4)) {
					haveBreakHost = true
					nextBreakHost = "home"
				} else {
					haveBreakHost = false
				}
			}
			await ns.sleep(100);
			if (haveBreakHost == true) {
				ns.exec("/ammo/cw1.single.js", (nextBreakHost), (breakWeakThreads), (hackTarget), 5011 - breakAmmoCounter);
				ns.tprint("Waiting for " + ` weaken__: ${ns.tFormat(breakdelay + 5000)}`)
				breakAmmoCounter--
			}

		}

	}
	await ns.sleep(breakdelay + 5000);

	while (true) {
		if (hackDelayms < delayms) {
			hackDelayms = 0
		}

		for (let server of purchServList) {
			if (haveHost == false) {
				if (Math.floor(ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) > (scriptRam * 5)) {
					haveHost = true
					nextHost = server

				} else {
					haveHost = false

				}
			}

		}
		if (haveHost == false) {
			if ((Math.floor(ns.getServerMaxRam("home") - ns.getServerUsedRam("home")) - reserveHomeRam) > (scriptRam * 5)) {
				haveHost = true
				nextHost = "home"
			} else {
				haveHost = false
			}
		}
		await ns.sleep(10);
		if (haveHost == true) {
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

			haveHost = false


		}


		await ns.sleep(10);
	}

}