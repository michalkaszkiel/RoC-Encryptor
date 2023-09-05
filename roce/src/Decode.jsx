import { useState } from "react";
import Btn17 from "./Buttons/Btn17";
import Selection from "./Selection";
import Decoded from "./images/Decode.png";
const Decode = ({ enCode, setEnCode }) => {
    const [copied, setCopied] = useState(false);
    const [selected, setSelected] = useState(null);
    const [Value, setValue] = useState("");
    const [deCode, setDeCode] = useState("");
    const plain = "abcdefghijklmnopqrstuvwxyz0123456789";
    const handleSelectionChange = (selectedOption) => {
        setSelected(Number(selectedOption.value));
        console.log(selectedOption.value);
    };
    const handleChangeCode = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    };
    const onSubmited = (event) => {
        event.preventDefault();
        decrypt(Value, selected);
    };
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
    const reloader = () => {
        window.location.reload();
    };
    return (
        <>
            {enCode && (
                <div className="Decoding pulse-on">
                    {/* <div className="H3-Img-De">
                        <img src={Decoded} alt="decode" />
                        <h3>Decryption</h3>
                    </div> */}

                    <form onSubmit={onSubmited} className="Decryption-Form">
                        <div className="Decryption-Div">
                            <input
                                style={{ zIndex: 1 }}
                                className="Input-Decode"
                                type="password"
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
                            text17={"Decrypt"}
                            style17={{
                                gridArea: "5/2/6/10",
                                fontSize: "1vw",
                            }}
                        />
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
                        <i class="fa-solid fa-rotate" onClick={reloader}></i>
                    </form>
                </div>
            )}
        </>
    );
};
export default Decode;
