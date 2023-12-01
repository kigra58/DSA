
/**
 * SS(N,S,ARR)
 * include---------> SS(N-1, S-ARR[N-1],ARR)
 * exclude---------> SS(N-1, S, ARR)
 *  
 * @param {*} set 
 * @param {*} N 
 * @param {*} sum 
 * @returns 
 */


function SS(set, N, sum){

    if (sum === 0)
        return true;

    if (N === 0)
        return false;

    if (set[N - 1] > sum){
        return SS(set, N - 1, sum);
    }

    const includeItem=SS(set, N - 1, sum - set[N - 1]);
    const excludeItem=SS(set, N - 1, sum);

    return includeItem || excludeItem;
};

const  set = [ 3, 34, 4, 12, 5, 2 ];
const sum = 9;
const res= SS(set,set.length,sum);

console.log("===============ressssss",res);



