import Btn from "../Buttons/Btn";

const Welcome = ({ handleStyleChange }) => {
    return (
        <div className="Welcome">
            <h1>Rotational Cipher Encryptor</h1>
            <p style={{ padding: "0.35rem" }}>
                RoCipher is a password encryption tool that uses a rotational
                cipher to encrypt your passwords.
            </p>
            <Btn text={"Get Started"} style={{ width: "10rem" }} />
        </div>
    );
};
export default Welcome;
