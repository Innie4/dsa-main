export function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-16 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <a href="/" className="hover:text-white cursor-pointer">
                <img
                  src="/dsalogo5.png"
                  alt="Digital Scouting Academy"
                  className="h-9"
                />
              </a>
            </div>
            <div className="flex space-x-3">
              <a href="player-page" className="hover:text-white">
                Essentials
              </a>
              <a href="analytics" className="hover:text-white">
                Dashboards
              </a>
              <a href="contact-us" className="hover:text-white">
                Contact us
              </a>
              <a href="FAQs" className="hover:text-white">
                FAQs
              </a>
              <a href="pricing" className="hover:text-white">
                Pricing
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-2 justify-center items-center">
              <a
                href="/privacy-policy"
                className="text-sm hover:text-yellow-300 text-yellow-500"
              >
                Privacy Policy
              </a>
              <span className="text-yellow-500">and</span>
              <a
                href="/terms-of-use"
                className="text-sm hover:text-yellow-300 text-yellow-500"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
