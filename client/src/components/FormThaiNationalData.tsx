import { ThaiIdCard } from "../types/thaiIdCard";

type FormThaiNationalDataProps = {
  data: ThaiIdCard | null;
};

const FormThaiNationalData = ({ data }: FormThaiNationalDataProps) => {
  // console.log("Data in Form:", data);

  return (
    <form className="w-full flex flex-col gap-y-4">
      {/* name th */}
      <div className="flex flex-wrap gap-y-2 my-2 md:my-0">
        <div className="w-full md:w-1/2 px-3">
          <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name (TH)
          </label>
          <input
            className="appearance-none  w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Jane"
            value={data ? `${data.titleTH} ${data.firstNameTH}` : ""}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name (TH)
          </label>
          <input
            className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Doe"
            defaultValue={data?.lastNameTH}
          />
        </div>
      </div>

      {/* name en */}
      <div className="flex flex-wrap gap-y-2 my-2 md:my-0">
        <div className="w-full md:w-1/2 px-3">
          <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name (EN)
          </label>
          <input
            className="appearance-none  w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Jane"
            value={data ? `${data.titleEN} ${data.firstNameEN}` : ""}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name (EN)
          </label>
          <input
            className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Doe"
            defaultValue={data?.lastNameEN}
          />
        </div>
      </div>

      {/* id */}
      <div className="flex flex-wrap">
        <div className="w-full px-3">
          <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Citizen ID
          </label>
          <input
            className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            defaultValue={data?.citizenId}
            disabled
          />
        </div>
      </div>

      {/* address */}
      <div className="flex flex-wrap">
        <div className="w-full px-3">
          <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Address
          </label>
          <textarea
            className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={data?.address ?? ""}
          />
        </div>
      </div>
    </form>
  );
};

export default FormThaiNationalData;
