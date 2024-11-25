import React from "react";
import Header from "./default/page";
import Gallery from "./gallery/page";
import Link from "next/link";
import { Footer } from "./default/footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="md:px-20 lg:px-20 p-4">
        <section
          className="relative h-96 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url('./pitch.png')` }}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                Unleashing potential across Africa
              </h1>
              <p className="text-gray-200 mb-8">
                Discovering Africa&apos;s rising stars through data and
                dedication
              </p>
              <Link href="/signup">
                <button className="bg-[#F7BF56] hover:bg-[#fab942] text-black px-6 py-3 rounded-lg font-medium">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section
          className="bg-gray-50 mt-10 rounded-lg py-16"
          style={{
            backgroundImage: `url('./play.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <p className="text-2xl font-semibold text-black max-w-3xl mx-auto mb-4">
              We offer{" "}
              <span className="text-blue-600">
                outstanding scouting services
              </span>{" "}
              and a{" "}
              <span className="text-blue-600">supportive environment</span> for
              players of every age group.
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We empower players with expert scouting, personalized support, and
              data-driven insights to unlock their full potential.
            </p>
          </div>
        </section>

        {/* Stats Dashboard Preview */}
        <section className="py-16">
          <img src="./chart.png" alt="Stats Dashboard" className="w-full" />
        </section>

        {/* Metrics */}
        <section className="bg-white py-10 w-full overflow-hidden">
          <h2 className="text-3xl font-bold text-[#122483] mb-8">Our Reach</h2>
          <div className="md:flex lg:flex space-x-8">
            <div className="text-black">
              <span className="text-6xl font-bold">90%</span>
              <p className="text-gray-400 mt-2">players signing for clubs</p>
            </div>
            <div className="text-black">
              <span className="text-6xl font-bold">15+</span>
              <p className="text-gray-400 mt-2">club partnership</p>
            </div>
            <div className="text-black">
              <span className="text-6xl font-bold">500+</span>
              <p className="text-gray-400 mt-2">African players</p>
            </div>
            <div className="text-black">
              <span className="text-6xl font-bold">1000+</span>
              <p className="text-gray-400 mt-2">Matches</p>
            </div>
          </div>
        </section>
      </div>

      {/* Gallery */}
      <div className="bg-gray-100 py-10">
        <Gallery />
      </div>

      <div className="md:px-20 lg:px-20 p-4">
        <div className="flex flex-col md:flex-row bg-white text-white p-6 md:p-10 rounded-xl mx-auto ">
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="./baller.png"
              alt="Oluwa Powers"
              className="rounded-xl object-cover md:h-auto"
            />
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#122483] font-semibold">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.077 15.562C30.0724 18.4354 29.2163 21.2431 27.6171 23.6303C26.0178 26.0176 23.7469 27.8774 21.0913 28.9748C18.4357 30.0723 15.5144 30.3582 12.6964 29.7965C9.87843 29.2348 7.29006 27.8506 5.25823 25.8188C3.2264 23.7869 1.84223 21.1986 1.28051 18.3806C0.718786 15.5626 1.00472 12.6413 2.1022 9.98571C3.19967 7.3301 5.05946 5.05925 7.4467 3.45995C9.83395 1.86066 12.6416 1.00465 15.515 1C16.0296 1.00047 16.5439 1.02712 17.0558 1.07985C20.623 1.46526 23.9223 3.15407 26.321 5.82235C28.7197 8.49064 30.0488 11.9506 30.0535 15.5385L30.077 15.562Z"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.8369 3.78516L13.2837 6.72104"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.6751 4.25548L20.0622 7.8443L15.1299 6.72631L13.7207 3.4945C13.7207 3.4945 15.6325 2.12755 17.0934 1.10352C19.8725 1.39813 22.5063 2.49308 24.6751 4.25548Z"
                    fill="#41509C"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5042 8.55469C14.274 8.61106 12.7427 11.7161 12.7427 11.7161"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.4468 9.625L20.4849 13.0729"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.21729 7.84473L6.54775 12.9085"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.98242 20.0068C3.50205 19.343 4.05551 18.7064 4.64061 18.0996"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.3052 12.3114C27.1789 11.4894 29.0391 10.1318 29.0391 10.1318"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.6753 21.2559L27.2448 24.1823"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.1226 26.5868C19.1742 26.4599 21.4713 22.4014 21.4713 22.4014"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.498 17.5408C18.5309 17.4375 20.9783 13.7171 20.9783 13.7171L25.4549 13.4775L27.6721 18.4192L24.7973 21.4162L21.7909 21.59L18.498 17.5408Z"
                    fill="#41509C"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.206 17.949L13.2837 17.5215"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.968 13.2799L14.0537 17.6062L9.6475 21.5709L4.35352 18.4048L6.16673 12.3311L11.968 13.2799Z"
                    fill="#41509C"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.64809 21.5703C9.60111 21.7723 11.0573 25.3282 11.0573 25.3282L9.64809 26.8032"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.2691 29.3118C16.852 30.4789 13.124 30.34 9.80322 28.9219C10.6957 27.7288 12.2412 25.9297 12.2412 25.9297C12.2412 25.9297 14.0215 27.3389 18.4982 26.794L20.2691 29.3118Z"
                    fill="#41509C"
                    stroke="#41509C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Rising Ballers
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#122483]">Oluwa Powers</h2>
            <p className="text-gray-400 flex items-center">
              <span className="font-semibold">Midfielder</span> | 23yrs |{" "}
              <span className="ml-1">🇳🇬 Nigeria</span>
            </p>
            <p className="text-gray-400">
              A creative playmaker with an eye for passes, Oluwa has an 85% pass
              accuracy rate and is known for his agility on the field. He led
              his team to the finals with 10 assists this season.
            </p>
            <h3 className="text-xl font-bold text-[#122483] mt-4">
              ...in his own words
            </h3>
            <p className="text-gray-500 italic">
              Using the scouting insights, I discovered my strengths in
              defensive positioning and improved my ball control, which helped
              me stand out on the field. The detailed feedback I received showed
              me areas I hadn’t focused on before, like timing my runs and
              adjusting my positioning to create more opportunities for my
              teammates. This new perspective has not only improved my game but
              also boosted my confidence and determination to push myself even
              further.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white text-black p-10 space-y-4">
          <div className="mx-auto grid grid-cols-1 gap-2 sm:grid-cols-3">
            {[
              {
                name: "Kwame A.",
                role: "Scout",
                testimonial:
                  "This agency has transformed my scouting experience. I’ve connected with incredible talent I wouldn’t have found on my own. The platform is seamless, and the support is outstanding!",
                image: "./testimonial1.png",
              },
              {
                name: "Miracle Chinwe O.",
                role: "Pro Baller",
                testimonial:
                  "Thanks to this network, I’ve landed an amazing opportunity! It’s the best place for young players to get noticed and for scouts to find genuine talent. I couldn’t be happier!",
                image: "./testimonial2.png",
              },
              {
                name: "Habubz Oluwabode",
                role: "Talent Manager",
                testimonial:
                  "Digital Scouting Africa is a true bridge between talent. The insights and updates make my scouting work so much easier and more effective. A fantastic tool for every scout!",
                image: "./testimonial3.png",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="border border-blue-800 rounded-lg p-6 text-white space-y-4"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-full border-4 border-blue-800"
                />
                <div className="">
                  <h3 className="text-xl font-bold text-[#122483]">
                    {person.name}
                  </h3>
                  <p className="text-gray-400">{person.role}</p>
                  <p className="mt-2 text-black">{`"${person.testimonial}"`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="bg-blue-900 bg-cover bg-center py-20 text-white rounded-xl"
          style={{
            backgroundImage: "url('./map.png')",
          }}
        >
          <div className="text-center px-4">
            <p className="text-sm mb-2">
              <span className="text-yellow-500">⚡</span> Join us to discover
              the next African baller!
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Uncover talent. Build futures. <br />
              Join the Network that shapes tomorrow’s stars!
            </h1>
            <Link href="/signup">
              <button className="bg-yellow-500 text-black font-medium py-2 px-6 mt-4 rounded-md hover:bg-yellow-600 inline-flex items-center">
                Get Started
                <span className="ml-2">➜</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
