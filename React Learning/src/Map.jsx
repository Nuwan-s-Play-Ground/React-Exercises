import React from "react";
import { ReactDOM } from "react";
function Map() {
    const nums = [1, 2, 3, 4, 5, 6];
    const doubles = nums.map(function(num) {
        return num * 2;
    });

    return (
        <div>
            <h2>Doubled Numbers</h2>
            <ul>
                {doubles.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
}

export default Map;
