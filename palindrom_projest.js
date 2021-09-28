
function plndr1() {
    
document.write("<h1>Hello</h1>");
}
    
<h3>Put Value & Click Button to check its palindrome or not</h3>"
    <p id="demo"></p>
    <input type="" id="inp">
    <input type="button" id="btn" value="Click" onclick="plndr()" />
    <script>
        function plndr() {
    
    
            let n1 = document.getElementById("inp").value;
            let n = parseInt(n1);
            let r, b = 0;
            let temp = n;
            while (n > 0) {
                r = n % 10;//9 8
                n = Math.floor(n / 10);
                b = r + b * 10;
            }
    
            if (temp == b) {
                document.write("Palindome=", b);
                //console.log('value of temp',temp)
            }
            else {
                document.write("<br>" + "no. is not palindrome=", b);
    
            }
    
        }
    
    
    </script> 
} 
