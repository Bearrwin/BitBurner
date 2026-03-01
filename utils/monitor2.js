/** @param {NS} ns */
import { digiClock } from "/func/func.js";

export async function main(ns) {
    const flags = ns.flags([
        ['refreshrate', 200],
        ['help', false],
    ])
    if (flags._.length === 0 || flags.help) {
        ns.tprint("This script helps visualize the money and security of a server.");
        ns.tprint(`USAGE: run ${ns.getScriptName()} SERVER_NAME`);
        ns.tprint("Example:");
        ns.tprint(`> run ${ns.getScriptName()} n00dles`)
        return;
    }
    let sName = flags._[0];
    ns.ui.openTail();
    ns.ui.resizeTail(370, 185);
    ns.disableLog('ALL');
    ns.ui.setTailTitle(sName);
    while (true) {
        const server = flags._[0];
        let money = ns.getServerMoneyAvailable(server);
        if (money === 0) money = 1;
        const maxMoney = ns.getServerMaxMoney(server);
        const minSec = ns.getServerMinSecurityLevel(server);
        const sec = ns.getServerSecurityLevel(server);
        let hackSkill = ns.getHackingLevel()
        let hackServ = ns.getServerRequiredHackingLevel(server)
        let rootAccess = ns.hasRootAccess(server)

     

        ns.clearLog(server);
       // ns.print(`${server}:`);
        ns.print(` $_________: ${ns.formatNumber(money, 4)} / ${ns.formatNumber(maxMoney, 2)} `);
        ns.print(` Hack Skill: ${hackSkill} / ${hackServ} / +${(hackSkill - hackServ)}`); 
        ns.print(` security__: ${(sec).toFixed(0)} / ${(minSec).toFixed(4)} / ${rootAccess}`);
        ns.print(` hack______: ${digiClock(ns.getHackTime(server))} (t=${Math.ceil(ns.hackAnalyzeThreads(server, money))})`);
        ns.print(` grow______: ${digiClock(ns.getGrowTime(server))} (t=${Math.ceil(ns.growthAnalyze(server, maxMoney / money))})`);
        ns.print(` weaken____: ${digiClock(ns.getWeakenTime(server))} (t=${Math.ceil((sec - minSec) * 20)})`);
               await ns.sleep(flags.refreshrate);
    }
}

export function autocomplete(data, args) {
    return data.servers;
}