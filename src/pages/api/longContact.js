import nodemailer from 'nodemailer';

// Local environment variables
const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Outlook's SMTP server
  port: 587, // Port for secure connections with STARTTLS
  secure: false, // Use false because STARTTLS is used (not SSL)
  auth: {
    user: email, // Your Outlook email address
    pass, // Your email password or app password (if 2FA is enabled)
  },
});

const CONTACT_MESSAGE_FIELDS = {
  firstName: 'Име',
  lastName: 'Фамилия',
  email: 'Email',
  phoneNumber: 'Номер',
  carMake: 'Марка',
  carModel: 'Модел',
  typeOfDetail: 'Тип Услуга',
  additionalDetails: 'Допълнителни Детаийли (Избирателно)',
  desiredDate: 'Поискана Дата',
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    // Must have all the below input forms filled out in the form, or the form will not submit and instead return an error
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phoneNumber ||
      !data.carMake ||
      !data.carModel ||
      !data.typeOfDetail ||
      !data.desiredDate
    ) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    try {
      // Attempt to send the email with accompanying data in the proper format and email subject
      await transporter.sendMail({
        ...{
          from: email,
          to: email,
        },
        // Callback to function that converts all relevant data into proper text and html format for the email
        ...generateEmailContent(data),
        subject: 'Нова Заявка',
      });

      // Attempt to send the email with accompanying data in the proper format and email subject
      await transporter.sendMail({
        ...{
          from: email,
          to: data.email,
        },
        // Callback to function that converts all relevant data into proper text and html format for the email
        ...generateEmailContent(data),
        subject: 'Асеа-м Детайлинг Заявка',
      });

      return res.status(200).json({ success: true });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ message: e.message });
    }
  }
  // Return bad status if not a 'POST' method
  return res.status(400).json({ message: 'Bad Request' });
};

// This function takes an object 'data' as an argument and generates email content in two formats: plain text and HTML.
const generateEmailContent = (data) => {
  // Used to map the key names of the data object to their corresponding display names, and these display names are used in the formatted string
  const stringData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value} \n \n`),
    ''
  );

  // Generate a header and paragraph HTML element for each key-value pair
  const htmlData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `<h3 class="form-heading" style="text-align: left;font-weight: bold">${CONTACT_MESSAGE_FIELDS[key]}</h3>
<p class="form-answer" style="text-align: left;">${value}</p>
`),
    ''
  );

  // Generate Google Calendar link
  const eventTitle = 'Асеа-М Детайлинг ';
  const startDate = new Date(data.desiredDate).toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD
  const endDate = new Date(new Date(data.desiredDate).getTime() + 86400000).toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD, next day for all-day event

  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle
  )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
    'Детайли: ' + stringData
  )}&location=&trp=false`;

  // Apple Calendar ICS Content
  const icsFileContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventTitle}
DTSTART;VALUE=DATE:${startDate}
DTEND;VALUE=DATE:${endDate}
DESCRIPTION:Appointment details: ${stringData}
LOCATION:
END:VEVENT
END:VCALENDAR`.trim();

  const appleCalendarDownloadLink = `https://aseam-detailing.vercel.app/api/download-ics?content=${encodeURIComponent(
    icsFileContent
  )}`;
  // Returns the generated 'stringData' and HTML for the email
  return {
    text: stringData,
    html: `
<html>
  <head>
    <title></title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        text-align: center; /* Center all content in the body */
      }
      @media screen and (max-width: 525px) {
        .wrapper {
          width: 100% !important;
          max-width: 100% !important;
        }
        .responsive-table {
          width: 100% !important;
        }
        .padding {
          padding: 10px 5% 15px 5% !important;
        }
        .section-padding {
          padding: 0 15px 50px 15px !important;
        }
      }
      .form-container {
        margin: 20px auto; /* Center horizontally */
        padding: 20px;
        border: 1px dashed #ccc;
        max-width: 500px; /* Optional: Limit the width */
        text-align: left; /* Ensure text inside stays aligned to the left */
      }
      .form-heading {
        color: #2a2a2a;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        text-align: center;
        line-height: 20px;
        font-size: 18px;
        margin: 0 0 8px;
        padding: 0;
      }
      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        color: #555;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 10px 20px;
        border-radius: 5px;
        margin: 10px auto;
        text-align: center;
        width: 80%;
      }
      .button:hover {
        border-color: #888;
      }
      .button img {
        margin-right: 8px;
        width: 25px;
      }
    </style>
  </head>
  <body style="margin: 0 !important; padding: 0 !important; background: #fff">
    <div
      style="
        display: none;
        font-size: 1px;
        color: #fefefe;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    ></div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td
          bgcolor="#ffffff"
          align="center"
          style="padding: 10px 15px 30px 15px"
          class="section-padding"
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 500px"
            class="responsive-table"
          >
            <tr>
              <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <h2 class="form-heading">Нова Заявка</h2>
                      <!-- Centered and styled form container -->
                      <div class="form-container">
                        ${htmlData}
                      </div>
                      <!-- Calendar buttons -->
                      <a
                        href="${googleCalendarLink}"
                        target="_blank"
                        class="button"
                      >
                        <img
                          src="https://img.icons8.com/?size=100&id=WKF3bm1munsk&format=png&color=000000"
                          alt="Google Calendar Icon"
                        />
                        Добави в Google Календар
                      </a>
                      <a
                        href="${appleCalendarDownloadLink}"
                        target="_blank"
                        class="button"
                      >
                        <img
                          src="https://img.icons8.com/?size=100&id=pWWlJmbYuaWT&format=png&color=000000"
                          alt="Apple Calendar Icon"
                        />
                        Добави в Apple Календар
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
  };
};

export default handler;
