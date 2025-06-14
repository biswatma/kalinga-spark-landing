
import { Button } from "@/components/ui/button";
import { Wifi, Zap, Shield, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Kalinga Fiber
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Odisha's Trusted Broadband Network
              </p>
              <p className="text-lg text-blue-200 max-w-lg">
                Experience lightning-fast internet with our fiber-optic broadband plans. 
                Reliable connectivity for your home and business needs.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                View Plans
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8">
                Contact Us
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Wifi className="w-8 h-8 mx-auto mb-2 text-cyan-300" />
                <div className="text-sm text-blue-200">Fiber Optic</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-sm text-blue-200">High Speed</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-green-300" />
                <div className="text-sm text-blue-200">Secure</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                <div className="text-sm text-blue-200">24/7 Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Quick Connect</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>16 OTTs Available</span>
                  <span className="text-green-300">✓</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>350+ Live TV Channels</span>
                  <span className="text-green-300">✓</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span>One Stop Entertainment</span>
                  <span className="text-green-300">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
