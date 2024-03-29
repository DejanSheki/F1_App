import apiData from "../services/api";

const DriversStandings = () => {
    const { driversStandings, isLoadin, error } = apiData();

    if (isLoadin) {
        return (
            <div className="bg-slate-200 h-screen w-screen flex justify-center items-center">
                <h2 className="font-bold text-black text-2xl">Loading...</h2>
            </div>
        )
    }
    if (error) {
        return (
            <div>Error: {error}</div>
        )
    }
    if (driversStandings) {
        return (
            <section
                className="flex gap-2 flex-wrap">
                <h1>DriversS</h1>
                {driversStandings.map((driver, index) => (
                    <div
                        className="p-4 bg-darkGGray border-t-2 border-r-2 border-ferrariYellow"
                        key={index}>
                        <p>{driver.position}</p>
                        <p>{driver.points}</p>
                        <p>{driver.driver.name}</p>
                        <img src={driver.driver.image} alt={driver.name} />
                    </div>
                ))}
            </section>
        )
    }

}

export default DriversStandings;