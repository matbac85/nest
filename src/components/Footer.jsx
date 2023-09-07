import { IconInstagram, IconFacebook } from "./Iconssvg"

const Footer = () => (
    <footer className="w-full h-16 px-20 flex justify-between bg-white border-t-2 border-beige items-center sticky bottom-0">
        <div>
            <p className="text-sm">© Copyright 2023 - Formation développeur web frontend - Technocité Hornu</p>
        </div>
        <div className="flex gap-10 items-center">
            <p><a href="mailto:randommail@email.com" className="font-medium hover:text-midGreen">Nous contacter</a></p>
            <div className="flex gap-4">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" className="transition duration-200 hover:scale-125">
                    <IconInstagram />
                </a>
                <a href="https://fr-fr.facebook.com/" target="_blank" rel="noreferrer noopener" className="transition duration-200 hover:scale-125">
                    <IconFacebook />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;