public class Main {
    public static void main(String[] args) {
        String a="abccba";
        int r=0;
        int start=0;
        int end=0;
        int result=checkpalindrom(a,a,r,start);
        System.out.println(result);
    }
    public int checkpalindrom(String s,String a,int r,int start){
        int end=0;
        
        int j=s.length()-1;
        for(int i=0;i<=j;i++){
            if(s.charAt(i)==s.charAt(j)){
                if(i==j)
                end++;
                else {
                    end+=2;
                }
                
                
            }
            if(start<end)
                start=end;
            j--;
        }
        if(r>=a.length()-1){
            return start;
        }
        checkpalindrom(s+a.charAt(++r),a,++r,start);
            
         return start;      
        
    }
}
