const Market = () => {
    const marketItems = [
        {
            name: "food",
            price_per: 5,
            quantity: 20
        },
        {
            name: "petrol",
            price_per: 10,
            quantity: 100
        },
        {
            name: "medical supplies",
            price_per: 10,
            quantity: 87
        }
    ]
    
    return(
        <div>
            <div class="bg-gray-600 p-5 m-2 rounded-3xl">
                <h2 class="font-extrabold text-xl mb-5">Local Market</h2>
                {marketItems.map((item, index)=>(
                    <h1 key={index} class="mb-3">
                        <p className="font-extrabold">{item.name}</p>
                        <p>price per: {item.price_per}</p>
                        <p>quantity: {item.quantity}</p>
                    </h1>
                ))}
            </div>
        </div>
    )
}

export default Market