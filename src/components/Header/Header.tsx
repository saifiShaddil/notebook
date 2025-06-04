import { useEffect, useState } from "react";
import CaretDown from "../../Icons/CaretDowm";
import EditIcon from "../../Icons/EditIcon";
import SearchIcon from "../../Icons/SearchIcon";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  

  useEffect(() => {
    // Fetch posts on load
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const matches = posts.filter((post: any) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(matches);
    } else {
      setFiltered([]);
    }
  }, [searchTerm, posts]);

  return (
    <header className="bg-[#E8F3F3] h-[8vh] w-full shadow-sm relative z-10">
      <div className="w-[90%] h-full mx-auto flex items-center justify-between">
        {/* Left nav */}
        <div className="flex gap-6 text-sm text-gray-700 font-medium items-center">
          <Link to={'/'} className="flex items-center gap-1 cursor-pointer">
            
            Homepages <CaretDown />
          </Link>
          <div className="cursor-pointer">About</div>
          <div className="flex items-center gap-1 cursor-pointer">
            Categories <CaretDown />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Pages <CaretDown />
          </div>
        </div>

        {/* Center logo */}
        <div className="flex items-end gap-1">
          <span className="text-2xl font-bold bg-[#00AAA1] text-white px-2 py-0.5 rounded">
            NOTE
          </span>
          <span className=" text-sm font-medium">
            Book.
          </span>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6 text-sm text-gray-700 font-medium relative">
          <div
            className="cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          >
            <SearchIcon />
          </div>

          <div className="cursor-pointer">
            <EditIcon />
          </div>
          <div className="cursor-pointer">Contact</div>
          <div className="flex items-center gap-1 cursor-pointer">
            En <CaretDown />
          </div>

          {/* Search Input */}
          {showSearch && (
            <div className="absolute top-10 right-0 bg-white p-2 rounded shadow w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search blog..."
                className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
              />
              <ul className="mt-2 max-h-48 overflow-auto text-sm">
                {filtered.map((post: any) => (
                  <li key={post.id} className="py-1 border-b hover:bg-gray-100 cursor-pointer">
                    <Link onClick={() => {
                      setShowSearch(false);
                      setSearchTerm("");
                    }} to={`/post/${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
