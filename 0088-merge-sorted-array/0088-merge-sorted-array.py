class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        left =0
        right=0
        while left < len(nums1) and right < len(nums2):
            if nums1[left] == 0:
                nums1[left]=nums2[right]
                left+=1
                right+=1
            else:
                left+=1
        return nums1.sort()
