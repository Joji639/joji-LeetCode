class Solution:
    def concatWithReverse(self, nums: list[int]) -> list[int]:
        newarray=[]
        newarray.extend(nums)
        nums.reverse()
        newarray.extend(nums)
        return newarray