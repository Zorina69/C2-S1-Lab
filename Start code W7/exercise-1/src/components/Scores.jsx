import React from "react";
import { HTML_RESULTS } from "../data.js";

const CheckScore = (score) => {
    if (score >= 50) {
        return <td>{score}</td>;
    } else {
        return <td className="warning">{score}</td>;
    }
};

const Scores = () => (
    <main className="scores-container">
        <section className="scores">
            <h1>HTML</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {HTML_RESULTS.map((student, index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            {CheckScore(student.score)}
                        </tr>
                    ))}
                </tbody>
                <div className="foot">
                    <tfoot>
                        <tr>
                            <th>Average</th>
                            <th>Min</th>
                            <th>Max</th>
                        </tr>
                        <tr>
                            <td>{(HTML_RESULTS.reduce((acc, student) => acc + student.score, 0) / HTML_RESULTS.length).toFixed(2)}</td>
                            <td>{Math.min(...HTML_RESULTS.map((student) => student.score))}</td>
                            <td>{Math.max(...HTML_RESULTS.map((student) => student.score))}</td>
                        </tr>
                    </tfoot>
                </div>
            </table>
        </section>
    </main>
);

export default Scores;