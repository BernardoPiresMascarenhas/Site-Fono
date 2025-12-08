import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, numero, mensagem } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail é nativo no nodemailer, bem simples
      auth: {
        user: process.env.EMAIL_USER, // Gmail
        pass: process.env.EMAIL_PASS, // Senha de App do Gmail
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_RECEIVER, // Envia para o Hotmail dela
      replyTo: email, // O "Responder" vai para o cliente
      subject: "Novo Agendamento - Site Fono",
      text: `
        Nome: ${nome}
        Email: ${email}
        Telefone: ${numero}
        
        Mensagem:
        ${mensagem}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Enviado com sucesso!" });
  } catch (error) {
    console.error("Erro no envio:", error);
    return NextResponse.json({ message: "Erro ao enviar." }, { status: 500 });
  }
}