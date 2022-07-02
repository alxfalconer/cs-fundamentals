// Write a function mergeRanges() that takes an array of multiple meeting time ranges 
// and returns an array of condensed ranges.

const input = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

// Expected output:
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]


const input2 = [{ startTime: 2, endTime: 4 }, { startTime: 1, endTime: 3 }]
// Expected output2:
//[{ startTime: 1, endTime: 4 }]


// Complexity: O(nlgn) time and O(n) space.

console.log(mergeRanges(input));