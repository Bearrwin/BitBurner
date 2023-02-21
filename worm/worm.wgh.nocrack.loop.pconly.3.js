/** @param {NS} ns */

/**
 * Returns an array of servers dynamically
 */
// e.g.
// run worm.wgh.nocrack.loop.pconly.js silver-helix

function threadCount(ns, hostname, scriptRam) {
    let threads = 1;
    let free_ram = ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname)

    threads = free_ram / scriptRam
    return Math.floor(threads)
}

export async function main(ns) {
    let targetOne = ns.args[0];
    let targetTwo = ns.args[1];
    let targetThree = ns.args[2];

    // ns.tail()
    let servers = ns.getPurchasedServers()

    for (let server of servers) {
        await ns.scp("/loop/combo.wgh.nocrack.loop.js", server, "home")
        // ns.tprint("copying /loop/combo.wgh.nocrack.loop.js ", server)

        // divert all the threads to the most valuable command
        if (server != "S" && server != "S-0") {
            let available_threads = threadCount(ns, server, 2.4)
            if (available_threads >= 1) {
                ns.exec("/loop/combo.wgh.nocrack.loop.js", server, available_threads, (targetThree))
            }
            
                available_threads = threadCount(ns, "S", 2.4)
                if (available_threads >= 1) {
                    ns.exec("/loop/combo.wgh.nocrack.loop.js", "S", available_threads, (targetOne))
                }
                    available_threads = threadCount(ns, "S-0", 2.4)
                if (available_threads >= 1) {
                
                    ns.exec("/loop/combo.wgh.nocrack.loop.js", "S-0", available_threads, (targetTwo))
                }
            
        }
    }




    await ns.sleep(1000)

}