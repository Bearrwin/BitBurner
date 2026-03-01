/** @param {NS} ns */
export async function main(ns) {

ns.ui.openTail()

  let totalTimeMs = 158745698
  let oneDayMs = 24 * 60 * 60 * 1000
  let oneHourMs = 60 * 60 * 1000
  let oneMinMs = 60 * 1000
  let oneSecMs = 1000

  let dDur = Math.floor((totalTimeMs / oneDayMs))
  let afterDays = totalTimeMs % oneDayMs

  let hDur = Math.floor((afterDays / oneHourMs))
  let afterHours = afterDays % oneHourMs

  let mDur = Math.floor((afterHours / oneMinMs))
  let afterMins = afterHours % oneMinMs

  let sDur = Math.floor((afterMins / oneSecMs))
  let afterSecs = afterMins / oneSecMs

  let msDur = Math.floor(afterSecs)

  ns.print(`${dDur}:${hDur}:${mDur}:${sDur}:${msDur}`)

}


/*
export function serverList(ns, current = "home", set = new Set()) {
    let connections = ns.scan(current)
    let next = connections.filter(c => !set.has(c))
    next.forEach(n => {
        set.add(n);
        return serverList(ns, n, set)
    })
        return Array.from(set.keys())
}

export async function main(ns) {
        ns.ui.openTail()

let purchServList = serverList(ns).filter(s => s.startsWith("hacknet"))

ns.print(purchServList)
*/




/*
  let threshHashes = ns.peek(2001);
	let hashType = ns.peek(2002);
	let hashTarget = ns.peek(2003);
ns.ui.openTail()
ns.hacknet.spendHashes(hashType, hashTarget, threshHashes)
*/

	// let strStat = ns.getPlayer().skills.strength
	// ns.tprint("Your Str is " + strStat)

  // ns.tprint(ns.heart.break())

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
	// ns.tprint(purchServCount + " servers"