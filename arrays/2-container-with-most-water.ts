// https://leetcode.com/problems/container-with-most-water/

const containerWithMostWaterBF = (heights: number[]) : number => {
    let maxArea: number = 0;
    for (let i=0; i<heights.length; i++) {
        for (let j=i+1; j<heights.length; j++) {
            let width: number = j-i;
            let height: number = Math.min(heights[i], heights[j]);
            let currentArea: number = width * height;
            maxArea = Math.max(maxArea, currentArea);
        }
    }
    return maxArea;
};

const containerWithMostWaterOptimized = (heights: number[]): number => {
    let maxArea: number = 0, i: number = 0, j: number = heights.length - 1;
    while (i<j) {
        let width: number = j-i;
        let height: number = Math.min(heights[i], heights[j]);
        let currentArea: number = width * height;
        maxArea = Math.max(maxArea, currentArea);
        if(heights[i]<=heights[j]) i++
        else j--
    }
    return maxArea;
}

const heights = [1,8,6,2,5,4,8,3,7];
const resultBF = containerWithMostWaterBF(heights);
const resultOptimized = containerWithMostWaterOptimized(heights);
console.log('BF result: ', resultBF);
console.log('Optimized result: ', resultOptimized);

/**
 * BF
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 * 
 * Optimized
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
