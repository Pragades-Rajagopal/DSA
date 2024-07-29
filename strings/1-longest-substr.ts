// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstr = (str: string): number => {
    let s: number = 0, maxLength: number = 0, lastSeenValue: number = 0;
    let map: Map<string, number> = new Map();
    for (let p=0; p<str.length; p++) {
        let current: string = str[p];
        lastSeenValue = map.get(current);
        if(lastSeenValue >= s) s = lastSeenValue + 1;
        maxLength = Math.max(lastSeenValue, p-s+1); 
        map.set(current, p); 
    }
    return maxLength;
}

const str: string = "abcabcbb";
const result = lengthOfLongestSubstr(str);
console.log(result);