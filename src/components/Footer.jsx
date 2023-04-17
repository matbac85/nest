import { IconInstagram, IconFacebook } from "./Icons";

const Footer = () => (
    <footer className="h-auto p-5 flex justify-around bg-white border-t-2 border-beige">
        <div>
            <p className="text-sm">© Copyright 2023 - Formation développeur web frontend - Technocité Hornu</p>
        </div>
        <div className="flex gap-4 items-center">
            <p><a href="mailto:randommail@email.com" className="font-medium">Nous contacter</a></p>
            <a href="https://fr-fr.facebook.com/" target="_blank" rel="noreferrer noopener">
                <IconInstagram />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                <IconFacebook />
            </a>
        </div>
    </footer>
);

export default Footer;