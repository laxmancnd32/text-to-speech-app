import "./style.scss";

const Button = (props) => {
    const { label = '', onClick = () => {}, disabled = false, loading = false} = props;
    return (
        <button className="button" onClick={onClick} disabled={disabled} >
          {loading && <span class="loader"></span>}
          {label}
        </button>
      );
}

export default Button;