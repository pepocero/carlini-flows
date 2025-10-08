// Cloudflare Pages Function para envío de emails
export async function onRequestPost(context) {
  const { request, env } = context

  // Agregar CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  }

  // Handle OPTIONS request
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Parsear el body de la request
    const data = await request.json()
    const { name, email, phone, company, service, message } = data

    // Validación básica
    if (!name || !email || !phone || !company || !service || !message) {
      return new Response(JSON.stringify({ error: 'Todos los campos son obligatorios' }), {
        status: 400,
        headers: corsHeaders
      })
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email no válido' }), {
        status: 400,
        headers: corsHeaders
      })
    }

    // Mapear servicios
    const serviceNames = {
      'web-development': 'Aplicación Web a Medida',
      'ai-digitalization': 'Digitalización con IA',
      'crm-customization': 'Personalización de CRM',
      'consultation': 'Consultoría General'
    }

    const serviceName = serviceNames[service] || service
    const recipientEmail = env.RECIPIENT_EMAIL || 'pepocero@gmail.com'

    // Usar EmailJS (servicio gratuito que funciona perfecto con Cloudflare)
    const emailJsServiceId = env.EMAILJS_SERVICE_ID
    const emailJsTemplateId = env.EMAILJS_TEMPLATE_ID
    const emailJsPublicKey = env.EMAILJS_PUBLIC_KEY

    // Si no hay credenciales de EmailJS, usar solución temporal
    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      // Por ahora, solo logear y retornar éxito para testing
      console.log('Nuevo mensaje de contacto:')
      console.log('Nombre:', name)
      console.log('Email:', email)
      console.log('Teléfono:', phone)
      console.log('Empresa:', company)
      console.log('Servicio:', serviceName)
      console.log('Mensaje:', message)
      console.log('Destinatario:', recipientEmail)
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Formulario recibido correctamente. Configuración de EmailJS pendiente.',
        note: 'Los datos han sido registrados en los logs.'
      }), {
        status: 200,
        headers: corsHeaders
      })
    }

    // Enviar con EmailJS
    const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: emailJsServiceId,
        template_id: emailJsTemplateId,
        user_id: emailJsPublicKey,
        template_params: {
          to_email: recipientEmail,
          from_name: name,
          from_email: email,
          phone: phone,
          company: company,
          service: serviceName,
          message: message,
          reply_to: email
        }
      })
    })

    if (!emailJsResponse.ok) {
      const errorText = await emailJsResponse.text()
      throw new Error(`EmailJS error: ${errorText}`)
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Email enviado correctamente' 
    }), {
      status: 200,
      headers: corsHeaders
    })

  } catch (error) {
    console.error('Error completo:', error)
    console.error('Error stack:', error.stack)
    console.error('Error name:', error.name)
    
    return new Response(JSON.stringify({ 
      error: 'Error al enviar el email',
      details: error.message,
      errorType: error.name,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: corsHeaders
    })
  }
}
