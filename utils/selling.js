/** @param {NS} ns */
export async function main(ns) {


  let printThresh = ns.peek(2001);
  let printType = ns.peek(2002);
  let printTarget = ns.peek(2003);
  let wallet = ns.hacknet.numHashes();
  let walletCap = ns.hacknet.hashCapacity();
  let typeCost = ns.hacknet.hashCost(printType, printThresh);


  ns.ui.openTail();
  ns.ui.resizeTail(375, 130);
  ns.ui.moveTail(1325, 600);
  ns.ui.setTailTitle("Selling");
  //ns.ui.setTailFontSize(12)
  ns.disableLog('ALL');


  while (true) {
    ns.clearLog();

    typeCost = ns.hacknet.hashCost(printType, printThresh);
    wallet = ns.hacknet.numHashes();
    walletCap = ns.hacknet.hashCapacity();
    printThresh = ns.peek(2001);
    printType = ns.peek(2002);
    printTarget = ns.peek(2003);
    ns.print(`$__________: ${ns.formatNumber(wallet, 2)} / ${ns.formatNumber(walletCap, 2)} `);
    ns.print(`Qty to sell: ${ns.formatNumber(printThresh, 0)}`);
      if (ns.peek(2002) == ("Improve Studying")){
        ns.print(`${(printType)}: ${ns.formatNumber(typeCost, 2)} / ${(ns.hacknet.getStudyMult() * 100)} %`);
      }else{
       if (ns.peek(2002) == ("Improve Gym Training")){
        ns.print(`${(printType)}: ${ns.formatNumber(typeCost, 2)} / ${(ns.hacknet.getTrainingMult() * 100)} %`);
      }else{
    ns.print(`${(printType)}: ${ns.formatNumber(typeCost, 2)}`);
            }
    ns.print(printTarget)

    await ns.sleep(1000);
  }
}

}