import Image from "./Image";

function Main(props) {

    return(
        <section className="generator">
            <Image picture={props.url} click={props.click} loading={props.loading}/>
        </section>
    )
}

export default Main