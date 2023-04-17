import { IconInstagram, IconFacebook } from "./Icons";

const Footer = () => (
    <footer>
        <div>
            <p>© Copyright 2023 - Formation développeur web frontend - Technocité Hornu</p>
        </div>
        <div>
            <p><a href="mailto:randommail@email.com">Nous contacter</a></p>
            <IconInstagram />
            <IconFacebook />
        </div>
    </footer>
);

export default Footer;