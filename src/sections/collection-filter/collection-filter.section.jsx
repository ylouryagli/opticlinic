import "./collection-filter.style.scss";
import shopsdata from"../../shop-data.json";



const CollectionFilter =()=> {

    return(

        <div>
            <div id="collection" className="collection-filter-container">
                    <button id="a" className="option men"> men </button>
                    <button id="b" className="option wom"> women </button>
                    <button id="c" className="option children"> children </button>
                    <button id="d" className="option sunglasses"> sunglasses</button>
            

            <div id="brand" className="brand-filter-container ">
           
           {
            shopsdata.map((data)=>{
                if (data.gender ==="men"){
                    return(
                    <button  className="option " key={data.id}>{data.brand}</button>)}
            
            })

           }
           </div>
            <div id="brand-women" className="brand-filter-container women">
                {
                    shopsdata.map((data)=>{
                        if (data.gender==="women"){
                            return(
                                <button className="option" key={data.id}>{data.brand}</button>
                            )

                        }
                    })
                }
            </div>
            <div id="brand-children" className="brand-filter-container children">
                {
                 shopsdata.map((data)=>{
                    if (data.gender==="children"){
                        return(
                            <button className="option" key={data.id}>{data.brand}</button>
                        )
                    }
                 })
                }
            </div>
            <div id="brand-sunglasses" className="brand-filter-container sunglasses">
                {
                    shopsdata.map((data)=>{
                        if (data.gender==="sunglasses")
                        return(
                            <button className="option" key={data.id}>{data.brand}</button>
                        )
                    })
                }
            </div>

            </div>
            </div>
           
    )};
           
                  
          

export default CollectionFilter;
