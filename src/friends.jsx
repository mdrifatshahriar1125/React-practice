import { use } from "react"
import Friend from "./friend"
export default function Friends({friends}){
    
    const friendsall=use(friends)
    console.log(friendsall)

    return(
     
       
        <div className="card1">
            <h2>total friend : {friendsall.length}</h2>
        {
        friendsall.map(friendeach=><Friend key={friendeach.id} friendeach={friendeach}></Friend>)
        

}
        </div>
       
    )
}