import { useState } from 'react';
import './certification.css'
import Image from './image/Image'
const Img=[
    {
        id:1,
        src:"https://images.freeimages.com/images/large-previews/aed/three-bees-on-sunflower-1337029.jpg?fmt=webp&w=500",
        alt:"image 1"
    },{
        id:2,
        src:"https://images.freeimages.com/variants/59tZ1h89y8fuRnBcqUuUjEWo/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500",
        alt:"image 2"
    },{
        id:3,
        src:"https://images.freeimages.com/images/large-previews/aed/three-bees-on-sunflower-1337029.jpg?fmt=webp&w=500",
        alt:"image 3"
    },{
        id:4,
        src:"https://images.freeimages.com/variants/DVg6TTGcRiJSdhEbY212DbAu/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&w=500",
        alt:"image 4"
    },{
        id:5,
        src:"https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg?fmt=webp&w=500",
        alt:"image 5"
    },
]

const menu = [
    {
      id: 1,
      title: "HTML",
    }, {
      id: 2,
      title: "CSS",
    }, {
      id: 3,
      title: "JavaScript",
    },{
      id: 4,
      title: "ReactJs",
    },{
      id: 5,
      title: "NodeJS",
    }
  ];

 
const Certification=()=>{
    const [current,setCurrent]=useState();
    const [Imag,setImag]=useState([]);
  
    function chagne(id){
      setCurrent(id);
      const neww=Img.filter((item)=>item.id==id);
      setImag([...neww])
    }
    const images=[{alt:"name1",src:"link1"},{alt:"name2",src:"link2"},{alt:"name3",src:"link3"}]
    return (
        <div className="border">
            <div className="title">
                <div className="menu">
                    <button> Menu</button>
                    <div>
                        {
                        menu.map((item)=>{
                           return(
                            <ul>
                            <button onClick={()=>chagne(item.id)}> {item.title}</button>
                        </ul>
                           )
                        })
                        }
                    </div>
                </div>
                <div className="certification">Certification</div>
            </div>
            <div className="image">
                 {
                    Imag.map((item)=>{
                        return (
                            <Image item={item}/>
                        )
                    })
                 }
            </div>
        </div>
    )
}
export default Certification;