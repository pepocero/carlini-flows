import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const { name, email, phone, company, service, message } = req.body

  // Validación básica
  if (!name || !email || !phone || !company || !service || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' })
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email no válido' })
  }

  try {
    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'pepocero@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || '' // Usar contraseña de aplicación de Gmail
      }
    })

    // Mapear servicios
    const serviceNames = {
      'web-development': 'Aplicación Web a Medida',
      'ai-digitalization': 'Digitalización con IA',
      'crm-customization': 'Personalización de CRM',
      'consultation': 'Consultoría General'
    }

    const serviceName = serviceNames[service] || service

    // Configurar email
    const mailOptions = {
      from: `"Formulario Soluciones IT" <${process.env.GMAIL_USER || 'pepocero@gmail.com'}>`,
      to: process.env.RECIPIENT_EMAIL || 'pepocero@gmail.com',
      replyTo: email,
      subject: `Nueva Solicitud de Contacto - ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #00D9FF 0%, #8338EC 50%, #FF006E 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background: white;
              border-radius: 8px;
              border-left: 4px solid #00D9FF;
            }
            .field-label {
              font-weight: 600;
              color: #00D9FF;
              margin-bottom: 5px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .field-value {
              color: #333;
              font-size: 16px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #8338EC;
              margin-top: 20px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding: 20px;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🚀 Nueva Solicitud de Contacto</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulario de Soluciones IT</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="field-label">Nombre Completo</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #00D9FF; text-decoration: none;">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="field-label">Teléfono</div>
              <div class="field-value"><a href="tel:${phone}" style="color: #00D9FF; text-decoration: none;">${phone}</a></div>
            </div>
            
            <div class="field">
              <div class="field-label">Empresa</div>
              <div class="field-value">${company}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Servicio de Interés</div>
              <div class="field-value">${serviceName}</div>
            </div>
            
            <div class="message-box">
              <div class="field-label" style="color: #8338EC;">Mensaje</div>
              <div class="field-value" style="margin-top: 10px;">${message}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto de Soluciones IT</p>
            <p style="margin-top: 10px;">
              <strong>Responder a:</strong> 
              <a href="mailto:${email}" style="color: #00D9FF; text-decoration: none;">${email}</a>
            </p>
          </div>
        </body>
        </html>
      `
    }

    // Enviar email
    await transporter.sendMail(mailOptions)

    return res.status(200).json({ 
      success: true, 
      message: 'Email enviado correctamente' 
    })

  } catch (error) {
    console.error('Error al enviar email:', error)
    return res.status(500).json({ 
      error: 'Error al enviar el email',
      details: error.message 
    })
  }
}

