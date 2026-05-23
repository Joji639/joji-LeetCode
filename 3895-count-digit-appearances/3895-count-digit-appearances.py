class Solution:
    def countDigitOccurrences(self, nums: list[int], digit: int) -> int:
        """ count=0
        for i in range(len(nums)):
            a=str(nums[i])
            for j in range(len(a)):
                if a[j] == str(digit):
                    count+=1
        return count"""
        return str(nums).count(str(digit))