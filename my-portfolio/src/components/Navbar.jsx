function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Olayode.dev</h1>

      <ul className="flex gap-6">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;
