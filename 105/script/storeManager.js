const LS_KEY="users";
function saveUser(user){
    // load the old data from the LS
    let oldData=readUsers();
    //merge the data
    oldData.push(user);

    let val=JSON.stringify(oldData);//parse into a JSON string

    localStorage.setItem(LS_KEY, val);//send it in to the local storage
}
function readUsers(){
    //get the values from localstorage
    let data = localStorage.getItem(LS_KEY);
    if(!data){//not users
        return[];//create the array first registration
    }else{
        let list=JSON.parse(data);  //parse string back into obj
        return list;
    }
}