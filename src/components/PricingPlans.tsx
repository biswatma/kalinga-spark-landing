
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export const PricingPlans = () => {
  const plans = [
    {
      name: "Fup 30Mbps",
      price: "299",
      speed: "30",
      popular: false
    },
    {
      name: "Fup 40Mbps", 
      price: "399",
      speed: "40",
      popular: false
    },
    {
      name: "Fup 50Mbps",
      price: "499", 
      speed: "50",
      popular: true
    },
    {
      name: "Fup 100Mbps",
      price: "699",
      speed: "100",
      popular: false
    },
    {
      name: "Fup 125Mbps",
      price: "799",
      speed: "125", 
      popular: false
    },
    {
      name: "Fup 175Mbps",
      price: "999",
      speed: "175",
      popular: false
    },
    {
      name: "Fup 200Mbps",
      price: "1099",
      speed: "200",
      popular: false
    }
  ];

  const features = [
    "16 OTT Platforms Included",
    "350+ Live TV Channels", 
    "Unlimited Data Usage",
    "24/7 Customer Support",
    "Free Installation",
    "WiFi Router Included"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Smart Plan
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            High-speed fiber broadband plans for every need
          </p>
          <p className="text-sm text-gray-500">*T & Apply* | Excluding GST</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative transition-all duration-300 hover:transform hover:scale-105 ${plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-lg'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-blue-600">₹{plan.price}</span>
                  <span className="text-gray-500 ml-1">/-*</span>
                </div>
                <div className="text-2xl font-bold text-gray-700 mt-2">{plan.speed} Mbps</div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">What's Included in All Plans</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
