
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Globe, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Connected Today
          </h2>
          <p className="text-xl text-gray-600">
            Ready to experience high-speed internet? Contact us now!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">06742-354611</p>
                    <p className="font-semibold text-gray-900">1800-1039-139</p>
                    <p className="text-sm text-gray-600">Toll Free Number</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Globe className="w-5 h-5 text-green-600" />
                    Website
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900">www.railwire.co.in</p>
                  <p className="text-sm text-gray-600">Visit our website for more info</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    Coverage Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900">Across Odisha</p>
                  <p className="text-sm text-gray-600">Serving major cities and towns</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Clock className="w-5 h-5 text-purple-600" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900">24/7 Available</p>
                  <p className="text-sm text-gray-600">Round the clock support</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Choose your preferred plan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Call us or visit our website</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Schedule free installation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Enjoy high-speed internet</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                Call Now: 06742-354611
              </Button>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                Visit Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
