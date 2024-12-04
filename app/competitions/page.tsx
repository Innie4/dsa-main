import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from '@/app/default/signed-inheader'
import {Footer} from '@/app/default/footer'

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen bg-white">
            <div className="md:px-20 lg:px-20 p-4 bg-white">
            <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header/>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-lg font-bold mb-6 text-blue-600">
          Competitions we are involved in
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src="/comp-header.png"
            alt="Trophy on field"
            fill
            className="object-cover"
          />
        </div>

        {/* Competition Sections */}
        <section className="space-y-12 mb-16">
          {/* Principal's Cup */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Principal&apos;s Cup</h2>
            <div className="flex items-center mb-4">
              <span className="text-sm text-blue-900 font-bold">Event status:</span>
              <span className="text-sm ml-2">Upcoming</span>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
              The Principal&apos;s Cup is a pivotal initiative for Digital Scouting Africa (DSA), designed to harness the energy and potential of youth through grassroots football development. With a focus on engaging the vibrant youth market, DSA aims to connect directly and indirectly with indigenes across local government areas, creating opportunities for young players to showcase their talents and rise to prominence.
              </p>
              <p>
                
This initiative underscores DSA&apos;s commitment to expanding its reach to all 36 states of the federation and the FCT, ensuring that the impact of the tournament is felt nationwide. By fostering a robust network of grassroots talent, the Principal&apos;s Cup not only elevates the visibility of grassroots football but also establishes a pathway for players to access professional platforms and career-defining opportunities.
              </p>
              <p>
              The Principal&apos;s Cup is a pivotal initiative for Digital Scouting Africa (DSA), designed to harness the energy and potential of youth through grassroots football development. With a focus on engaging the vibrant youth market, DSA aims to connect directly and indirectly with indigenes across local government areas, creating opportunities for young players to showcase their talents and rise to prominence.

This initiative underscores DSA&apos;s commitment to expanding its reach to all 36 states of the federation and the FCT, ensuring that the impact of the tournament is felt nationwide. By fostering a robust network of grassroots talent, the Principal&apos;s Cup not only elevates the visibility of grassroots football but also establishes a pathway for players to access professional platforms and career-defining opportunities.
</p>
<p>
Aligned with the vision of this sports-focused organization to nurture role models and leverage sports as a catalyst for academic excellence among secondary school students, the Principal&apos;s Cup has become a vital platform for creating football stars who represent Nigeria on the international stage. It also plays a crucial role in the discovery, career development, and economic empowerment of grassroots football talent.
Football, as a unifying phenomenon, has proven its power to foster camaraderie among youth. The Principal&apos;s Cup continues to uncover local football talent at the grassroots level while promoting healthy competition and fostering a sense of community.
</p>
<p>
The Principal&apos;s Cup is an annual football competition that kicks off with the start of the academic year in secondary schools and concludes in mid-June. Since its inception in Lagos in 2009, the competition has not only encouraged school dropouts to return to education but has also expanded its reach to Ogun and Rivers States, driving greater impact across the region.
</p>
<p>
Beyond football, the tournament drives community engagement and inspires local pride, reinforcing the importance of sports in uniting people and nurturing ambition. Through the Principal&apos;s Cup, Digital Scouting Africa envisions a future where every community is empowered, and young talents have the support they need to achieve greatness
              </p>
            </div>
          </div>

          {/* Elite School Cup */}
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Elite School Cup – Where Champions Begin
            </h2>
            <div className="flex items-center mb-4">
              <span className="text-sm text-blue-900">Event status:</span>
              <span className="text-sm ml-2">Upcoming</span>
            </div>
            <p className="text-gray-600">
            The Elite School Cup is more than just a competition—it&apos;s a launchpad for exceptional young football talents. Bringing together the best secondary school teams, this tournament celebrates skill, teamwork, and sportsmanship at the grassroots level.
            </p><br />
            <p className="text-gray-600">


Digital Scouting Africa (DSA) plays a pivotal role in this journey. As the official scouting partner, DSA identifies standout players during the competition, connecting them to professional opportunities and nurturing their development. By leveraging advanced scouting tools and expertise, DSA ensures that every promising talent is recognized and guided toward a brighter future in football. Step onto the field, showcase your skills, and let your journey to greatness begin at the Elite School
            </p>
          </div>
        </section>

        {/* Our Competitions */}
        <section className="bg-gradient-to-r from-green-500 to-blue-800 -mx-4 px-4 py-12 md:-mx-8 md:px-8 md:py-8 lg:-mx-24 lg:px-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Our Competitions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {/* U-17 Card */}
            <div className="bg-green-500/50 rounded-lg p-6 backdrop-blur-sm w-72">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/our-comp.png"
                  alt="Football icon"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Digital Scouting Africa Talent Showcase U-17
              </h3>
              <div className="text-white/80 text-sm mb-4">
                <span>Event status: </span>
                <span>Upcoming</span>
              </div>
              <p className="text-white/80 text-sm">
                Unleashing the stars of tomorrow! The U-17 Talent Showcase is a
                platform for young, emerging footballers...
              </p>
            </div>

            {/* U-20 Card */}
            <div className="bg-green-500/50 rounded-lg p-6 backdrop-blur-sm w-72">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/our-comp.png"
                  alt="Football icon"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Digital Scouting Africa Talent Showcase U-20
              </h3>
              <div className="text-white/80 text-sm mb-4">
                <span>Event status: </span>
                <span>Upcoming</span>
              </div>
              <p className="text-white/80 text-sm">
                Where rising stars meet opportunity. The U-20 Talent Showcase is
                designed to spotlight exceptional youth players...
              </p>
            </div>

            {/* Championship Card */}
            <div className="bg-blue-600 rounded-lg p-6 w-72">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/our-comp.png"
                  alt="Football icon"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Digital Scouting Africa Scouting Championship
              </h3>
              <div className="text-white/80 text-sm mb-4">
                <span>Event status: </span>
                <span>Upcoming</span>
              </div>
              <p className="text-white/80 text-sm">
                The ultimate arena for talent discovery! The Scouting
                Championship brings together top players...
              </p>
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="bg-blue-900 -mx-4 px-6 py-12 mt-12 rounded-lg md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/80 mb-6 max-w-3xl">
            Have questions about our competitions? Whether it&apos;s the U-17
            Talent Showcase, the U-20 Talent Showcase, the Scouting
            Championship, or the Elite School Cup, we&apos;re here to assist
            you.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-md font-medium flex items-center hover:bg-yellow-400 transition-colors">
            Get Started
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </section>
      </main>
</div>
</div>
      {/* Footer */}
      <Footer/>
          </div>
  );
}
