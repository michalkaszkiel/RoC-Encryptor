import { useState } from "react";
import Selection from "./Selection";
import Btn17 from "./Buttons/Btn17";
import Encoded from "./images/Encode.png";
const Encode = ({ enCode, setEnCode, window, setWindow, handleSetWindow }) => {
    const [copied, setCopied] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [selected, setSelected] = useState(null);
    const [inputValue, setInputValue] = useState("");

    const plain = "abcdefghijklmnopqrstuvwxyz0123456789";

    const handleSelectionChange = (selectedOption) => {
        setSelected(Number(selectedOption.value));
        console.log(selectedOption.value);
    };
    const handleChangeCode = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    };
    const onSubmited = (event) => {
        event.preventDefault();
        encrypt(inputValue, selected);
    };
    const handleToggle = () => {
        setShowPassword(!showPassword);
    };
    const encrypt = (password, index) => {
        let cipher = "";
        for (let i = 0; i < password.length; i++) {
            let letter = password.charAt(i);
            let letterIndex = plain.indexOf(letter); //indexOf() method returns the position of the first occurrence of a specified value in a string letter is a character of in alphabet (plain) and indexOf is checking its index
            if (letterIndex !== -1) {
                let newIndex = (letterIndex + index) % plain.length; //% modulo (rest of division) used if index goes beyond the letter 'z'.
                let letterOfCipher = plain.charAt(newIndex); //charAt() method returns the character at the specified index in a string
                cipher += letterOfCipher; //+= adds the letterOfCipher to the cipher
            }
        }
        setEnCode(cipher);
    };
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
                        <Selection
                            setSelection={setSelected}
                            onSelection={handleSelectionChange}
                        />
                        <Btn17
                            className="button-17 crypt"
                            text17={"Encrypt"}
                            style17={{
                                gridArea: "5/2/6/10",
                                fontSize: "1vw",
                            }}
                        />
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
