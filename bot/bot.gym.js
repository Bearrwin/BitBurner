/** @param {NS} ns */
export async function main(ns) {
let statGoal = ns.args[0];

	let meleeStats = ns.getPlayer().skills
	let strStat = ns.getPlayer().skills.strength
	let defStat = ns.getPlayer().skills.defense
	let dexStat = ns.getPlayer().skills.dexterity
	let agiStat = ns.getPlayer().skills.agility
	ns.tprint(meleeStats)

	if (strStat < statGoal) {
		ns.singularity.gymWorkout("Powerhouse Gym", "Strength", false)
		while (strStat < statGoal) {
			strStat = ns.getPlayer().skills.strength
			await ns.sleep(5000)
		}
	}
	if (defStat < statGoal) {
		ns.singularity.gymWorkout("Powerhouse Gym", "Defense", false)
		while (defStat < statGoal) {
			defStat = ns.getPlayer().skills.defense
			await ns.sleep(5000)
		}
	}
	if (dexStat < statGoal) {
		ns.singularity.gymWorkout("Powerhouse Gym", "Dexterity", false)
		while (dexStat < statGoal) {
			dexStat = ns.getPlayer().skills.dexterity
			await ns.sleep(5000)
		}
	}
	if (agiStat < statGoal) {
		ns.singularity.gymWorkout("Powerhouse Gym", "Agility", false)
		while (agiStat < statGoal) {
			agiStat = ns.getPlayer().skills.agility
			await ns.sleep(5000)
		}
	}


}