import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    function randomColorUtility(arrayLength) {
        return Math.floor(Math.random() * arrayLength);
    }

    function handleGenerateRandomHEXColor() {
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";

        for(let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor)
    }

    function handleGenerateRandomRBGColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`)

    }

    useEffect(() => {
        if(typeOfColor === "rgb") handleGenerateRandomRBGColor()
        else handleGenerateRandomHEXColor()
    }, [typeOfColor])

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button onClick={typeOfColor === "hex" ? handleGenerateRandomHEXColor : handleGenerateRandomRBGColor}>Generate Random Color</button>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color:"#fff",
                fontSize: "50px",
                marginTop: "50px",
                flexDirection: "Column",
            }}>
                <h3>{typeOfColor === "hex" ? "HEX": "RBG"} {color}</h3>
            </div>
        </div>
    )
}