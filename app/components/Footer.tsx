import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <div>
              <span className="text-2xl font-outfit">ClosedLedger</span>
            </div> */}
          {/* <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Integrations
                  </a>
                </li>
              </ul>
            </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex hover:text-gray-300">
                  <Mail className="me-2" />
                  support@thinkledger.app
                </a>
              </li>
              {/* <li>
                  <a href="#" className="hover:text-gray-300">
                    X
                  </a>
                </li> */}
              {/* <li>
                <a href="#" className="flex hover:text-gray-300">
                  <Instagram className="me-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex hover:text-gray-300">
                  <Linkedin className="me-2" />
                  LinkedIn
                </a>
              </li> */}
            </ul>
          </div>
          {/* <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Support
                  </a>
                </li>
              </ul>
            </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Cookie Policy
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; 2025 ThinkLedger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
