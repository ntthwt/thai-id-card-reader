import { qrCodeData } from "../__mock__/qrCodeData";

const QrCodeImage = () => {
  return (
    <div className="flex gap-20">
      <a href="www.qr-code-generator.com/"></a>
      {qrCodeData.map((data) => (
        <div>
          <img
            src={`https://chart.googleapis.com/chart?cht=qr&chl=%7B%22patientName%22%3A%22${data.patientName}%22%2C%22scheduleDepartment%22%3A%22${data.scheduleDepartment}%22%2C%22appointmentTime%22%3A%22${data.appointmentTime}%22%2C%20%22bookingType%22%3A%20%22${data.bookingType}%22%7D&chs=180x180&choe=UTF-8&chld=L|2`}
          ></img>
          <figcaption className="text-center">{data.patientName}</figcaption>
        </div>
      ))}
    </div>
  );
};

export default QrCodeImage;
