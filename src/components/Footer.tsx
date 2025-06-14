
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/bc60f6bb-a25b-43c2-8163-c547d51cedab.png" 
                alt="Kalinga Fiber Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Odisha's trusted broadband network providing high-speed fiber optic internet 
              with premium entertainment packages.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Contact: Mahatma Nayak</p>
              <p className="text-gray-400">Adaspur, Odisha</p>
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
              <li>Phone/WhatsApp: 9238500800</li>
              <li>Location: Adaspur, Odisha</li>
              <li>Contact: Mahatma Nayak</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Kalinga Fiber. All rights reserved. | Terms & Conditions Apply | Excluding GST
          </p>
        </div>
      </div>
    </footer>
  );
};
