// https://leetcode.com/problems/trapping-rain-water/

const trappingWater = (heights: number[]): number => {
    let left: number = 0, right: number = heights.length - 1,
    maxLeft: number = 0, maxRight: number = 0;
    let totalWater: number = 0;
    while (left < right) {
        if(heights[left] < heights[right]) {
            if(heights[left] >= maxLeft) maxLeft = heights[left];
            else totalWater += maxLeft - heights[left];
            left++ 
        } else {
            if(heights[right] >= maxRight) maxRight = heights[right];
            else totalWater += maxRight - heights[right];
            right--;
        }
    }
    return totalWater;
}

const heights = [0,1,0,2,1,0,1,3,2,1,2,1];
const totalWater = trappingWater(heights);
console.log(totalWater);

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 */