import Button from "../Button/Button"
import "./ButtonContainer.css"

export default function ButtonContainer() {

    return(
    <>
        <div className="ButtonContainer">
            <Button link="/" buttonText="Home" />
            <Button link="about" buttonText="About" />
            <Button link="blog" buttonText="Blog" />
            <Button link="contact" buttonText="Contact" />
        </div>
    </>
    )
}