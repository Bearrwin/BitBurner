/** @param {NS} ns */
export async function main(ns) {

	// "Aevum" "Chongqing"	"Ishima" "New Tokyo" "Sector-12" "Volhaven"
	// [divName] [cityName] [Operations] [Engineer] [Business] [Management] [Research and Development]

	// run /corp/warehouseAutoUpg.js MegaSoft


	var divName = ns.args[0];

	while (true) {

		try {
			ns.corporation.upgradeWarehouse(divName, "Aevum", 1)
		} catch { }

		try {
			ns.corporation.upgradeWarehouse(divName, "Chongqing", 1)
		} catch { }

		try {
			ns.corporation.upgradeWarehouse(divName, "Sector-12", 1)
		} catch { }

		try {
			ns.corporation.upgradeWarehouse(divName, "New Tokyo", 1)
		} catch { }

		try {
			ns.corporation.upgradeWarehouse(divName, "Ishima", 1)
		} catch { }

		try {
			ns.corporation.upgradeWarehouse(divName, "Volhaven", 1)
		} catch { }
		await ns.sleep(100)
	}
}