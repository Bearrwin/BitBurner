/** @param {NS} ns */
export async function main(ns) {
    var target = ns.args[0];
    var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
    var securityThresh = ns.getServerMinSecurityLevel(target) + 5;

    // this is a pretty straightforward script which is a slight variation on the 
    // initial hack template provided in the official docs.

    // in while loop which doesnt end, it assesses the current security level
    // of the server and compares it to the variable stored above which is the min security
    // + 5 and it the security is higher, it uses weaken, otherwise it compares money 
    // available versus the variable above and if the money is less than 75% of that server's
    // Maximum money it uses the grow action and if neither of those conditions is met, it
    // uses the hack function, very effective early part of a Bitnode cycle even early mid cycle
    //with big thread counts, but in the mid-later parts of the cycle it is near useless 
    // for hacking money comparitively to other more advanced systems..



    while (true) {
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            await ns.grow(target);
        } else {
            await ns.hack(target);
        }
    }
}