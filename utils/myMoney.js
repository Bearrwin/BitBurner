/** @param {NS} ns */
export async function main(ns) {
 var myMoney = ns.getPlayer().money
   ns.tprint(` ${ns.nFormat(myMoney, "$0.000a")} `);

}