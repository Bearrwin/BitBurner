/** @param {NS} ns */
export async function main(ns) {
    const flags = ns.flags([
        ['refreshrate', 200],
        ['help', false],
    ])




    ns.ui.openTail();
    ns.ui.resizeTail(175, 55)
    ns.ui.moveTail(1525, 540)
    ns.ui.setTailTitle("Home")
    //ns.ui.setTailFontSize(12)
    ns.disableLog('ALL');
    while (true) {
        const server = "home"
        let maxRam = ns.getServerMaxRam("home")
        let usedRam = ns.getServerUsedRam("home")
        

        ns.clearLog(server);
      //  ns.print(`${server}:`);
        ns.print(`${ns.formatRam(maxRam, 0)} / ${ns.formatRam(usedRam, 0)}`);
        
               await ns.sleep(flags.refreshrate);
    }
}

export function autocomplete(data, args) {
    return data.servers;
}