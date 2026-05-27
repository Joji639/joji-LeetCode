class Solution:
    def firstMatchingIndex(self, s: str) -> int:
        a=list(s)
        a.sort()
        left=0
        right=len(s)-1
        while left < len(a):
            if s[left] == s[right]:
                return left
            elif s[left] != s[right]:
                left+=1
                right-=1
        return -1
