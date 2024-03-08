import apiData from "../services/api";

const Circuits = () => {
    const { circuits, isLoading, error } = apiData();

    if (isLoading) {
        return (
            <div className="bg-slate-200 h-screen w-screen flex justify-center items-center">
                <h2 className="font-bold text-black text-2xl">Loading...</h2>
            </div>
        );
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <section
            className="flex gap-2 flex-wrap max-w-screen-2xl m-auto bg-darkGGray p-16">
            {circuits.map((circuit) => (
                <div
                    key={circuit.id}
                    className="p-4 bg-darkGGray border-t-2 border-r-2 border-ferrariYellow rounded-e-md">
                    <h2 className="text-lightGray font-nunito text-3xl">{circuit.name}</h2>
                    <h3 className="text-lightGray font-nunito text-2xl">{circuit.competition.name}</h3>
                    <div>
                        <img src={circuit.image} alt={circuit.name} />
                    </div>
                    <p className="text-lightGray font-bebasNeue text-xl">First GP: <span>{circuit.first_grand_prix}</span></p>
                    <p className="text-lightGray font-bebasNeue text-xl">Laps: <span className="text-ferrariRed text-sm">{circuit.laps}</span></p>
                    <p className="text-lightGray font-bebasNeue text-xl">Length: <span className="text-ferrariRed text-sm">{circuit.length}</span></p>
                    <p className="text-lightGray font-bebasNeue text-xl">Race distance: <span className="text-ferrariRed text-sm">{circuit.race_distance}</span></p>
                    <p className="text-lightGray font-bebasNeue text-xl">Record: <span className="text-ferrariRed text-sm">{circuit.lap_record.time}</span></p>
                    <p className="text-ferrariRed text-sm">{circuit.lap_record.driver}</p>
                </div>
            ))}
        </section>
    );
};

export default Circuits;


// 0: Object { id: 1, name: "Albert Park Circuit", image: "https://media.api-sports.io/formula-1/circuits/1.png", … }
//
// capacity: 80000
//
// competition: Object { id: 1, name: "Australia Grand Prix", location: {…} }
//
// id: 1
//
// location: Object { country: "Australia", city: "Melbourne" }
//
// city: "Melbourne"
//
// country: "Australia"
//
// <prototype>: Object { … }
//
// name: "Australia Grand Prix"
//
// <prototype>: Object { … }
//
// first_grand_prix: 1996
//
// id: 1
//
// image: "https://media.api-sports.io/formula-1/circuits/1.png"
//
// lap_record: Object { time: "1:24.125", driver: "Michael Schumacher", year: "2004" }
//
// driver: "Michael Schumacher"
//
// time: "1:24.125"
//
// year: "2004"
//
// <prototype>: Object { … }
//
// laps: 58
//
// length: "5.303 Kms"
//
// name: "Albert Park Circuit"
//
// opened: 1953
//
// owner: null
//
// race_distance: "307.574 kms"