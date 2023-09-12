import { useState } from "react";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import Btn17 from "../Buttons/Btn17";
const Introduction = () => {
    const [section, setSection] = useState(0);
    const handleNext = () => {
        section < 2 ? setSection(section + 1) : setSection(0);
    };
    const handlePrevious = () => {
        section > 0 ? setSection(section - 1) : setSection(0);
    };
    const handleLetsDoThis = () => {
        setSection(3);
    };
    return (
        <div className="Sub-LandingPage-Main">
            {section < 3 && (
                <Slide left delay={500} duration={2100}>
                    <div className="Introduction-Cont">
                        {section === 0 && (
                            <section>
                                <i class="fa-solid fa-shield-halved"></i>
                                <h3>What is a Rotational Cipher?</h3>
                                <p>
                                    A Rotational Cipher, also known as a Caesar
                                    Cipher, is a simple and classic encryption
                                    technique used to encode messages. It works
                                    by shifting each letter in the alphabet by a
                                    fixed number of positions. This shift value,
                                    often referred to as the{" "}
                                    <strong>"key,"</strong> determines how the
                                    message is scrambled. Only those with the
                                    correct key can reverse the process and
                                    reveal the original message.{" "}
                                    <strong>
                                        Remeber to keep your key in mind when
                                        you encrypt your message!
                                    </strong>
                                </p>
                                <Btn17
                                    className="button-17"
                                    onClick={handleNext}
                                    text17={"Next"}
                                    style17={{ width: "8rem" }}
                                />
                            </section>
                        )}
                        {section === 1 && (
                            <section>
                                <i class="fa-solid fa-file-circle-question"></i>
                                <h3>How Does It Work?</h3>
                                <p>
                                    Our Rotational Cipher Encryptor allows you
                                    to enter your message and select a rotation
                                    key. Once you hit the{" "}
                                    <strong>"Encrypt"</strong> button, your
                                    message will be transformed into a unique
                                    code based on the chosen key. Whether you're
                                    encrypting personal messages or sensitive
                                    information, our tool ensures that your data
                                    remains confidential.
                                </p>
                                <div className="btn-container">
                                    <Btn17
                                        onClick={handlePrevious}
                                        text17={"Back"}
                                        style17={{ width: "8rem" }}
                                        className="button-17"
                                    />
                                    <Btn17
                                        onClick={handleNext}
                                        text17={"Next"}
                                        style17={{ width: "8rem" }}
                                        className="button-17"
                                    />
                                </div>
                            </section>
                        )}
                        {section === 2 && (
                            <section>
                                <i class="fa-brands fa-medium"></i>
                                <h3 style={{ fontWeight: "bold" }}>
                                    Features:
                                </h3>
                                <p>
                                    <i
                                        class="fa-solid fa-user-check"
                                        style={{ padding: "0.5rem" }}
                                    ></i>
                                    <strong>Easy-to-Use:</strong> Encrypt your
                                    messages with just a few clicks. <br />
                                    <i
                                        class="fa-solid fa-pen-to-square"
                                        style={{ padding: "0.5rem" }}
                                    ></i>
                                    <strong>Customizable:</strong> You can
                                    choose the rotation key that best suits your
                                    security needs. Indexes starting from 27 are
                                    numbers. <br />
                                    <i
                                        class="fa-solid fa-copy"
                                        style={{ padding: "0.5rem" }}
                                    ></i>
                                    <strong>Copy and Paste:</strong> Easily copy
                                    the encrypted message and send it to your
                                    recipient. They can then use the same tool
                                    with the correct key to decrypt the message.
                                </p>
                                <div className="btn-container">
                                    <Btn17
                                        onClick={handlePrevious}
                                        text17={"Back"}
                                        style17={{ width: "8rem" }}
                                        className="button-17"
                                    />
                                    <Link to="/Cyphers">
                                        <Btn17
                                            onClick={handleLetsDoThis}
                                            text17={"Let's Do This!"}
                                            style17={{ width: "12rem" }}
                                            className="button-17"
                                        />
                                        <i
                                            class="fa-solid fa-right-to-bracket"
                                            style={{ padding: "0.30rem" }}
                                        ></i>
                                    </Link>
                                </div>
                            </section>
                        )}
                    </div>
                </Slide>
            )}
        </div>
    );
};
export default Introduction;
