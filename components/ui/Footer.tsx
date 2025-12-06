'use client';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-black border-t border-white/10 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6 text-gray-400">
          <a href="https://www.instagram.com/saifullohrahman?igsh=MXg4M3ZmZ3E5dnk0Mw%3D%3D&utm_source=qr" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/in/saifullohrahman/" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Saifulloh Rahman
        </p>
      </div>
    </footer>
  );
}