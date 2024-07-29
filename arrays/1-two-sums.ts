// https://leetcode.com/problems/two-sum/

const twoSumBF = (arr: number[], target: number): number[] => {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}


const twoSumOptimized = (arr: number[], target: number): number[] => {
    let map: Map<number, number> = new Map();
    for (let i=0; i<arr.length; i++) {
        let current: number = arr[i];
        let diff: number = target - current;
        if(map.has(diff)) return [map.get(diff)!, i];
        map.set(current, i);
    }
    return [];
}


const arr = [2,7,9,11,13];
const target = 20;
const resultBF = twoSumBF(arr, target);
const resultOptimized = twoSumOptimized(arr, target);
console.log('BF result: ', resultBF);
console.log('Optimized result: ', resultOptimized);


/**
 * BF 
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 * 
 * Optimized
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
