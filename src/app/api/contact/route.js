import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;
const mailTo = "mukundmohan22@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export async function POST(request) {
  const body = await request.json();
  try {
    //  Function to validate email and send form values goes here
    if (!body.name || !body.email || !body.subject || !body.message)
      return NextResponse.json({ message: "Failed: Missing Required Values" });

    let emailBody = EMAIL_BODY_TEMPLATE.replace("USER_NAME", body.name)
      .replace("EMAIL_ADDRESS", body.email)
      .replace("USER_MESSAGE", body.message)
      .replace("USER_NAME", body.name);

    await transporter.sendMail({
      from: email,
      to: mailTo,
      html: emailBody,
      subject: body.subject,
    });

    return NextResponse.json({
      message: "Thank you for contacting me. Please allow us some time to get back to you.",
    });
  } catch (error) {
    return NextResponse.json({
      message: `Failed: ${error.message}`,
    });
  }
}

export async function GET(request) {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

const EMAIL_BODY_TEMPLATE =
  '<div dir="ltr"><font face="comic sans ms, sans-serif">Dear Mukund,</font><div><font face="comic sans ms, sans-serif"><br></font></div><div><font face="comic sans ms, sans-serif">USER_NAME contacted you with below query : </font></div><div><font face="comic sans ms, sans-serif"><br></font><div><table class="gmail-MsoTable15Grid6ColorfulAccent2" border="1" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:none"><tbody><tr style="height:23.6pt"><td width="109" valign="top" style="width:82.05pt;border-width:1pt 1pt 1.5pt;border-style:solid;border-color:rgb(217,149,148);padding:0cm 5.4pt;height:23.6pt"><p class="gmail-MsoListParagraphCxSpFirst" style="margin:0cm;line-height:normal;font-size:11pt"><span style="font-size:12pt;color:rgb(148,54,52);letter-spacing:1pt"><font face="comic sans ms, sans-serif">Name</font></span></p></td><td width="224" valign="top" style="width:167.65pt;border-top:1pt solid rgb(217,149,148);border-left:none;border-bottom:1.5pt solid rgb(217,149,148);border-right:1pt solid rgb(217,149,148);padding:0cm 5.4pt;height:23.6pt"><p class="gmail-MsoListParagraphCxSpLast" style="margin:0cm;line-height:normal;font-size:11pt"><span style="font-size:12pt;color:rgb(148,54,52);letter-spacing:1pt"><font face="comic sans ms, sans-serif">USER_NAME</font></span></p></td></tr><tr style="height:22.75pt"><td width="109" valign="top" style="width:82.05pt;border-right:1pt solid rgb(217,149,148);border-bottom:1pt solid rgb(217,149,148);border-left:1pt solid rgb(217,149,148);border-top:none;background:rgb(242,219,219);padding:0cm 5.4pt;height:22.75pt"><p class="gmail-MsoListParagraphCxSpFirst" style="margin:0cm;line-height:normal;font-size:11pt"><span style="font-size:12pt;color:rgb(148,54,52);letter-spacing:1pt"><font face="comic sans ms, sans-serif">Email</font></span></p></td><td width="224" valign="top" style="width:167.65pt;border-top:none;border-left:none;border-bottom:1pt solid rgb(217,149,148);border-right:1pt solid rgb(217,149,148);background:rgb(242,219,219);padding:0cm 5.4pt;height:22.75pt"><p class="gmail-MsoListParagraphCxSpLast" style="margin:0cm;line-height:normal;font-size:11pt"><span style="font-size:12pt;color:rgb(148,54,52);letter-spacing:1pt"><font face="comic sans ms, sans-serif">EMAIL_ADDRESS</font></span></p></td></tr><tr style="height:67.4pt"><td width="109" valign="top" style="width:82.05pt;border-right:1pt solid rgb(217,149,148);border-bottom:1pt solid rgb(217,149,148);border-left:1pt solid rgb(217,149,148);border-top:none;padding:0cm 5.4pt;height:67.4pt"><p class="gmail-MsoListParagraphCxSpFirst" style="margin:0cm;line-height:normal;font-size:11pt"><span style="font-size:12pt;color:rgb(148,54,52);letter-spacing:1pt"><font face="comic sans ms, sans-serif">Message</font></span></p></td><td width="224" valign="top" style="width:167.65pt;border-top:none;border-left:none;border-bottom:1pt solid rgb(217,149,148);border-right:1pt solid rgb(217,149,148);padding:0cm 5.4pt;height:67.4pt"><p class="gmail-MsoListParagraphCxSpLast" style="margin:0cm;line-height:normal;font-size:11pt"><span style="font-size:12pt;color:rgb(148,54,52);letter-spacing:1pt"><font face="comic sans ms, sans-serif">USER_MESSAGE</font></span></p></td></tr></tbody></table><font face="comic sans ms, sans-serif"><br></font></div></div><div><font face="comic sans ms, sans-serif">Regards,</font></div><div><font face="comic sans ms, sans-serif">Admin</font></div></div>';
