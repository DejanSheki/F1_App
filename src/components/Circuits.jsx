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
        <section className="flex gap-2 flex-wrap">
            {circuits.map((circuit) => (
                <div key={circuit.id} className="p-2 bg-gray-600">
                    <h2 className="text-white">{circuit.name}</h2>
                </div>
            ))}
        </section>
    );
};

export default Circuits;
