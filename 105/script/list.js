function createRow(usersArray){
    for(let i=0;i<usersArray.length;i++){
        let user = userArray[i];
        let tmp=` 
            <tr>
                <td>${user.email}</td>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
            </tr>
        `; //creating html template
        $("#userList").append(tmp);
    }
}
function init(){
    console.log("Listing");
    let users=readUsers();
    createRow(users);

}
window.onload=init;