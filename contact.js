function validate(){

    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var phnum=document.getElementById("ph").value;

    alert(fname);

    if(fname.trim()=="" || lname.trim()=="" || email.trim()=="" || phnum.trim()==""){
        alert("No Blank Space");
        return false;
    }
    else{
        return true;
    }


}