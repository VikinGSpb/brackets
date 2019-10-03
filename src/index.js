module.exports = function check(str, bracketsConfig) {
    /*let OpenArr = [];
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
        numb = null;
        for(let i = strArr.length - 2; i >= 0; i--)
        {
            for(let j = 0; j < OpenArr.length; j++)
            {
                if(strArr[i] == OpenArr[j] & OpenArr[j] != CloseArr[j])
                {
                    numb = j;
                    position = i;
                    break;
                }
            }*/
            /*if(position === i) 
            {
                if(OpenArr[numb] === CloseArr[numb] & position > 0 & strArr[position] === strArr[position - 1]) position -= 1;

                break;
            } */
            /*if(position === i) break;
            else return false;
        }
        for(let k = position + 1; k < strArr.length; k++)
        {
            for(let j = 0; j < CloseArr.length; j++)
            {
                if((strArr[k] == CloseArr[j]) & (CloseArr[j] != OpenArr[j]) & (j != numb)) return false;
            }
            if(strArr[k] == CloseArr[numb])
            {
                if((k - position + 2) % 2 != 0)
                {
                    strArr.splice(position, (k - position + 1));
                    break;
                } else return false;
            }
        }
        for(let i = 0; i < strArr.length; i++) console.log(strArr[i]);*/
       /*if(strArr[position + 1] == CloseArr[numb])   
        {
            strArr.splice(position, 2);
        } else return false;*/
    /*}
    return true;*/
    let strArr = str.split('');
    let config = bracketsConfig;
    if( strArr.length % 2 != 0 ) return false;
    for(let i = 0; i < strArr.length; i++)
    {
        if(i < 0) i = 0;
        for(let j = 0; j < config.length; j++)
        {
            if(strArr[i] === config[j][0] & strArr[i + 1] === config[j][1])
            {
                strArr.splice(i, 2);
                i -= 2;
                break;
            }
        }
    }
    if(strArr.length > 0) return false;
    else return true;
}
