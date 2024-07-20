const GalaxyMap = () => {
    const locations = [
        {
            name: "Abkhazia",
            distance: 10,
            pCost: 10
        },
        {
            name: "Jupir",
            distance: 20,
            pCost: 20
        },
        {
            name: "Saha",
            distance: 30,
            pCost: 30
        }
    ]

    return(
        <div className="bg-gray-600 p-5 m-2 rounded-3xl">
            <h2 class="font-extrabold text-xl mb-3">Map</h2>
            {locations.map((location, index) => (
                <h1 key={index}>
                    <p class="font-extrabold mt-5">{location.name}</p>
                    <p>Distance: {location.distance}</p>
                    <p>Petrol Cost: {location.pCost}</p>
                    <button class="rounded-xl bg-green-700 p-2 mt-2">Travel</button>
                </h1>
            ))}

        </div>
    )
}

export default GalaxyMap