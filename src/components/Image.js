function Image(props) {
    return (
        <div className="generator__card">
            <img src={props.picture} alt="" className="generator__image"/>
            <button type="button" className="generator__button" onClick={props.click}>Нажми меня</button>
        </div>
    )
}
export default Image