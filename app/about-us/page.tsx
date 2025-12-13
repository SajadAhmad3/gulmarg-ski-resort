import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Heart, Users, Shield, MapPin, Star, Snowflake } from "lucide-react"

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/home/peaks_banner.jpg')" }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              About Gulmarg Ski Resort
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              The Most Complete Website about Gulmarg Ski Resort
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Gulmarg Ski Resort is your trusted partner for experiencing the world-class skiing and snowboarding 
                in the heart of the Himalayas. We specialize in creating unforgettable winter adventures in Gulmarg, 
                one of the most spectacular ski destinations in the world.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded with a passion for Himalayan powder and mountain culture, we have been organizing ski packages 
                to Gulmarg since 2010. Our team consists of local experts who know every powder zone, every secret spot, 
                and every aspect of skiing in Gulmarg. We work with the best guides and instructors in the region to 
                ensure your safety and enjoyment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer exactly what you need — simplicity, comfort, and professionalism. Whether you're a beginner 
                learning to ski, an intermediate looking to improve, or an expert seeking the best powder runs, we have 
                the perfect package for you. From economic ski bum packages to deluxe luxury experiences, we make it 
                easy to book your Himalayan ski adventure.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                {
                  icon: Snowflake,
                  title: "Himalayan Powder",
                  description: "Experience world-class powder skiing in the highest peaks of the Himalayas."
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  description: "Your safety is our priority. We work with certified guides and follow all safety protocols."
                },
                {
                  icon: Users,
                  title: "Expert Guides",
                  description: "Our local guides know every powder zone and secret spot in Gulmarg."
                },
                {
                  icon: MapPin,
                  title: "Local Expertise",
                  description: "Deep knowledge of Gulmarg's terrain, weather, and mountain conditions."
                },
                {
                  icon: Star,
                  title: "Quality Service",
                  description: "Dedicated to providing exceptional service from booking to your return home."
                },
                {
                  icon: Heart,
                  title: "Passion for Skiing",
                  description: "We are skiers ourselves, passionate about sharing the magic of Gulmarg with you."
                }
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card key={idx} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                    <CardContent className="pt-6 text-center">
                      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To make Gulmarg Ski Resort accessible to skiers and snowboarders worldwide by providing exceptional, 
                    personalized ski experiences that showcase the region's incredible terrain, deep powder, and warm 
                    hospitality while ensuring safety, comfort, and value for money.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become the most trusted and preferred ski travel partner for Gulmarg, known for our commitment 
                    to excellence, authentic mountain experiences, and creating lasting memories for every skier and 
                    snowboarder who chooses to experience the Himalayas with us.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
