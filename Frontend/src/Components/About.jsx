import React from 'react';
import 'tailwindcss/tailwind.css';
import slider1 from "../assets/slider-1.jpg";

const About = () => {
    return (
        <div className="flex mt-10 flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
            <div className="md:w-1/2 p-4">
                <h2 className="text-3xl font-bold mb-4">About Sakan Construction</h2>
                <p className="text-gray-700 mb-4">
                    Sakan Construction is a leading construction company with a reputation for delivering high-quality projects on time and within budget. Our team of experienced professionals is dedicated to providing exceptional service and craftsmanship. We specialize in residential, commercial, and industrial construction, and we are committed to sustainability and innovation in all our projects.
                </p>
                <p className="text-gray-700">
                    Our mission is to build lasting relationships with our clients by exceeding their expectations and gaining their trust through exceptional performance by every member of our construction team. We look forward to working with you on your next project.
                </p>
            </div>
            <div className="md:w-1/2 p-4">
                <img src={slider1} alt="Sakan Construction" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
        </div>
    );
}

export default About;