import FormBooking from "../components/FormBooking";
import QrCodeImage from "../components/QrCodeImage";

const BookingPage = () => {
  return (
    <div className="max-w-5xl p-8 mx-auto border rounded-lg">
      <div className="mb-8">
        <QrCodeImage />
      </div>

      <FormBooking />
    </div>
  );
};

export default BookingPage;
