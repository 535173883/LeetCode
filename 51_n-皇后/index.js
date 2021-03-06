var solveNQueens = function (n) {
  // [1,2,3,4]
  // [5,6,7,8]
  // [9,10,11,12]
  // [13,14,15,16]

  // 1.行不能一样  按照行查找
  // 2.列不能一样
  // 3. 行 - 列 一样       //0,1   1,2    2,3
  // 4. 行  +列 一样        //0,2   1，1    2,0
  // tmp的索引是行数据，值是列数据 摆放的棋子
  //[2,4,1]
  let ret = [];
  //查找第0行
  find(0, []);
  return ret;
  function find(row, tmp = []) {
    if (row === n) {
      //找完了  n-1就已经最后一行了  tmp就是所有的摆放位置
      ret.push(
        tmp.map((c) => {
          let arr = new Array(n).fill(".");
          arr[c] = "Q";
          return arr.join("");
        })
      );
    }
    //1.如何查找
    for (let col = 0; col < n; col++) {
      //是不是不能放
      let cantSet = tmp.some((ci, ri) => {
        //ci和ri是之前摆放棋子的行列索引
        //col和row是当前位置的索引
        return ci === col || ri - ci === row - col || ri + ci === row + col;
      });
      if (cantSet) {
        continue;
      }
      //如果能放，直接下一行
      find(row + 1, [...tmp, col]);
    }
  }
};
