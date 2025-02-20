const StarshipCard = (props) => {
    return (
        <>
            <h4>{props.starship.name}</h4>
            <p>Class: {props.starship.starship_class}</p>
            <p>Manufacturer: {props.starship.manufacturer}</p>
            <p>Model: {props.starship.model}</p>
        </>
    )
}

export default StarshipCard