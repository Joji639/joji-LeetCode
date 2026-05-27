class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        m=list(s)
        left =0 
        right=len(m)-1
        while left < right:
            if not m[left].isalpha():
                left+=1 
            elif not m[right].isalpha():
                right-=1
            else:
                m[left],m[right]=m[right],m[left]
                left+=1
                right-=1
        return "".join(m)