// import User from "./user";
import UserClass from "./UserClass.js";
const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden p-8 animate-fade-in-up transition-all duration-700 ease-in-out">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight text-center">
            About Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed text-center mb-6">
            We’re a passionate team of developers, designers, and food lovers
            committed to revolutionizing the way people experience food
            delivery.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Mission 🚀
              </h2>
              <p className="text-gray-600">
                To make food delivery faster, smarter, and more accessible
                through cutting-edge technology and user-first design.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Why Choose Us 💡
              </h2>
              <p className="text-gray-600">
                We're not just building clones — we're creating real-world apps
                with speed, reliability, and modern UX built-in.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm italic">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
