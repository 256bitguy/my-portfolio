import   './academics.css'
import List from './list/List';
const Academics=()=>{
    const lists=[  {name:"Btech"}];
    return (
            <div  className='border'>
                <div className="title">
                    <div className="menu">menu</div>
                    <div className="academics">Academics</div>
                     
                </div>
               <div>
                {
                    lists.map((item)=>{
                        return(
                            <List title={item}/>
                        )
                    })
                }
               </div>
             </div>
         
    )
}
export default Academics;