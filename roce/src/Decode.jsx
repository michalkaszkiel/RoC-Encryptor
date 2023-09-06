import { useState } from "react";
import Btn17 from "./Buttons/Btn17";
import Selection from "./Selection";
import Decoded from "./images/Decode.png";

const Decode = ({ enCode, setEnCode }) => {
    // State to manage the copied status
    const [copied, setCopied] = useState(false);

    // State to store the selected index
    const [selected, setSelected] = useState(null);

    // State to store user input
    const [Value, setValue] = useState("");

    // State to store the decrypted code
    const [deCode, setDeCode] = useState("");

    // The plain alphabet and numbers
    const plain = "abcdefghijklmnopqrstuvwxyz0123456789";

    // Function to handle the selection change
    const handleSelectionChange = (selectedOption) => {
        setSelected(Number(selectedOption.value));
    };

    // Function to handle input change
    const handleChangeCode = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    };

    // Function to handle form submission and decryption
    const onSubmited = (event) => {
        event.preventDefault();
        decrypt(Value.toLowerCase(), selected);
    };

    // Function to decrypt the password
    const decrypt = (password, index) => {
        let cipher = "";
        for (let i = 0; i < password.length; i++) {
            let letter = password.charAt(i);
            let letterIndex = plain.indexOf(letter);
            if (letterIndex !== -1) {
                let newIndex = (letterIndex - index) % plain.length;
                if (newIndex < 0) {
                    newIndex = plain.length + newIndex;
                }
                let letterOfCipher = plain.charAt(newIndex);
                cipher += letterOfCipher;
            }
        }
        setDeCode(cipher);
    };

    // Function to copy the decrypted text to the clipboard
    const copyToClipboard = () => {
        const textToCopy = document.querySelector(".text-to-copy");

        if (textToCopy) {
            navigator.clipboard
                .writeText(textToCopy.textContent)
                .then(() => {
                    setCopied(true);
                })
                .catch((error) => {
                    console.error("Copy failed:", error);
                });
        }
    };

    // Function to reload the page
    const reloader = () => {
        window.location.reload();
    };

    return (
        <>
            {enCode && (
                <div className="Decoding pulse-on">
                    <form onSubmit={onSubmited} className="Decryption-Form">
                        {/* Input field for password */}
                        <div className="Decryption-Div">
                            <input
                                style={{ zIndex: 1 }}
                                className="Input-Decode"
                                type="password"
                                placeholder="select password*"
                                onChange={handleChangeCode}
                            ></input>
                        </div>
                        {/* Selection component */}
                        <Selection
                            setSelection={setSelected}
                            onSelection={handleSelectionChange}
                        />
                        {/* Decrypt button */}
                        <Btn17
                            className="button-17 crypt"
                            text17={"Decrypt"}
                            style17={{
                                gridArea: "5/2/6/10",
                                fontSize: "1vw",
                            }}
                        />
                        {/* Display the decrypted message */}
                        <div className="Decrypted-Message">
                            <h3>Your decrypted password:</h3>
                            <strong className="text-to-copy">{deCode}</strong>
                            {deCode && (
                                <Btn17
                                    className="button-17 copy"
                                    onClick={copyToClipboard}
                                    text17={!copied ? "Copy!" : "Copied!"}
                                />
                            )}
                        </div>
                        {/* Reload button */}
                        <i class="fa-solid fa-rotate" onClick={reloader}></i>
                    </form>
                </div>
            )}
        </>
    );
};

export default Decode;
