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
    let numb = null;
    for(let i = 0; i < strArr.length; i++)
    {
        for(let j = 0; j < OpenArr.length; j++)
        {
            if(str[i] == OpenArr[j])
            {
                numb = i;
                break;
            }
        }
        for(let k = i + 1; k < strArr.length; k++)
        {
            if(strArr[k] == CloseArr[numb])
            {
                delete strArr[i];
                delete strArr[k];
                break;
            }
        }
    }
    for(let i = 0; i < strArr.length; i++)
    {
        if(strArr[i]) return false;
    }
    return true;
}
