
import { useState } from "react";

const AddPackage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    duration: "",
    image: "",
    description: "",
    activities: [""],
    itinerary: [""],
    highlights: [""],
    bestTime: "",
    tips: [""],
    price: "",
    // accommodation: "",
    // meals: "",
    // activitiesCost: "",
    gallery: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (
    index: number,
    value: string,
    fieldName: string
  ) => {
    const updatedArray = [...formData[fieldName as keyof typeof formData]];
    updatedArray[index] = value;
    setFormData({ ...formData, [fieldName]: updatedArray });
  };

  const handleAddField = (arrayName: string) => {
    const updatedArray = [...formData[arrayName as keyof typeof formData], ""];
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  const handleRemoveField = (index: number, arrayName: string) => {
    const updatedArray = [...formData[arrayName as keyof typeof formData]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [arrayName]: updatedArray });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tour Data Submitted:", formData);
    // Implement submission logic (API call or database update)
    alert("Tour added successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen container mx-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full  bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-[#0f2454] font-poppins mb-6">
          Add New Tour
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Tour Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter tour title"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Enter duration (e.g., 10 Days / 9 Nights)"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Cover Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>
          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>
          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Best Time
            </label>
            <input
              type="text"
              name="bestTime"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Best Time For The Tour"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-[#0f2454] font-barlow mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write a brief description"
            required
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
          ></textarea>
        </div>

        {/* Dynamic fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DynamicFields
            title="Activities"
            fieldName="activities"
            data={formData.activities}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
          <DynamicFields
            title="Itinerary"
            fieldName="itinerary"
            data={formData.itinerary}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
          <DynamicFields
            title="Highlights"
            fieldName="highlights"
            data={formData.highlights}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
          <DynamicFields
            title="Travel Tips"
            fieldName="tips"
            data={formData.tips}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
          />
          <DynamicFields
            title="Gallery" // New gallery section
            fieldName="gallery"
            // name="image"
            data={formData.gallery}
            handleArrayChange={handleArrayChange}
            handleAddField={handleAddField}
            handleRemoveField={handleRemoveField}
            inputType="url" // Pass the input type as a prop
          />
        </div>

        {/* Pricing */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Accommodation Cost
            </label>
            <input
              type="text"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
              placeholder="Enter accommodation cost"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>

          <div>
            <label className="block text-[#0f2454] font-barlow mb-2">
              Meals Cost
            </label>
            <input
              type="text"
              name="meals"
              value={formData.meals}
              onChange={handleChange}
              placeholder="Enter meals cost"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
            />
          </div>
        </div> */}

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-[#0f2454] text-white font-poppins py-3 px-6 rounded-lg hover:bg-[#2095ae] transition duration-200"
          >
            Add Tour
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPackage;

/* Dynamic fields for array inputs */
interface DynamicFieldsProps {
  title: string;
  fieldName: string;
  data: string[];
  handleArrayChange: (
    index: number,
    field: string,
    value: string
    // arrayName: string
  ) => void;
  handleAddField: (arrayName: string) => void;
  handleRemoveField: (index: number, arrayName: string) => void;
  inputType?: string; // Optional prop for input type
}

const DynamicFields: React.FC<DynamicFieldsProps> = ({
  title,
  fieldName,
  data,
  handleArrayChange,
  handleAddField,
  handleRemoveField,
  inputType = "text", // Default to "text" if not provided
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold font-poppins text-[#0f2454]">
        {title}
      </h3>
      {data.map((item, index) => (
        <div className="flex gap-3 items-center mt-2" key={index}>
          <input
            type={inputType}
            value={item}
            onChange={
              (e) => handleArrayChange(index, e.target.value, fieldName) // Fix here
            }
            placeholder={`Enter ${title.toLowerCase()} item`}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2095ae]"
          />

          {data.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveField(index, fieldName)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleAddField(fieldName)}
        className="mt-3 bg-[#2095ae] text-white font-poppins py-2 px-4 rounded-lg"
      >
        Add {title} Item
      </button>
    </div>
  );
};
