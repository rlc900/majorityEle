var arr1 = [1,2,3,4]
var arr2 = [5,8,10]

function mergeArrays(arr1, arr2) {
  let mergedArr = [arr1.length + arr2.length]
  // console.log(mergedArr)
  let i = 0;
  let k = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr[k++] = arr1[i++]
      // console.log(mergedArr)
    } else {
      mergedArr[k++] = arr2[j++]
    }
  }

  while (i < arr1.length) {
    mergedArr[k++] = arr1[i++]
  }

  while (j < arr2.length) {
    mergedArr[k++] = arr2[j++]
  }

  return mergedArr
}

mergeArrays(arr1, arr2)
