/** @param {NS} ns */
export async function main(ns) {

    const queryResponse = await ns.prompt("How do you want to modify the server?", {
        type: "select",
        choices: ["Increase Maximum Money", "Reduce Minimum Security"]
    });

    const queryBResponse = await ns.prompt("Which server?", {
        type: "select",
        choices: [ "4sigma", "aerocorp", "aevum-police", "alpha-ent", "applied-energetics", "b-and-a", "blade", "catalyst", "clarkinc", "computek", "crush-fitness", "defcomm", "deltaone", "ecorp", "foodnstuff", "fulcrumassets", "fulcrumtech", "galactic-cyber", "global-pharm", "harakiri-sushi", "helios", "hong-fang-tea", "icarus", "infocomm", "iron-gym", "joesguns", "johnson-ortho", "kuai-gong", "lexo-corp", "max-hardware", "megacorp", "microdyne", "millenium-fitness", "n00dles", "nectar-net", "neo-net", "netlink", "nova-med", "nwo", "omega-net", "omnia", "omnitek", "phantasy", "powerhouse-fitness", "rho-construction", "rothman-uni", "sigma-cosmetics", "silver-helix", "snap-fitness", "solaris", "stormtech", "summit-uni", "syscore", "taiyang-digital", "the-hub", "titan-labs", "unitalife", "univ-energy", "vitalife", "zb-def", "zb-institute", "zer0", "zeus-med"]
    });


	ns.clearPort(2001)
	ns.writePort(2001, 1)
	ns.clearPort(2002)
	ns.writePort(2002, queryResponse)
	ns.clearPort(2003)
	ns.writePort(2003, queryBResponse )

	/*let printThresh = ns.peek(2001)
	let printType = ns.peek(2002)
	let printTarget = ns.peek(2003)
	ns.tprint(printThresh)
	ns.tprint(printType)
	ns.tprint(printTarget)
*/

  ns.tprint(queryResponse)
  ns.tprint(queryBResponse)

}