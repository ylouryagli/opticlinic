import React, { Component} from 'react';
import CardItems from "../../sections/card-items/card-items.section";
import CollectionFilter from "../../sections/collection-filter/collection-filter.section";
import SHOPS_DATA from "../../shop-data.json";
import './collection.style.scss';





class Collection extends Component {
    constructor() {
        super()
        this.state={
            shopsdata: []
        };
        this.dataFilter = this.dataFilter.bind(this);
    }

    componentDidMount(){
        this.setState({shopsdata : SHOPS_DATA})
        
    }

     dataFilter(gender,type, brand){
       console.log(brand)
        this.setState({shopsdata: SHOPS_DATA.filter(data => 
           (gender.includes(data.gender) || gender.length === 0) &&
            (type.includes(data.type) || type.length === 0) &&
            (brand.includes(data.brand) || brand.length === 0)
           )
        })
        
    } 
  


   
 render() {
    const { shopsdata }= this.state;
    const allBrands = SHOPS_DATA.map(data => {return data.brand});
    const brands = allBrands.filter((item, index) => allBrands.indexOf(item) === index);
    return(
        <div className='collection-page'>
            <CollectionFilter clicking={this.dataFilter} brands={brands}/>
            <CardItems shopsdata={shopsdata}/>
        </div>

    )
    

 }
    

};
   
export default Collection;
