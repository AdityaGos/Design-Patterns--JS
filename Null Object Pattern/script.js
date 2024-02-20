class User {

    constructor(id, name)
    {
        this.id = id;
        this.name = name;
    }

    hasAccess()
    {
        return this.name=='Bob'
    }
}
// Null version of the object




const users = [ new User(1,'Bob'),new User(2,'Alice')]


function getUser(id)
{
    return users.find(user=> user.id==id);
}


function printUser(id)
{
    const user = getUser(id)

    /*  

    now we are explicitly tell console.log to print Guest if the user doesn't exist , not logged in
    this is issue because every time we have to remember to log guest if the user doesn't exist

    */

    let name =  'Guest'
    if(user != null && user.name != null) name = user.name

    console.log('Hello, ' + name)

    // this will throw an error if the user doesn't have the hasAccess function or user is null
    // lot if extra checking is needed 

    if(user != null && user.hasAccess != null && user.hasAccess)
    {
        console.log('You have access')
    }
    else console.log('You are not allowed')
}