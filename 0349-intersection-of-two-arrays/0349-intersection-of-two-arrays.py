class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        s=set(nums1)
        m=set(nums2)
        t=s.intersection(m)
        return list(t)