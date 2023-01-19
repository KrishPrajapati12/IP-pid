function validate()
{
var username=document.getElementById("uname").value;
var password=document.getElementById("Password").value;
if(username.trim()!="Krish" && password.trim()!="krish")
{
    alert("Incorrect Password or Username");
    return false;

}
if(username.trim()=="" || password.trim()=="")
{   
    alert("No Blank value allowed")
   return false;
}
else if(username.trim()=="Krish" && password.trim()=="krish"){
    return true;
}


}