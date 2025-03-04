import { useState } from "react";
import { Search,Menu } from "lucide-react";
import { getValue } from "../store/features/search";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch()

  const handleForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(searchQuery)
    dispatch(getValue({value:searchQuery}))
    setSearchQuery("")
  }
 

  return (
    <nav className="bg-blue-600 p-4 mx-auto shadow-md">
      <div className=" flex items-center justify-between">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          <a href="/" className="text-white text-2xl font-semibold">MDA's Directory</a>
        </div>

        {/* Search Box */}
        <div className="hidden md:flex gap-2">
         <form onSubmit={handleForm} className="flex items-center gap-2">
         <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[300px] px-4 border-2 border-black  py-2 rounded-lg text-white focus:outline-none"
            placeholder="Search..."
          />
          <button className="text-white">
            <Search className="h-5 w-5" />
          </button>
         </form>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
}
