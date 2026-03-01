/** @param {NS} ns */
export async function main(ns) {

// usage run sharehome.js -t 500000
// 50000 threads is 2pb

  ns.ui.openTail()
  while (true){
    await ns.share()
  }}
