/** @param {NS} ns */
export async function main(ns) {
ns.ui.openTail()

function generateIpAddresses(ns, data) {
	return parseIpNum(ns, data, []);
}

/** @param {String} s
 * @Param {Array} parts**/
function parseIpNum(ns, s, parts) {
	if (parts.length == 4) {
		if (s.length == 0) {
			return [parts[0]+"."+parts[1]+"."+parts[2]+"."+parts[3]];
		} else {
			return [];
		}
	}
	if (s.length == 0) {
		return [];
	}
	var results = [];
	if (s.startsWith("0")) {
		parts.push(0);
		results = parseIpNum(ns, s.slice(1), parts);
		parts.pop();
		return results;
	}
	for (var i=1;i<=3 && i<=s.length;i++) {
		var n = parseInt(s.slice(0, i));
		if (n > 255) {
			break;
		}
		parts.push(n);
		results = results.concat(parseIpNum(ns, s.slice(i), parts));
		parts.pop();
	}
	return results;
}

ns.print(results)


}