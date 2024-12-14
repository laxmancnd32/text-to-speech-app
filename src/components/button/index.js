import "./style.scss";

const Button = (props) => {
    const { label = ''} = props;
    return (
        <button className="button">{label}</button>
      );
}

export default Button;