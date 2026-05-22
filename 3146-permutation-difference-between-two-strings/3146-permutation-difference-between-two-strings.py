class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        m=0
        for i in range(len(s)):
            char=s[i]
            a=s.index(char)
            b=t.index(char)
            m+=abs(a-b)
        return m
    




