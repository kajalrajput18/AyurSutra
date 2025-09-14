export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-green-700 text-white shadow-lg">
      <h1 className="text-2xl font-bold">Ayursutra</h1>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:text-yellow-300">Home</a></li>
        <li><a href="/about" className="hover:text-yellow-300">About</a></li>
        <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
        <li><a href="/login" className="hover:text-yellow-300">Login</a></li>
      </ul>
    </nav>
  );
}
