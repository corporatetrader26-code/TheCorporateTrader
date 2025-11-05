export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-20 py-12 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold">The Signaler</h3>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Precision-guided trading signals for disciplined
            options & futures traders.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-medium mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#feature" className="hover:text-white transition">Features</a></li>
            <li><a href="#result" className="hover:text-white transition">Results</a></li>
            <li><a href="#testimonial" className="hover:text-white transition">Testimonials</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-lg font-medium mb-4">Connect</h4>
          <a
            href="https://t.me/thesignaler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            🚀 Join Telegram
          </a>

          <p className="text-gray-400 mt-4 text-sm">support@thesignaler.com</p>
        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © 2025 The Signaler. All rights reserved.
      </div>
    </footer>
  );
}
