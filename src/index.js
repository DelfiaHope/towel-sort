
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArray = []
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[i].length; j ++) {
      if(i%2 === 0){
        
        newArray.push(matrix[i][j])
      }else{
        let colInd = matrix[i].length - 1 - j;
        newArray.push(matrix[i][colInd])
      }
      
    }
  }
 return newArray
  
}

