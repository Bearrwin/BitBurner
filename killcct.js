/** @param {NS} ns */
export async function main(ns) {

  let host = ns.args[0]
  let filename = ns.args[1]
  let answer = ns.args[2]
  let opts = ns.args[4]

//  ns.codingcontract.attempt(answer, filename, host)
	var reward = ns.codingcontract.attempt(answer, filename, host, opts);
	if (reward) {
		ns.tprint(reward);
	} else {
		ns.tprint("failed!");
	}


}