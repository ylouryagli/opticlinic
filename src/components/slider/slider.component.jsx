import "./slider.style.css";


const Slider =({slideDirection})=>{
    console.log(slideDirection);
    return (
        <div>
            <div className="slider-container">
                    <img className={`image ${slideDirection}`} src="https://i.ibb.co/ZYW3VTp/brown-brim.png " alt="glasses"/>
            </div>
        </div>
        

    )
};

export default Slider;