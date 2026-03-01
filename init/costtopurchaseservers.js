/** @param {NS} ns */
export async function main(ns) {

ns.tprint("")
ns.tprint("")
ns.tprint("------------")
let s64 = (ns.getPurchasedServerCost(64))
ns.tprint("64Gb " + `${ns.nFormat(s64, "$0.000a")} `);

let s128 = (ns.getPurchasedServerCost(128))
ns.tprint("128Gb " + `${ns.nFormat(s128, "$0.000a")} `);

let s256= (ns.getPurchasedServerCost(256))
ns.tprint("256Gb " + `${ns.nFormat(s256, "$0.000a")} `);

let s512 = (ns.getPurchasedServerCost(512))
ns.tprint("512Gb " + `${ns.nFormat(s512, "$0.000a")} `);

let s1024 = (ns.getPurchasedServerCost(1024))
ns.tprint("1Tb " + `${ns.nFormat(s1024, "$0.000a")} `);

let s2048 = (ns.getPurchasedServerCost(2048))
ns.tprint("2Tb " + `${ns.nFormat(s2048, "$0.000a")} `);

let s4096 = (ns.getPurchasedServerCost(4096))
ns.tprint("4Tb " + `${ns.nFormat(s4096, "$0.000a")} `);

let s8192 = (ns.getPurchasedServerCost(8192))
ns.tprint("8Tb " + `${ns.nFormat(s8192, "$0.000a")} `);

let s16384 = (ns.getPurchasedServerCost(16384))
ns.tprint("16Tb " + `${ns.nFormat(s16384, "$0.000a")} `);

let s32768 = (ns.getPurchasedServerCost(32768))
ns.tprint("32Tb " + `${ns.nFormat(s32768, "$0.000a")} `);

let s65536 = (ns.getPurchasedServerCost(65536))
ns.tprint("64Tb " + `${ns.nFormat(s65536, "$0.000a")} `);

let s131072 = (ns.getPurchasedServerCost(131072))
ns.tprint("128Tb " + `${ns.nFormat(s131072, "$0.000a")} `);

let s262144 = (ns.getPurchasedServerCost(262144))
ns.tprint("256Tb " + `${ns.nFormat(s262144, "$0.000a")} `);

let s524288 = (ns.getPurchasedServerCost(524288))
ns.tprint("512Tb " + `${ns.nFormat(s524288, "$0.000a")} `);

let s1048576 = (ns.getPurchasedServerCost(1048576))
ns.tprint("1Pb " + `${ns.nFormat(s1048576, "$0.000a")} `);
ns.tprint("------------")



}