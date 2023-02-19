/** @param {NS} ns */
export async function main(ns) {

    const queryResponse = await ns.prompt("How many servers would you like to buy?", {
        type: "select",
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    });

    const query2Response = await ns.prompt("How many Gb of RAM should each server have", {
        type: "select",
        choices: [64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]
    });

    const query3Response = await ns.prompt("Please enter your server name without a number.", {
        type: "text"
    });


    var serverName = query3Response;
    var ram = query2Response
    var numServerstobuy = queryResponse
    var numServersbought = 0

    while (numServerstobuy >= 1) {

        ns.purchaseServer(serverName, (ram));
    numServerstobuy--
    numServersbought++
    }
    ns.tprint(" You have bought " + numServersbought + " servers with " + ram + " RAM each, called " + serverName)
    await ns.sleep(1000)







}