import React from "react";
import engineer1 from "../assets/worker-1.jpg";
import engineer2 from "../assets/worker-2.jpg";
import engineer3 from "../assets/worker-3.jpg";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
const About = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to deliver high-quality construction services that
            exceed our clients' expectations. We strive to create lasting
            relationships with our clients by providing exceptional
            craftsmanship, innovative solutions, and unparalleled customer
            service.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to be the leading construction company in the
            industry, known for our commitment to excellence, integrity, and
            sustainability. We aim to build a better future by creating spaces
            that inspire and improve the quality of life for our communities.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={engineer1}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">John Doe</h4>
              <p className="text-gray-700">CEO</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={engineer2}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
              <p className="text-gray-700">Project Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={engineer3}
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Michael Johnson</h4>
              <p className="text-gray-700">Lead Architect</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Our History</h3>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2000, Sakan Construction has grown from a small local
            business to a leading construction company with a reputation for
            excellence. Over the years, we have completed numerous projects,
            ranging from residential homes to large commercial buildings. Our
            commitment to quality and customer satisfaction has been the
            cornerstone of our success.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
