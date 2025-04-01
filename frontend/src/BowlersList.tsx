import { useEffect, useState } from "react";
import { bowler } from "./types/bowlers";  

function BowlersList() {
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowlers = async () => {
            try {
                const response = await fetch("https://localhost:5000/api/Bowlers"); // ✅ Fixed API endpoint
                if (!response.ok) {
                    throw new Error("Failed to fetch bowlers");
                }
                const data = await response.json();
                setBowlers(data);
            } catch (error) {
                console.error("Error fetching bowlers:", error);
            }
        };

        fetchBowlers();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlers.map((b) => (
                        <tr key={b.bowlerId}>
                            <td>{b.bowlerFirstName} {b.bowlerMiddleInit ?? ""} {b.bowlerLastName}</td>
                            <td>{b.team?.teamName ?? "Unknown"}</td> 
                            <td>{b.bowlerAddress}</td>
                            <td>{b.bowlerCity}</td>
                            <td>{b.bowlerState}</td>
                            <td>{b.bowlerZip}</td>
                            <td>{b.bowlerPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BowlersList;
