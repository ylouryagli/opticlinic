import CardItem from "../../components/card-item/card-item.components";
import "./card-items.style.scss";

const CardItems =({shopsdata})=> {
    return(
        <div className="grid-wrapper">
            {
            shopsdata.map ((user )=>{
                return(
            <CardItem 
            key= {user.id} 
            imageUrl={user.imageUrl}
            name={user.name} 
            price={user.price}
            />
                )
                })
        }

        </div>
        )
        
        
        
};

export default CardItems;


