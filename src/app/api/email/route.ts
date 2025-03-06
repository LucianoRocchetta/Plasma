import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    try {
    const { name, email, number, message} = await request.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        /* 
          setting service as 'gmail' is same as providing these setings:
          host: "smtp.gmail.com",
          port: 465,
          secure: true
          If you want to use a different email provider other than gmail, you need to provide these manually.
          Or you can go use these well known services and their settings at
          https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
      */
        auth: {
          user: process.env.COMPANY_EMAIL,
          pass: process.env.COMPANY_PRIVATE_KEY_EMAIL,
        },
      });

    const mailOptions: Mail.Options = {
        from: process.env.COMPANY_EMAIL,
        to: process.env.COMPANY_EMAIL,
        subject: `Nuevo mensaje de contacto de ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${number}\nMensaje: ${message}`,
    }

    const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error al enviar el correo." }, { status: 500 });
    }
}