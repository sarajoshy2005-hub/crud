let users = [];



if(sessionStorage.getItem("users")){
    users=JSON.parse(sessionStorage.getItem("users"));
   displayuserlist()
}



userform.addEventListener("submit", (e) => {
    e.preventDefault();
   const useridinput =userid.value;
    const usernameinput =username.value;
    const userpriceinput = userprice.value;
    const userquantityinput = userquantity.value
    console.log(usernameinput,useridinput,userpriceinput,userquantityinput);


    if(usernameinput && useridinput && userpriceinput && userquantityinput){
      const editindex =editstatus.value

      if(editindex==""){
   users.push({userid:useridinput,username:usernameinput,userprice:userpriceinput,userquantity:userquantityinput})
        console.log(users);
      }else{
        users[editindex] = {
        userid:useridinput,
        username:usernameinput,
        userprice:userpriceinput,
        userquantity:userquantityinput
    }
      }}
      else{
        confirm("please fill the form")
      }

        



        
        userform.reset();
         sessionStorage.setItem("users",JSON.stringify(users));
        displayuserlist()
        
       
    
})


function displayuserlist(){
    result.innerHTML = ""
    users.forEach((item,index)=>{
    result.innerHTML +=`
    
    <tr>             <td>${index +1}</td>
                    <td>${item.userid}</td>
                    <td>${item.username}</td>
                    <td>${item.userprice}</td>
                    <td>${item.userquantity}</td>
                    <td>
                        <button onclick="edituser(${index})" class="btn btn-warning">Edit</button>
                        <button   onclick="deleteuser(${index})"class="btn btn-danger">Delete</button>
                    </td>
                </tr>
    
    
    `
    })
}

function deleteuser(userindex){
    
   if(confirm("Are you sure you want to delete this user?")){
       
     users.splice(userindex,1);
     
   sessionStorage.setItem("users",JSON.stringify(users));
   }

   displayuserlist()
}


function edituser(userindex){
    const useredit = users[userindex]
    console.log(useredit)
    userid.value = useredit.userid
    username.value = useredit.username
    userprice.value = useredit.userprice
    userquantity.value = useredit.userquantity
     editstatus.value = userindex
     console.log(editstatus.value)
     

}

