

# Thai Nation Id Card Reader
This repo for access data from smart card (Thai id card)

## keyword🔑

 - PCSC (Personal Computer/Smart Card) : มาตรฐานการสื่อสารระหว่าง Computer และ Smart Card
 - APDU (Application Protocol Data Unit) : มาตราฐานในการสื่อสารของ smart card ที่ถูกกำหนดใน ISO/IEC 7816–4
    - [Smart card: บัตรประชาชนยุคดิจิตอล](https://medium.com/horganice/smart-card-%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%94%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%AD%E0%B8%A5-c6813a3ca9e8)

    - [ ศึกษาการติดต่อกับ Smart Card ต้องเริ่มด้วย APDU นะ](https://www.somkiat.cc/learn-smart-card-apdu/)

    - [เขียน Python 3 ติดต่อกับเครื่องอ่านบัตร ประชาชน](https://medium.com/@psk_dream/%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-python-3-%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%99-c9ef4980733a)

## How to👀

 - ใช้ **[thai-national-id-reader lib](https://github.com/privageapp/thai-national-id-reader)** (Nodejs) ในการ connect กับ Smart Card Reader
	 
 ```js
const { 
	ThaiCardReader, 
	EVENTS, 
	MODE 
} = require('@privageapp/thai-national-id-reader');

const reader = new ThaiCardReader();

// 2 modes -> PERSONAL and PERSONAL_PHOTO
reader.readMode = MODE.PERSONAL_PHOTO;
reader.autoRecreate = true;
reader.startListener();

reader.on(EVENTS.DEVICE_CONNECTED, () => {
    console.log("Device connected🚀");
});

reader.on(EVENTS.DEVICE_DISCONNECTED, () => {
    console.log("Device Disconnect outside socket💔\n");
});

reader.on(EVENTS.CARD_INSERTED, () => {
    console.log("Card Inserted");
});

reader.on(EVENTS.CARD_REMOVED, () => {
    console.log("Card Removed");
});

reader.on(EVENTS.READING_START, () => {
    console.log("Reading start...");
});

// `data` will contain information from the Thai ID card.
reader.on(EVENTS.READING_COMPLETE, (data) => {
    console.log(data);
});

reader.on(EVENTS.READING_FAIL, () => {
    console.log("Reading Fail");
});
```
	 
 - และใช้ [Socket IO](https://socket.io/) ในการทำ **Realtime เวลาเสียบบัตรเข้าออก** ที่ได้จาก server (*Nodejs*) ส่งไปใน client (*ReactJS*)


### Data ที่ได้จาก EVENTS.READING_COMPLETE
| Property       | Type   | Description                                  |
| -------------- | ------ | -------------------------------------------- |
| `citizenId`    | string | Citizen ID of the cardholder                  |
| `titleEN`      | string | Title in English (e.g., Mr., Mrs.)            |
| `titleTH`      | string | Title in Thai (e.g., นาย, นางสาว)           |
| `firstNameEN`  | string | First name in English                        |
| `firstNameTH`  | string | First name in Thai                           |
| `lastNameEN`   | string | Last name in English                         |
| `lastNameTH`   | string | Last name in Thai                            |
| `address`      | string | Cardholder's address                         |
| `birthday`     | string | Date of birth in the format YYYY-MM-DD       |
| `gender`       | string | Gender (e.g., Male, Female)                  |
| `photo`        | string | URL or base64-encoded string of the photo    |
| `expire`       | string | Card expiration date in the format YYYY-MM-DD |
| `issue`        | string | Date of issue in the format YYYY-MM-DD        |


## Getting started 🚀

Clone this repository

```zsh
git clone https://github.com/pandakn/thai-national-id-card-reader.git

cd thai-national-id-card-reader
```

Install dependencies using `npm` and start project

```zsh
cd client
npm install
npm run dev

cd server
npm install
npm run dev
```
