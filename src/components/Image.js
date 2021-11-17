function Image(props) {
    return (
        <div className="generator__card">
            <img src={props.picture} alt="" className="generator__image"/>
            <button type="button" className="generator__button" onClick={props.click}>{props.loading}</button>
        </div>
    )
}
export default Image