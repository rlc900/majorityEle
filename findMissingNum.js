numberArr = (arr) => {
    let missingArr=[];
    let l = Math.max(...arr);//12
    // console.log(l)
    for(i=1; i < l ; i++) {
      // console.log(arr.indexOf(i))
        if(arr.indexOf(i) < 0) {
          // console.log('line')
            missingArr.push(i);
        }
    }
    return missingArr;
}
numberArr([3,4,1,2,6,8,12]);
