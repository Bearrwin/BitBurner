/** @param {NS} ns */
export async function main(ns) {

	// "Aevum" "Chongqing"	"Ishima" "New Tokyo" "Sector-12" "Volhaven"
	// [divName] [cityName] [Operations] [Engineer] [Business] [Management] [Research and Development]

	// run bus.js MegaSoft Sector-12 3

	var divName = ns.args[0];
	var cityName = ns.args[1];
	var hireCount = ns.args[2];
	var counter = 0

	ns.corporation.upgradeOfficeSize(divName, cityName, hireCount)

	while (counter < hireCount)

		try {
			ns.corporation.hireEmployee(divName, cityName, "Business")
			counter++
		} catch { }
	await ns.sleep(10)



}