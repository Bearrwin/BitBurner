/** @param {NS} ns */
export async function main(ns) {
// usage run /serv/serv.purchasedupg.loop.js 128 10000

	//let target = ns.args[0];
  let ram = ns.args[0];
  let cycleTime = ns.args[1];

  let baseCost = ns.getPurchasedServerCost(ram) - ns.getPurchasedServerCost(ram / 2)
  let upgQty  = 0
	let purchServers = ns.getPurchasedServers();

	await ns.sleep(1000)
  
  ns.ui.openTail();
  ns.ui.resizeTail(500, 220);
  ns.ui.moveTail(655, 50);
  ns.disableLog('getServerMaxRam');
  ns.disableLog('getServerMoneyAvailable');
  ns.disableLog('sleep');

  // check to see if any servers need to be upgraded still

    for (let server of purchServers) {
      if(ns.getServerMaxRam(server) < ram){
        upgQty++
      }
    }
    ns.print(` ${(upgQty).toFixed(0)} `)



  while (upgQty > 0 ) {

    ns.print(` We still need to upgrade ${(upgQty).toFixed(0)} servers`);

    for (let server of purchServers) {
      // Establish how much ram this server currently has
      let serverRam = ns.getServerMaxRam(server)
      var upgCost = ns.getPurchasedServerCost(ram) - ns.getPurchasedServerCost(serverRam)
      let availMoney = ns.getServerMoneyAvailable("home")
      if(serverRam < ram){

          if (availMoney > upgCost){
            ns.upgradePurchasedServer(server, (ram));
          upgQty--
          }
      }
   }
   ns.print(` Saving my pennies! Normal upgrade cost is ${ns.formatNumber(baseCost)} each`); 
  await ns.sleep(cycleTime)
  }
 ns.print (`We ae done, I am outta here!`)
}