let arr = [1,1,2,3,3,4,4,8,8]
var singleNonDuplicate = function(nums) {
//     make helper function for charMap
//     check to see if the value is equal to 1
//     return that key
    const numberMap = buildNumMap(nums)
    for (number in numberMap) {
      // console.log(number)
        if (numberMap[number] === 1) {
          return number
        }
    }
};

function buildNumMap(arr) {
  const numMap = {}
    for (let num of arr)
      numMap[num] = numMap[num] +1 || 1;
      // console.log(numMap[num])
  return numMap;
}

// buildNumMap(arr)
singleNonDuplicate(arr)
// for (number in numberMap)
