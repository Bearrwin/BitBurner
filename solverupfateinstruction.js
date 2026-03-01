 from https://steamcommunity.com/sharedfiles/filedetails/?id=2712741294
 
 
 
 How to update the script with solvers in the source code of BitBurner
ALL solutions to the contracts can be found in the source code of BitBurners, and they should be better than my solutions.

Here are steps to use these solutions.
Step 1: find contract by name in this file
https://github.com/bitburner-official/bitburner-src/tree/dev/src/CodingContract/contracts
Step 2: find the corresponding "solver" of that contract object
Step 3: copy the solver to your local script as a new function
Step 4: modify the parameters of the function to (ns, data) without type
Step 5: modify the last line "return ...", to return the actual result instead of the comparison between result and "ans".
Step 6: add a new case for this contract to the switch case clauses in your local script, and point to this new function.

Take "Array Jumping Game II" for example.
Step 1: go to the file, and by ctrl+f, we can find line 391
https://github.com/danielyxie/bitburner/blob/dev/src/data/codingcontracttypes.ts#L391
Step 2: look below and find the line 393,

solver: (data: number[], ans: string): boolean => {
Step 3: copy the solver to local, like
function someNameYouGiveToThisAlgorithm(data, ans) {
... // The body of the solver copied
return jumps === parseInt(ans, 10); // The last line of the copied body
}
Step 4: modify the parameters
function someNameYouGiveToThisAlgorithm(ns, data) {
Step 5: modify the return value
return jumps;
Step 6: you can see the switch case part in the script of this tutorial, something like this
		case "Minimum Path Sum in a Triangle":
			answer = minPathSumInTriangle(ns, data);
			break;
Add a new case with the same structure, but use the exact contract name and the new function's name.
		case "Array Jumping Game II":
			answer = someNameYouGiveToThisAlgorithm(ns, data);
			break;

Then, it's done.