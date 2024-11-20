import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";



const Contact = () => {
    return (
        <div className="boxed-container">
            <div className="about-section mt-5 pb-10">
                <h2 className="text-3xl font-bold mb-4 text-white text-center">Contact Us</h2>
                <div className="flex text-white justify-center">
                    <div className="mb-4 md:mb-0 flex flex-row">
                        <h3 className="text-xl font-semibold">FSR AI </h3>
                        <div className="flex space-x-2 ml-4">
                        <a href="https://fsr-ai.de" className="text-blue-500"><AiOutlineGlobal  className="text-2xl text-blue-500"   />
                        </a>
                        <a href="mailto:fsr-ai@b-tu.de" className="text-blue-500"><CiMail  className="text-2xl text-white" />
                        </a>
                        <a href="https://www.instagram.com/fsr.ai" target="_blank" className="text-blue-500"><FaInstagram className="text-2xl text-pink-600" />
                        </a>
                        </div>
                    </div>
                    <span className="mx-4">|</span>
                    <div className="flex">
                        <h3 className="text-xl font-semibold inline-block">FSR IT </h3>
                        <div className="flex space-x-2 ml-4">

                        <a href="https://fsr-it.de/en" className="text-blue-500"><AiOutlineGlobal    className="text-2xl text-blue-500"/>
                        </a>
                        <a href="mailto:fsr-it@b-tu.de" className="text-blue-500"><CiMail   className="text-2xl text-white" />
                        </a>
                        <a href="https://www.instagram.com/fsr.it/profilecard/?igsh=eW9ud2gycXh3dXph" target="_blank" className="text-blue-500"><FaInstagram  className="text-2xl text-pink-600" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;