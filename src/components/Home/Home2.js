import React from "react";
import image1 from "../../assets/home2_1.jpg";
import image2 from "../../assets/Home2_2.jpg";
import image3 from "../../assets/Home2_3.jpg";

const Home2 = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8 items-center">
          <div className="lg:w-1/2">
            <div className="hero__content">
              <div className="hero__subtitle text-xl font-semibold mb-2">
                Explore the World with us
              </div>
              <h1 className="text-4xl lg:text-3xl font-bold mb-4">
                Traveling Opens The Door To Creating{" "}
                <span className="text-blue-500">Memories</span>
              </h1>
              <p className="text-gray-600">
                Traveling is not just about visiting new places; it's about
                embracing the unknown, expanding your horizons, and discovering
                the beauty of diversity. It cultivates a sense of curiosity,
                resilience, and adaptability, shaping you into a more
                open-minded and well-rounded individual. Through travel, you
                forge connections with people from different cultures, fostering
                empathy and understanding. It's an adventure that nourishes the
                soul, replenishes the spirit, and leaves an indelible mark on
                your heart.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-4">
            <img
              src={image1}
              alt=""
              className="w-48 h-64 border rounded-md mt-4 border-blue-400 transition duration-300 transform hover:shake-x"
            />
            <img
              src={image2}
              alt=""
              className="w-48 h-64 border border-blue-400 rounded-md transition duration-300 transform hover:translate-y-1"
            />
            <img
              src={image3}
              alt=""
              className="w-48 h-64 border border-blue-400 rounded-md mt-4 border-blue-400 transition duration-300 transform hover:shake-x"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
