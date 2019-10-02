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
    let numb = null, position = null;
    while(strArr.length > 0)
    {
        position = null;
        for(let i = strArr.length - 2; i >= 0; i--)
        {
            for(let j = 0; j < OpenArr.length; j++)
            {
                if(strArr[i] == OpenArr[j])
                {
                    numb = j;
                    position = i;
                    break;
                }
            }
            if(position === i) break;
        }
        if(strArr[position + 1] == CloseArr[numb])
        {
            strArr.splice(position, 2);
        } else return false;
    }
    return true;
}
