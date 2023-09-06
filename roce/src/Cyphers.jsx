import { useState } from "react";
import Encode from "./Encode";
import Decode from "./Decode";

const Cyphers = () => {
    // Function to handle toggling the window
    const handleSetWindow = () => {
        setWindow(!window);
    };

    // State to manage the encrypted code
    const [enCode, setEnCode] = useState("");

    // State to manage the window visibility
    const [window, setWindow] = useState(false);

    return (
        <main className="Cyphers-Main">
            {/* Render the Encode and Decode components */}
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
