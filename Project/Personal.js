
function Login(){
     name1=document.getElementById("Studentname").value
     password=document.getElementById("Studentpassword").value
     if(name1=="21CAB234"&&password=="21CAB234"||name1=="21CAB240"&&password=="21CAB240")
     {
        alert("Login SucessFully")
     }
     else
     {
        alert("Login Fail")  
     }
    
}
function lo()
{
   n=document.getElementById("Login")
   btn= document.getElementById("bt")
     let Alert=document.createElement("div")
     Alert.className="Alert"
     textnode=document.createTextNode("SuccessFUlly Rigesterd ✅")
     Alert.append(textnode)
     n.append(Alert)
}
lo()


   





