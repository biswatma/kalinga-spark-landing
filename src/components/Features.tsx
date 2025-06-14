
import { Tv, Smartphone, Globe, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Tv,
      title: "Premium Entertainment",
      description: "Access to 16 OTT platforms including Disney+, Sony LIV, ZEE5, Hotstar and more",
      color: "text-purple-600"
    },
    {
      icon: Globe,
      title: "350+ Live TV Channels",
      description: "Enjoy a vast collection of live TV channels for unlimited entertainment",
      color: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      description: "Connect all your devices - TV, laptop, mobile, tablet with seamless performance",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect for families with unlimited data and multiple user support",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Kalinga Fiber?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of internet connectivity with our cutting-edge fiber optic technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
