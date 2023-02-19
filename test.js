/** @param {NS} ns */
export async function main(ns) {
let price = ns.singularity.getAugmentationPrice("Cranial Signal Processors - Gen I")
ns.tprint(price)
}