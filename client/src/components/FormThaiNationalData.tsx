import { ThaiIdCard } from "../types/thaiIdCard";

type FormThaiNationalDataProps = {
  data: ThaiIdCard | null;
};

const FormThaiNationalData = ({ data }: FormThaiNationalDataProps) => {
  return (
    <form className="flex flex-col w-full gap-y-4">
      {/* name th */}
      <div className="flex flex-wrap my-2 gap-y-2 md:my-0">
        <div className="w-full px-3 md:w-1/2">
          <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
            First Name (TH)
          </label>
          <input
            className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
            type="text"
            placeholder="Jane"
            value={data ? `${data.titleTH} ${data.firstNameTH}` : ""}
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
            Last Name (TH)
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Doe"
            defaultValue={data?.lastNameTH}
          />
        </div>
      </div>

      {/* name en */}
      <div className="flex flex-wrap my-2 gap-y-2 md:my-0">
        <div className="w-full px-3 md:w-1/2">
          <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
            First Name (EN)
          </label>
          <input
            className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
            type="text"
            placeholder="Jane"
            value={data ? `${data.titleEN} ${data.firstNameEN}` : ""}
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
            Last Name (EN)
          </label>
          <input
            className="w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Doe"
            defaultValue={data?.lastNameEN}
          />
        </div>
      </div>

      {/* id */}
      <div className="flex flex-wrap">
        <div className="w-full px-3">
          <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
            Citizen ID
          </label>
          <input
            className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            defaultValue={data?.citizenId}
            disabled
          />
        </div>
      </div>

      {/* address */}
      <div className="flex flex-wrap">
        <div className="w-full px-3">
          <label className="mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase ">
            Address
          </label>
          <textarea
            className="w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            value={data?.address ?? ""}
          />
        </div>
      </div>
    </form>
  );
};

export default FormThaiNationalData;
