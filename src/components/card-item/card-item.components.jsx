import "./card-item.style.scss";




const CardItem = ({imageUrl, name, size, color, price})=> {

    return (

        <div className="card-item-container grow"> 
            <img className="card-item-image" src={imageUrl}
             alt='glasses'/>
              
            
            <div>
            <h2> {name}</h2>
            <p>{size}</p> 
            <p>{color}</p>
            </div>
            <div className="price">
                MAD{price}
            </div>

            
        
        </div>
     
    )
     }
        

    


export default CardItem;