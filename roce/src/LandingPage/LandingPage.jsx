import Welcome from "./Welcome";
import Logo from "../Logo";
import Fade from "react-reveal/Fade";
import Introduction from "./Introduction";
const LandingPage = () => {
    const handleStyleChange = () => {
        document.querySelector(".Welcome").classList.add("opacity0");
        document
            .querySelector(".Sub-LandingPage-Main")
            .classList.add("opacity1");
    };
    return (
        <>
            <Logo className="Logo" />
            <Fade top delay={200} duration={2000}>
                <main className="LandingPage-Main">
                    <Welcome handleStyleChange={handleStyleChange} />
                    <Introduction />
                </main>
            </Fade>
            <Logo className="Locker" />
            {/* <Logo className="Cipher" />
            <Logo className="Cesar" /> */}
        </>
    );
};
export default LandingPage;
