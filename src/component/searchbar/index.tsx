import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Button from "../button";

type DropdownKey = "country" | "qualification";
type SearchbarProps = {
  showCountry?: boolean;
  showQualification?: boolean;
  placeholder?: string;
  onSearch?: () => void;
};
const countryOptions = ["USA", "UK", "Canada", "Australia"];
const qualificationOptions = ["Bachelor's", "Master's", "PhD"];

export default function Searchbar({
  showCountry = true,
  showQualification = true,
  placeholder = "Subject area",
  onSearch,
}: SearchbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(
    null
  );
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");
  const handleMouseEnter = (menu: DropdownKey) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="block min-w-[72.25rem] max-h-[5.625rem] p-2 bg-white shadow-sm rounded">
      <div className="flex justify-between max-h-[5.625rem]">
        <div className="flex items-center rounded px-4 py-2 min-w-[30%]">
          <FaSearch className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder={placeholder}
            className="outline-none w-full"
          />
        </div>

        {showCountry && (
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("country")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center rounded px-4 py-2 w-[15rem] cursor-pointer">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <span className="w-full truncate">
                {selectedCountry || "Select country"}
              </span>
            </div>
            {activeDropdown === "country" && (
              <div className="absolute z-10 bg-white mt-2 shadow-lg rounded border w-[15rem]">
                {countryOptions.map((country) => (
                  <div
                    key={country}
                    onClick={() => {
                      setSelectedCountry(country);
                      setActiveDropdown(null);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {showQualification && (
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("qualification")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center rounded px-4 py-2 w-[15rem] cursor-pointer">
              <FaGraduationCap className="mr-2 text-gray-500" />
              <span className="w-full truncate">
                {selectedQualification || "Select Qualification"}
              </span>
            </div>
            {activeDropdown === "qualification" && (
              <div className="absolute z-10 bg-white mt-2 shadow-lg rounded border w-[15rem]">
                {qualificationOptions.map((q) => (
                  <div
                    key={q}
                    onClick={() => {
                      setSelectedQualification(q);
                      setActiveDropdown(null);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {q}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <Button
          label="Search"
          onClick={onSearch}
          type="button"
          variant="filled"
        />
      </div>
    </nav>
  );
}
