var majorityElement = function(nums) {
  let numMap = {};
  let compare = 0;
  let result;

    for (let i = 0; i < nums.length; i++) {
      let number = nums[i];

      if (numMap[number] === undefined) {
         numMap[number] = 1;
      } else {
         numMap[number] = numMap[number] + 1;
      }

      if(numMap[number] > compare) {
         compare = numMap[number];
         result = nums[i];
      }
    }
    return result
};

majorityElement([2,2,1])
