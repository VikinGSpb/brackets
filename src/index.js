module.exports = function check(str, bracketsConfig) {
    let OpenArr = [];
    let CloseArr = [];
    for(let i = 0; i < bracketsConfig.length; i++)
    {
        OpenArr[i] = bracketsConfig[i][0];
        CloseArr[i] = bracketsConfig[i][1]; 
    }
}
