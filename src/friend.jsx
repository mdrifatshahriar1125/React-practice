export default function Friend({friendeach}){

    console.log(friendeach)
    const {name,email,phone}=friendeach;

    return(
          <div className="card1"> 
          <h3>name : {name}</h3>
          <h3>email : {email}</h3>
          <h3>address : {phone}</h3>

       </div>
    )
}