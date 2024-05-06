export default function Gallery({contentType,image}){
    
    return (
        <div>
            <div>{contentType}</div>
            <div><img src={image} alt="image not found" /></div>
        </div>
    )
}