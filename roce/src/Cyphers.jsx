import Encode from "./Encode";
import Decode from "./Decode";

import { useState } from "react";
const Cyphers = () => {
    const handleSetWindow = () => {
        setWindow(!window);
    };
    const [enCode, setEnCode] = useState("");
    const [window, setWindow] = useState(false);
    return (
        <main className="Cyphers-Main">
            <Encode
                enCode={enCode}
                setEnCode={setEnCode}
                window={window}
                setWindow={setWindow}
                handleSetWindow={handleSetWindow}
            />
            <Decode
                enCode={enCode}
                setEnCode={setEnCode}
                window={window}
                setWindow={setWindow}
                handleSetWindow={handleSetWindow}
            />
        </main>
    );
};
export default Cyphers;
