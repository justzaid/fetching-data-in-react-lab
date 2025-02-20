import StarshipCard from "./StarshipCard"

const StarshipList = (props) => {
    let display = ''

    if (props.search) {
        let filteredStarShips = props.starships.filter((starship) => {
            return starship.name === props.search
        })
        console.log(filteredStarShips)
        display = <div><StarshipCard starship = {filteredStarShips[0]} /></div>
    } else {
        display =
                <div>
                    <p>Number of results: {props.starships.length}</p>
                    {props.starships.map((starship) => (
                    <StarshipCard starship = {starship} />
                    ))}
                </div>
    }
    return (
        <>
            <h3>Starships</h3>
            {props.starships ? ( display ) : ('Loading...')}
        </>
    )
}

export default StarshipList