
import { Wifi } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Wifi className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Kalinga Fiber</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Odisha's trusted broadband network providing high-speed fiber optic internet 
              with premium entertainment packages.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">A RailWire initiative</p>
              <p className="text-gray-400">www.railwire.co.in</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Phone: 06742-354611</li>
              <li>Toll Free: 1800-1039-139</li>
              <li>Email: support@railwire.co.in</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Kalinga Fiber - RailWire. All rights reserved. | Terms & Conditions Apply | Excluding GST
          </p>
        </div>
      </div>
    </footer>
  );
};
