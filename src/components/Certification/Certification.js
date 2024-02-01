import './certification.css'
import Image from './image/Image'
const Certification=()=>{
    const images=[{alt:"name1",src:"link1"},{alt:"name2",src:"link2"},{alt:"name3",src:"link3"}]
    return (
        <div className="border">
            <div className="title">
                <div className="menu">menu</div>
                <div className="certification">Certification</div>
            </div>
            <div className="image">
                 {
                    images.map((item)=>{
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