/** @param {NS} ns */
export async function main(ns) {

	// "Aevum" "Chongqing"	"Ishima" "New Tokyo" "Sector-12" "Volhaven"
	// [divName] [cityName] [Operations] [Engineer] [Business] [Management] [Research and Development]

	// run officeExpand.js MegaSoft Sector-12 3

	var divName = ns.args[0];
	var cityName = ns.args[1];
	var newPosCount = ns.args[2];


	ns.corporation.upgradeOfficeSize(divName, cityName, newPosCount)

}