import { Building, Globe, Phone, User, Map } from "lucide-react";

export interface Mda {
  _id?: string;
  name: string;
  department: string;
  address: string;
  website: string;
  phone: string;
  isAgency?: boolean;
  isMinistry?: boolean;
  isDepartment?: boolean;
  minister?: string;
  deputyMinister?: string;
  director?: string;
}

const MdaTitle = ({ mda }: { mda: Mda }) => {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-8 md:p-10 flex flex-col  max-w-3xl mx-auto mt-8 space-y-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Title + Department/Agency/Ministry */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-6">
        <div className="flex items-center space-x-6">
          <Building className="h-16 w-16 text-blue-600" />
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 sm:text-2xl">{mda.name}</h2>
            <p className="text-lg text-gray-500">{mda.department}</p>
          </div>
        </div>
        
        {/* Tags Section (Top Right) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-2 sm:space-x-2">
          {mda.isMinistry && (
            <span className="bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-xl font-medium">
              Ministry
            </span>
          )}
          {mda.isDepartment && (
            <span className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-xl font-medium">
              Department
            </span>
          )}
          {mda.isAgency && (
            <span className="bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-xl font-medium">
              Agency
            </span>
          )}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="mt-6 space-y-4 text-sm text-gray-700">
        {mda.website && (
          <a
            href={mda.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-blue-600 hover:underline transition duration-300"
          >
            <Globe className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Visit Website</span>
          </a>
        )}
        {mda.phone && (
          <p className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-500" />
            <span className="font-medium">{mda.phone}</span>
          </p>
        )}
        <p className="text-gray-500 flex gap-2">
          <Map className="h-5 w-5 text-gray-500"/>
          <span>{mda.address}</span>
        </p>
      </div>

      {/* Director or Minister Section */}
      <div className="mt-6 space-y-2">
        {mda.isAgency || mda.isDepartment && mda.director && (
          <div className="flex items-center space-x-3">
            <User className="h-5 w-5 text-gray-600" />
            <span className="font-thin"><b className="font-bold">Director: </b>{mda.director}</span>
          </div>
        )}
        {mda.isMinistry && mda.minister && mda.deputyMinister && (
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-gray-600" />
              <span className="font-thin"><b className="font-bold">Minister: </b>{mda.minister}</span>
            </div>
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-gray-600" />
              <span className="font-thin"><b className="font-bold">Deputy-Minister: </b>{mda.deputyMinister}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MdaTitle;
