import { useState } from "react";
import Btn17 from "./Buttons/Btn17";
import Selection from "./Selection";
import Encoded from "./images/Encode.png";

const Encode = ({ enCode, setEnCode, window, setWindow, handleSetWindow }) => {
    // State to manage the copied status
    const [copied, setCopied] = useState(false);

    // State to manage the visibility of the password input
    const [showPassword, setShowPassword] = useState(false);

    // State to store the selected index
    const [selected, setSelected] = useState(null);

    // State to store user input
    const [inputValue, setInputValue] = useState("");

    // The plain alphabet and numbers
    const plain = "abcdefghijklmnopqrstuvwxyz0123456789";

    // Function to handle the selection change
    const handleSelectionChange = (selectedOption) => {
        setSelected(Number(selectedOption.value));
    };

    // Function to handle input change
    const handleChangeCode = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    };

    // Function to handle form submission and encryption
    const onSubmited = (event) => {
        event.preventDefault();
        encrypt(inputValue.toLowerCase(), selected);
    };

    // Function to toggle password visibility
    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    // Function to encrypt the password
    const encrypt = (password, index) => {
        let cipher = "";
        for (let i = 0; i < password.length; i++) {
            let letter = password.charAt(i);
            let letterIndex = plain.indexOf(letter);
            if (letterIndex !== -1) {
                let newIndex = (letterIndex + index) % plain.length;
                let letterOfCipher = plain.charAt(newIndex);
                cipher += letterOfCipher;
            }
        }
        setEnCode(cipher);
    };

    // Function to copy the encrypted text to the clipboard
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

    return (
        <>
            <div className="Encoding pulse-on">
                {!window && (
                    <div className="H3-Img-En" onClick={handleSetWindow}>
                        <img src={Encoded} alt="encode" />
                        <h3>Encryption</h3>
                    </div>
                )}
                {window && (
                    <form onSubmit={onSubmited} className="Encryption-Form">
                        {/* Input field for password */}
                        <div className="Encryption-Div">
                            {!showPassword && (
                                <i
                                    class="fa-solid fa-lock"
                                    onClick={handleToggle}
                                ></i>
                            )}
                            {showPassword && (
                                <i
                                    class="fa-solid fa-lock-open"
                                    onClick={handleToggle}
                                ></i>
                            )}
                            <input
                                style={{ zIndex: 1 }}
                                className="Input-Encode"
                                type={showPassword ? "text" : "password"}
                                placeholder="select password*"
                                onChange={handleChangeCode}
                            ></input>
                        </div>
                        {/* Selection component */}
                        <Selection
                            setSelection={setSelected}
                            onSelection={handleSelectionChange}
                        />
                        {/* Encrypt button */}
                        <Btn17
                            className="button-17 crypt"
                            text17={"Encrypt"}
                            style17={{
                                gridArea: "5/2/6/10",
                                fontSize: "1vw",
                            }}
                        />
                        {/* Display the encrypted message */}
                        <div className="Encrypted-Message">
                            <h3>Your encrypted password is:</h3>
                            <strong className="text-to-copy">{enCode}</strong>
                            {enCode && (
                                <Btn17
                                    className="button-17 copy"
                                    onClick={copyToClipboard}
                                    text17={!copied ? "Copy!" : "Copied!"}
                                />
                            )}
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

export default Encode;
