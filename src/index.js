module.exports = function check(str, bracketsConfig) {
    let OpenArr = [];
    let CloseArr = [];
    let strArr = str.split('');
    for(let i = 0; i < bracketsConfig.length; i++)
    {
        OpenArr[i] = bracketsConfig[i][0];
        CloseArr[i] = bracketsConfig[i][1]; 
    }
    if( strArr.length % 2 != 0 ) return false;
    let numb;
    for(let i = 0; i < strArr.length; i++)
    {
        numb = null;
        if(strArr[i] === undefined) continue;
        for(let j = 0; j < OpenArr.length; j++)
        {
            if(strArr[i] == OpenArr[j])
            {
                numb = j;
                break;
            }
        }
        if(numb === null) return false;
        for(let k = i + 1; k < strArr.length; k++)
        {
            if(strArr[k] == CloseArr[numb])
            {
                strArr[i] = undefined;
                strArr[k] = undefined;
                break;
            }
        }
    }
    for(let i = 0; i < strArr.length; i++) console.log(strArr[i]);
    for(let i = 0; i < strArr.length; i++)
    {
        if(strArr[i] !== undefined) return false;
    }
    return true;
}
