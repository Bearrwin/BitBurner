/** @param {NS} ns */
export async function main(ns) {
	var sName = ns.args[0];
	var tcount = ns.args[1];
	var target = ns.args[2];
	var delayms = ns.args[3];
	var counterMax = ns.args[4];
	var counter = 1


	// this is a simple bot to launch the script "/ammo/cw1.single.js"
	// it looks more complex than it is. There is a counter to change the
	// variable as it launches each copy of the script so that it is not an actual copy
	// of the process because it has a different "argument" to all the others
	// otherwise it passes on argument provided from the initial batcher used to spawn this bot.
	// ie /init/init.batcher.ishackable.js which is a much more complex script used to 
	// set all of these arguments to make TheWoodchipper(tm) work.


	while (true) {


		ns.exec("/ammo/cw1.single.js", (tcount), (sName), (target), (counter));
		await ns.sleep((delayms));
		counter++
		if ((counter) > (counterMax)) {
			(counter) = 1
			}
	}



}