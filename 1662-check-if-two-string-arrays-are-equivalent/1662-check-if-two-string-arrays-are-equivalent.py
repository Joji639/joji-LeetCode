class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        s="".join(word1)
        m="".join(word2)
        if s == m:
            return True
        else:
            return False
