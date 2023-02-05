import {useState} from 'react';
import Button from '../../components/button/button.component.jsx';
import "./collection-filter.style.scss";

const defaultFormFilters =  {
    gender: [],
    type: [],
    brand: []
}

const CollectionFilter =({clicking, brands})=> {
    const [formFilters]= useState(defaultFormFilters);
    const {gender, type, brand} = formFilters;

    const handleChangeGender = (event) => {
        const {value, checked}= event.target;
        if(checked===false){
            const index = gender.indexOf(value)
            gender.splice(index, 1);
        }else{
            gender.push(value);
        }
    }
    const handleChangeType = (event) => {
        console.log(type)
        const {value, checked}= event.target;
        if(checked===false){
            const index = type.indexOf(value)
            type.splice(index, 1);
        }else{
            type.push(value);
        }
        console.log(type)
    }
    const handleChangeBrand = (event) => {
        const {value, checked}= event.target;
        if(checked===false){
            const index = brand.indexOf(value)
            brand.splice(index, 1);
        }else{
            brand.push(value);
        }
        console.log(brand)
    }

    
    const handleSubmit = () => {
       clicking(gender, type, brand);

    };
    return(

        <form className='collection-filter-container'>
            <h2 className='filter-heading'>Gender</h2>
            <input type="checkbox" id="men" name="gender" value="men" onChange={handleChangeGender} ></input>
            <label htmlFor="men">Men</label>
            <input type="checkbox" id="women" name="gender" value="women" onChange={handleChangeGender} ></input>
            <label htmlFor="women">Women</label>
            <input type="checkbox" id="children" name="gender" value="children" onChange={handleChangeGender} ></input>
            <label htmlFor="children">Children</label>
            <h2 className='filter-heading'>Type</h2>
            <input type="checkbox" id="sunglasses" name="type" value="sunglasses" onChange={handleChangeType} ></input>
            <label htmlFor="sunglasses">Sunglasses</label>
            <input type="checkbox" id="regular" name="type" value="regular" onChange={handleChangeType} ></input>
            <label htmlFor="regular">Regular Glasses</label>
            <h2 className='filter-heading'>Brand</h2>
            {brands.map(item => {
                return <div key={item}>
                    <input type="checkbox" id={item} name="brand" value={item} onChange={handleChangeBrand} ></input>
                    <label htmlFor={item}>{item}</label>
                </div>
                
                })}
                <div className='filter'>
                <Button  type='button' handleSubmit={handleSubmit}>submit here</Button>
                </div>
            
        </form>
           
    )};
           
                  
          

export default CollectionFilter;
