/** @param {NS} ns */
export async function main(ns) {
	let meleeStats = ns.getPlayer().skills
	let strStat = ns.getPlayer().skills.strength
	let defStat = ns.getPlayer().skills.defense
	let dexStat = ns.getPlayer().skills.dexterity
	let agiStat = ns.getPlayer().skills.agility
	ns.tprint(meleeStats)

	if (strStat < 200) {
		ns.singularity.gymWorkout("Powerhouse Gym", "Strength", false)
		while (strStat < 200) {
			strStat = ns.getPlayer().skills.strength
			await ns.sleep(5000)
		}
	}
	if (defStat < 200) {
		ns.singularity.gymWorkout("Powerhouse Gym", "Defense", false)
		while (defStat < 200) {
			defStat = ns.getPlayer().skills.defense
			await ns.sleep(5000)
		}
	}
	if (dexStat < 200) {
		ns.singularity.gymWorkout("Powerhouse Gym", "Dexterity", false)
		while (dexStat < 200) {
			dexStat = ns.getPlayer().skills.dexterity
			await ns.sleep(5000)
		}
	}
	if (agiStat < 200) {
		ns.singularity.gymWorkout("Powerhouse Gym", "Agility", false)
		while (agiStat < 200) {
			agiStat = ns.getPlayer().skills.agility
			await ns.sleep(5000)
		}
	}


}