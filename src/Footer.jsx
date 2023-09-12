const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <footer>
            {`RoC Encryptor™ ${currentYear}`}{" "}
            <a
                href="https://linkedin.com/in/michał-kaszkiel-11mk11"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
                href="https://github.com/michalkaszkiel"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fa-brands fa-github"></i>
            </a>
        </footer>
    );
};
export default Footer;
