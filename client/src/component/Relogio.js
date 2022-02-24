import React, { useEffect, useState } from "react";
import "./styles.css";

function Relogio() {
    const [relogio, setRelogio] = useState();

    useEffect(() => {
        setInterval(() => {
            const data = new Date();
            setRelogio(data.toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <div className="body">
            <div className="relogio center">{relogio}</div>
            <footer>
                <p>© André Victor Geronimo Gonçalves</p>
            </footer>
        </div>
    );
}
export default Relogio;
