class User {

    constructor(id, name)
    {
        this.id = id;
        this.name = name;
    }

    hasAccess()
    {
        return this.name==='Bob'
    }
}
// Null version of the object
class NullUser {

    constructor()
    {
        this.id = -1;
        this.name = 'Guest';
    }

    hasAccess()
    {
        return false
    }
}



const users = [ new User(1,'Bob'),new User(2,'Alice')]


function getUser(id)
{
    const user= users.find(user=> user.id===id);
    if( user == null)
    {
        console.log('inside null')
        return new NullUser()
    }
    else { return user}
}


function printUser(id)
{
    const foundUser = getUser(id)

    /*  

    now we are explicitly tell console.log to print Guest if the user doesn't exist , not logged in
    this is issue because every time we have to remember to log guest if the user doesn't exist

    */

    // let name =  'Guest'
    // if(user != null && user.name != null) name = user.name

    console.log('Hello, ' + foundUser.name)

    // this will throw an error if the user doesn't have the hasAccess function or user is null
    // lot if extra checking is needed 

    // if(user != null && user.hasAccess != null && user.hasAccess())
    if(foundUser.hasAccess())
    {
        // console.log(foundUser.hasAccess)
        console.log('You have access')
    }
    else { console.log('You are not allowed') }
}