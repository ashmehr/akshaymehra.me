import "./Button.css";

export default function Button(props: { link: any; buttonText: any; }) {
    const {link, buttonText} = props;
    return (
    <>
        <div className="Button">
                <a href={ link }>{ buttonText }</a>
        </div>
    </>
    )
}