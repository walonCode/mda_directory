import MdaTitle, { Mda } from "./MdaTitle";
import { getAllMda } from "../store/features/mda";
import { useAppSelector } from "../hooks/storeHook";
import { searchedValue } from "../store/features/search";
import { useEffect, useState } from "react";

export default function ViewList() {
  const mdas: Mda[] = useAppSelector(getAllMda);
  const searchTerm = useAppSelector(searchedValue);
  
  const [filteredMdas, setFilteredMdas] = useState<Mda[]>(mdas);

  useEffect(() => {
    // Only filter if there is a search term
    if (searchTerm.trim() !== "") {
      const filtered = mdas.filter((mda) =>
        mda.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mda.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mda.minister?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mda.deputyMinister?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mda.phone.includes(searchTerm)
      );
      setFilteredMdas(filtered);
    } else {
      setFilteredMdas(mdas); // If no search term, show all MDA
    }
  }, [searchTerm, mdas]);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
        MDA Directory
      </h1>

      <div className="grid gap-8 sm:grid-cols-subgrid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMdas.length > 0 ? (
          filteredMdas.map((mda) => (
            <div key={mda._id} className="">
              {/* MDA Title Component */}
              <div>
                <MdaTitle mda={mda} /> {/* Using the MdaTitle card here */}
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}
