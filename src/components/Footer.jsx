import { IconInstagram, IconFacebook } from "./Icons";

const Footer = () => (
    <footer className="w-screen h-16 px-20 flex justify-between bg-white border-t-2 border-beige absolute bottom-0 items-center">
        <div>
            <p className="text-sm">© Copyright 2023 - Formation développeur web frontend - Technocité Hornu</p>
        </div>
        <div className="flex gap-10 items-center">
            <p><a href="mailto:randommail@email.com" className="font-medium">Nous contacter</a></p>
            <div className="flex gap-4">
                <a href="https://fr-fr.facebook.com/" target="_blank" rel="noreferrer noopener">
                    <IconInstagram />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                    <IconFacebook />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;