class Solution:
    def reverseDegree(self, s: str) -> int:
        ans,indx =  0, 1
        for i in s:
            ans+= (26-(ord(i) - ord("a"))) * indx
            indx+=1
        return ans




        
