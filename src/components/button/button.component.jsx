import "./button.style.scss";

const Button = ({handleSubmit, children}) => {
    return (
        <button type='button' className="button" onClick={handleSubmit}>
            {children}
        </button>
    )

};

export default Button;