
import React from "react"
import "./Myedu.css"

const data = [{ year: "First year", marks: 10.0 },
{ year: "Second year", marks: 10.0 },
{ year: "Third year", marks: 10.0 },
]

function Myedu() {

    return (
        <div className="container">
            <div className="Education">
                <h3 className="edu"> Education</h3>
                <li className="edu">Expected Graduation  : June 2024</li>
                <li className="edu">BACHELOR OF ENGINEERING</li>
                <li className="edu">VESIT | Chembur</li>
                <li className="edu">CGPI SCORE :</li>
                <table>
                    <tr>
                        <th>YEAR</th>
                        <th>CGPI</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.year}</td>
                                <td>{val.marks}</td>
                            </tr>

                        )
                    })
                    }

                </table>
            </div>
        </div>
    )
}
export default Myedu