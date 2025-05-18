import { useState } from "react"

export default function Batsman({ name }) {

    const [runs, newruns] = useState(0);
    const [single, totalsingle] = useState(0);
    const singlerun = () => {
        const updaterun = runs + 1;
        const single1 = single + 1;
        totalsingle(single1)
        newruns(updaterun);

    }
    const [six, totalsix] = useState(0);
    const runwithsix = () => {
        const updaterun = runs + 6;
        const sixcount = six + 1;
        totalsix(sixcount);
        newruns(updaterun);

    }
    const [four, totalfour] = useState(0);

    const runwithfour = () => {
        const updaterun = runs + 4;
        const fourcount = four + 1;
        totalfour(fourcount);
        newruns(updaterun);

    }
    const upperName = name.toUpperCase();

    return (
        <div>
            {runs >= 100 ? (
                <h2>Congratulations {upperName}, you already made a century!</h2>
            ) : runs >= 50 ? (
                <h2>Congratulations {upperName}, you already made a half century!</h2>
            ) : null}

            <h3>Batsman Name : {upperName}</h3>
            <h3>Total Run : {runs}</h3>
            <h3>single : {single} </h3>
            <h3>four : {four} </h3>
            <h3>six : {six} </h3>
            <button style={{margin: "10px",backgroundColor:'white',color:'black'}} onClick={singlerun}>single</button>
            <button style={{margin: "10px",backgroundColor:'white',color:'black'}} onClick={runwithfour}>four</button>
            <button style={{margin: "10px",backgroundColor:'white',color:'black'}} onClick={runwithsix}>six</button>
        </div>
    )
}