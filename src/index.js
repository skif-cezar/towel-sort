
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var newArr = [];
    var arrSort = [];
    if(matrix == undefined){
        return [];
    }
    for(let i = 0; i < matrix.length; i++){
        if(matrix.length == 0){
            return [];
        }else if(i % 2 == 0){
            for(let j = 0; j < matrix[i].length; j++){
                newArr.push(matrix[i][j]);
            }
        } else {
            matrix[i].reverse();
            for(let j = 0; j < matrix[i].length; j++){
                newArr.push(matrix[i][j]);
            }
        }
    }
    return newArr;
};
