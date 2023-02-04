import React, { Component} from 'react';
import CardItems from "../../sections/card-items/card-items.section";
import CollectionFilter from "../../sections/collection-filter/collection-filter.section";
import SHOPS_DATA from "../../shop-data.json";





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

     dataFilter(gender,brand){
        console.log(gender, brand);
        this.setState({shopsdata: SHOPS_DATA.filter(data => {if(data.gender===gender && data.brand===brand)return data})})
    } 
  


   
 render() {
    const { shopsdata }= this.state;
    
    return(
        <div>

            <CollectionFilter clicking={this.dataFilter}/>
            <CardItems shopsdata={shopsdata}/>

        </div>

    )
    

 }
    

};
   
export default Collection;
