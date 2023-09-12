const Btn = ({ text, style, onClick }) => {
    return (
        <button className="Btn" style={style} onClick={onClick}>
            {text}
        </button>
    );
};
export default Btn;
