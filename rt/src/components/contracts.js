const Contracts = () => {

    const contracts = [
        {
            from: "erikson@joxuengines.nu",
            description: 'Deliver food to Abkhazia',
            reward: 50 
        },
        { 
            from: "erikson@joxuengines.nu",
            description: 'Deliver medical supplies to Jupir',
            reward: 100 
        },
        { 
            from: "hrnlogistics@iowadecks.nu",
            description: 'Deliver wood supplies to Saha',
            reward: 100 
        }
    ]

    return(
        <div className="bg-gray-600 p-5 m-2 rounded-3xl">
            {contracts.map((contract, index) => (
                <div key={index} className="mt-3 bg-white rounded-xl p-2 text-gray-900">
                    <p className="font-bold">from: {contract.from}</p>
                   <p>"{contract.description}"</p>
                   <p>Payment: {contract.reward}</p>
                </div>
            ))}
        </div>
    )
}

export default Contracts