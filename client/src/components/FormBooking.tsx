import React, { useEffect, useRef, useState } from "react";

interface FormData {
  patientName: string;
  scheduleDepartment: string;
  appointmentTime: string;
  bookingType: string;
}

const FormBooking = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;

    setFormData((prev) => prev && { ...prev, [name]: event.target.value });
  };

  const formatDataString = (inputString: string) => {
    const patten = /\{.+\}/;
    // console.log("match regex", inputString.match(patten)[0]);

    return inputString.match(patten)[0];
  };

  useEffect(() => {
    const handleScannerInput = (event: KeyboardEvent) => {
      nameInputRef.current?.focus();

      if (event.key === "Enter") {
        const scannedData = (event.target as HTMLInputElement).value;
        console.log("scannedData:", scannedData);

        const dataJsonString = formatDataString(scannedData);
        console.log("dataJsonString:", dataJsonString);

        try {
          const jsonData: FormData = JSON.parse(dataJsonString);
          console.log("jsonData:", jsonData);

          setFormData(jsonData);
        } catch (error) {
          console.error("Error parsing JSON data from scanner:", error);
        }

        (event.target as HTMLInputElement).value = "";
      }
    };

    document.addEventListener("keydown", handleScannerInput);

    return () => {
      document.removeEventListener("keydown", handleScannerInput);
    };
  }, []);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <form>
      <div className="w-full px-3">
        <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
          Patient Name:
        </label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formData?.patientName}
          onChange={handleInputChange}
          ref={nameInputRef}
          className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <div className="w-full px-3">
        <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
          Schedule Department:
        </label>
        <input
          type="text"
          id="scheduleDepartment"
          name="scheduleDepartment"
          value={formData?.scheduleDepartment}
          onChange={handleInputChange}
          className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <div className="w-full px-3">
        <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
          Appointment Time:
        </label>
        <input
          type="text"
          id="appointmentTime"
          name="appointmentTime"
          value={formData?.appointmentTime}
          onChange={handleInputChange}
          className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>

      <div className="w-full px-3">
        <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
          Booking Type:
        </label>
        <input
          type="text"
          id="bookingType"
          name="bookingType"
          value={formData?.bookingType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
    </form>
  );
};

export default FormBooking;
