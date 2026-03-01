/** @param {NS} ns */
export async function main(ns) {

  ns.ui.openTail();
  ns.disableLog("sleep")
  let number_of_nodes = ns.hacknet.numNodes();
    let i = 0;

    ns.run('/hnet/cash.js')
    await ns.sleep(1000)
    ns.run('utils/selling.js')
    await ns.sleep(1000)
    //ns.run('/bot/bot.hacknet.sellhashes.js')
    

while (true) {
    ns.hacknet.purchaseNode()
    number_of_nodes = ns.hacknet.numNodes();

  while (i >= 0 && i <= number_of_nodes - 1) {
    let coreQty = ns.hacknet.getNodeStats(i).cores;
    let ram = ns.hacknet.getNodeStats(i).ram;
    let level = ns.hacknet.getNodeStats(i).level;
    let cache = ns.hacknet.getNodeStats(i).cache;
    try {
      ns.hacknet.upgradeLevel(i)
      ns.hacknet.upgradeCore(i)
      ns.hacknet.upgradeRam(i)
      ns.hacknet.upgradeCache(i)
          }
    catch { }
    ns.print(` Node ${i} has ${coreQty} cores, ${ram} Gb Ram, ${level} levels and cache of ${cache}`);
        i++
  };
  ns.print(" ")
  i = 0
  await ns.sleep(1000)
}

}