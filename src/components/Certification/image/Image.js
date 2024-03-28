const Image=({item})=>{
    const i=item;
    console.log(i)
return (
    <div style={{
        width:"70%"
    }}>
          <img src={i.src} alt={i.alt}/>
    </div>
)
}
export default Image;