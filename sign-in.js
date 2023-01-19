function validate(){


    var uname=document.getElementById("uname").value;
    var pwd=document.getElementById("pwd").value;
    var vpwd=document.getElementById("vpwd").value;
    var email=document.getElementById("email").value;
    var ph=document.getElementById("ph").value;

    if(uname.trim()=="" || pwd.trim()=="" ||  vpwd.trim()=="" || email.trim()=="" || ph.trim()==""){
        alert("Blank Space Not Allowed");
        return false;
    }

    else if(pwd!=vpwd){
        alert("Password are not Same");
        return false;
    }
    
    else{
        return true;
    }

}