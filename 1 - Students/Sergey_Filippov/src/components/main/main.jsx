
import React from "react" 




export default () => {
        
        let mess = [];
         function arPush(){mess.push("Нормально");}
         
        return(
            <div>
                <h1>Как дела?)</h1>
                <h2> { mess } </h2>
                <button onClick = {arPush} >Нормально</button>
            </div>
        )
         
       
}




