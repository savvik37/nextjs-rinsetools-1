import React from "react";

const Player = () => {

    const player = {
        name: "indev_p",
        petrol: 100,
        credits: 1000,
        inventory: [
            {
            item: "jumper cable",
            effect: "Nothing happens",
            value: 5
            },
            {
                item: "ancient horn",
                effect: "You shouldn't eat this...",
                value: 300
            },
            {
                item: "adimentium",
                effect: "Very rare and valuable",
                value: 112300
            },
            {
                item: "adimentium",
                effect: "Very rare and valuable",
                value: 112300
            },
            {
                item: "adimentium",
                effect: "Very rare and valuable",
                value: 112300
            }
        ]
    }

    const formatCash = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
      }).format(2500);

    return(
        <div class="flex flex-col bg-gray-600 p-5 m-2 rounded-3xl">
            <h1 className="font-extrabold text-xl mb-5"><i>@{player.name} info:</i></h1>
            <div class="flex flex-row justify-evenly mt-3 bg-white rounded-2xl text-black font-bold p-3">
                <p>petrol: {player.petrol}</p>
                <p>credits: {player.credits}</p>
            </div>
            <ul className="p-5 rounded-3xl mt-5 bg-gray-300 text-gray-700">
                <h3 class="mb-3 font-extrabold underline">inventory:</h3>
                <div class="grid grid-cols-3 gap-4 overflow-y-auto h-48 p-1">
                    {player.inventory.map((item, index) => (
                        <li key={index} class="text-sm bg-gray-300 border-black border-2 rounded-xl p-2 text-black flex flex-col justify-between ">
                        <p class="font-bold">{item.item}</p>
                        <p class="text-xs font-bold">{item.effect}</p>
                        <div className="flex flex-col items-center justify-evenly mt-3 p-1 rounded-xl bg-green-900">
                            <p class="font-bold text-white"><i>value: </i></p>
                            <p class="text-xs font-bold bg-green-950 rounded-lg w-auto p-1 pl-3 pr-3 mb-1 text-green-500">${item.value}</p>
                        </div>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    )}

export default Player