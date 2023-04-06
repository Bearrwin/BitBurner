/** @param {NS} ns */
export async function main(ns) {
	// "Aevum" "Chongqing"	"Ishima" "New Tokyo" "Sector-12" "Volhaven"
	// [divName] [cityName] [Operations] [Engineer] [Business] [Management] [Research and Development]
	// run hr.js MegaSoft Sector-12 1 1 1 1 1 


	var divName = ns.args[0];
	var cityName = ns.args[1];
	var opQty = ns.args[2];
	var engQty = ns.args[3];
	var busQty = ns.args[4];
	var mngQty = ns.args[5];
	var rndQty = ns.args[6];

	ns.corporation.setAutoJobAssignment(divName, cityName, "Operations", 0)
	await ns.sleep(100)
	ns.corporation.setAutoJobAssignment(divName, cityName, "Engineer", 0)
	await ns.sleep(100)
	ns.corporation.setAutoJobAssignment(divName, cityName, "Business", 0)
	await ns.sleep(100)
	ns.corporation.setAutoJobAssignment(divName, cityName, "Management", 0)
	await ns.sleep(100)
	ns.corporation.setAutoJobAssignment(divName, cityName, "Research & Development", 0)
	await ns.sleep(100)

	ns.corporation.setAutoJobAssignment(divName, cityName, "Operations", opQty)
	await ns.sleep(100)
	ns.corporation.setAutoJobAssignment(divName, cityName, "Engineer", engQty)
	await ns.sleep(100)
	ns.corporation.setAutoJobAssignment(divName, cityName, "Business", busQty)
	await ns.sleep(100)
	ns.corporation.setAutoJobAssignment(divName, cityName, "Management", mngQty)
	await ns.sleep(100)
	ns.corporation.setAutoJobAssignment(divName, cityName, "Research & Development", rndQty)




}