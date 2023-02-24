/** @param {NS} ns */
export async function main(ns) {

	// 	run test.js computek 3 18 2 5000 


	var hackTarget = ns.args[0];
	var weakThreads = ns.args[1];
	var growThreads = ns.args[2];
	var hackThreads = ns.args[3];
	var delayms = ns.args[4];
	var counterMax = 2400
	var counter = 1
	var hackDelay = true
	var hackDelayms = ns.getWeakenTime(hackTarget)
	var hackDelaycounter = hackDelayms

	let nextHost = false
	let haveHost = false
	let purchServList = ns.getPurchasedServers()
	let scriptOne = "/ammo/cw1.single.js"
	let scriptTwo = "/ammo/cg1.single.js"
	let scriptThree = "/ammo/ch1.single.js"
	let scriptRam = ((ns.getScriptRam(scriptOne) * weakThreads) + (ns.getScriptRam(scriptTwo) * growThreads) + (ns.getScriptRam(scriptThree) * hackThreads))
	ns.tprint(scriptRam)


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

		if (haveHost == true) {
			ns.exec("/ammo/cw1.single.js", (nextHost), (weakThreads), (hackTarget), (counter));
			ns.exec("/ammo/cg1.single.js", (nextHost), (growThreads), (hackTarget), (counter));

			if (hackDelay == false) {

				ns.exec("/ammo/ch1.single.js", (nextHost), (hackThreads), (hackTarget), (counter));
			}
			hackDelaycounter -= delayms


			await ns.sleep((delayms));
			counter++
			if ((counter) >= (counterMax)) {
				(counter) = 1
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

	// let nowCity = ns.getPlayer().city
	// ns.tprint(nowCity)

	// let currentWork = ns.singularity.getCurrentWork()
	// ns.tprint(currentWork)
	// if (Object.values(currentWork).includes("BitRunners")) {
	// 	ns.tprint("It worked")
	// } else {
	// 	ns.tprint("It didn't work")
	// }

	// let currentWork = ns.singularity.getCurrentWork()
	// ns.tprint(currentWork)

	// ns.tail()
	// ns.moveTail(50,50)
	// ns.resizeTail(500,150)
	// const name = "Bit";
	// const age = 4;
	// ns.printf("My name is %s.", name);
	// ns.printf("I'm %d seconds old.", age);
	// ns.printf("My age in binary is %b.", age);
	// ns.printf("My age in scientific notation is %e.", age);
	// ns.printf("In %d seconds, I'll be %s.", 6, "Byte");
	// ns.printf("Am I a nibble? %t", (4 == age));





	// let server = ns.args[0]
	// let csb = ns.getServer(server).backdoorInstalled
	// ns.tprint(csb)
	// // let bitNode = ns.getPlayer().bitNodeN
	// ns.tprint(bitNode)

	// var stageOne = ns.read("/savedVar/stageOne.txt") === "true" ? true : false;


	// if (stageOne == true) {

	// 	ns.tprint(stageOne + " is a boolean")
	// }

	// if (stageOne == "true") {

	// ns.tprint(stageOne + " is a string")

	// }
	// let purchServList = ns.getPurchasedServers()
	// let purchServCount = 0
	// for (let server of purchServList) {
	// 	purchServCount++
	// }
	// ns.tprint(purchServCount + " servers")