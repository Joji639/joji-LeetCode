class Solution:
    def reverseWords(self, s: str) -> str:
        a=s.split()
        b=[]
        for i in a:
            b.append(i)
        b.reverse()
        return " ".join(b)

        