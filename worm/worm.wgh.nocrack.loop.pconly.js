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
    let target = ns.args[0];

    // ns.tail()
    let servers = ns.getPurchasedServers()

    for (let server of servers) {
        await ns.scp("/loop/combo.wgh.nocrack.loop.js", server, "home")
        // ns.tprint("copying /loop/combo.wgh.nocrack.loop.js ", server)

        // divert all the threads to the most valuable command
        let available_threads = threadCount(ns, server, 2.4)
        if (available_threads >= 1) {
            ns.exec("/loop/combo.wgh.nocrack.loop.js", server, available_threads, (target))
            await ns.sleep(10000)
        }
    }




    await ns.sleep(1000)

}