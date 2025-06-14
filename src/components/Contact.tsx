
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const Contact = () => {
  const whatsappLink = "https://wa.link/0o276d";
  
  const handleCall = () => {
    window.open("tel:9238500800", "_self");
  };

  const handleWhatsApp = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Connected Today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ready to experience high-speed internet? Contact us now!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-blue-500 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg dark:text-white">
                    <Phone className="w-5 h-5 text-blue-600" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900 dark:text-white">9238500800</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Phone & WhatsApp</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg dark:text-white">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 dark:text-white">9238500800</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Quick messaging support</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg dark:text-white">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 dark:text-white">Adaspur, Odisha</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Service Area</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg dark:text-white">
                    <Clock className="w-5 h-5 text-purple-600" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 dark:text-white">24/7 Available</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Round the clock support</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact Person</h3>
              <p className="text-lg font-medium text-blue-600 dark:text-blue-400">Mahatma Nayak</p>
              <p className="text-gray-600 dark:text-gray-300">Your trusted internet service provider</p>
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
                <span>Call or WhatsApp us</span>
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
              <Button 
                onClick={handleCall}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              >
                Call Now: 9238500800
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline" 
                className="w-full border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
              >
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
