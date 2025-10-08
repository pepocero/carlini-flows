# 🚀 Guía Completa: Deploy en Cloudflare Pages

## 📋 Tabla de Contenidos
1. [Preparación](#preparación)
2. [Configurar GitHub](#configurar-github)
3. [Deploy en Cloudflare Pages](#deploy-en-cloudflare-pages)
4. [Configurar Variables de Entorno](#configurar-variables-de-entorno)
5. [Verificar Funcionamiento](#verificar-funcionamiento)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Preparación

### ✅ Proyecto Optimizado para Cloudflare Pages

Tu proyecto ya está configurado con:
- ✅ **Cloudflare Functions** en `/functions/contact.js`
- ✅ **MailChannels API** (gratis para Cloudflare Workers)
- ✅ Build optimizado con Vite
- ✅ Tamaño: ~320 KB (muy por debajo del límite de 25 MB)
- ✅ `wrangler.toml` configurado

---

## 📦 Paso 1: Subir Cambios a GitHub

```bash
# Ver cambios
git status

# Agregar todos los cambios
git add .

# Commit
git commit -m "feat: Optimize for Cloudflare Pages deployment"

# Push
git push origin main
```

---

## ☁️ Paso 2: Deploy en Cloudflare Pages

### **2.1 Crear Cuenta en Cloudflare** (si no tienes)

1. Ve a: **https://dash.cloudflare.com/sign-up**
2. Registra tu cuenta (es gratis)
3. Confirma tu email

### **2.2 Conectar GitHub**

1. Ve a: **https://dash.cloudflare.com/**
2. En el menú lateral, busca **"Workers & Pages"**
3. Click en **"Create application"**
4. Selecciona la pestaña **"Pages"**
5. Click en **"Connect to Git"**
6. Autoriza Cloudflare en GitHub

### **2.3 Seleccionar Repositorio**

1. Selecciona tu repositorio: **`pepocero/solucionesit`**
2. Click en **"Begin setup"**

### **2.4 Configurar Build**

En la página de configuración:

```
Project name:     solucionesit
Branch:           main
Framework preset: Vite
Build command:    npm run build
Build output:     dist
```

**¡NO hagas deploy todavía!** ⚠️

---

## 🔐 Paso 3: Configurar Variables de Entorno

**ANTES del primer deploy**, configura las variables:

### **3.1 En la Página de Setup**

Scroll hasta **"Environment variables"**

Click en **"Add variable"**

### **3.2 Agregar Variables**

Agrega estas **2 variables**:

#### **Variable 1: Email Gmail**
```
Variable name:  GMAIL_USER
Value:          pepocero@gmail.com
```

#### **Variable 2: Email Destinatario**
```
Variable name:  RECIPIENT_EMAIL
Value:          pepocero@gmail.com
```

**Nota:** Con MailChannels no necesitas la contraseña de aplicación de Gmail ✅

### **3.3 Ambiente de Variables**

Para cada variable, selecciona:
- ✅ **Production**
- ✅ **Preview**

---

## 🚀 Paso 4: Deploy

1. Click en **"Save and Deploy"**
2. Espera 2-3 minutos mientras Cloudflare:
   - Clona tu repositorio
   - Instala dependencias
   - Ejecuta el build
   - Despliega tu sitio

---

## 🌐 Paso 5: Obtener tu URL

Una vez completado:

1. Verás tu URL: `https://solucionesit.pages.dev`
2. Click en la URL para abrir tu sitio
3. ¡Tu web está online! 🎉

---

## 📧 Paso 6: Verificar Envío de Emails

### **Importante: MailChannels**

Cloudflare Pages usa **MailChannels** (API gratuita) para enviar emails:

✅ **Ventajas:**
- Gratis para Cloudflare Workers/Pages
- No requiere contraseña de Gmail
- Fácil de configurar
- Confiable

⚠️ **Limitación:**
- Los emails se envían desde `noreply@solucionesit.com`
- El reply-to será el email del usuario que llena el formulario

### **Verificar Funcionamiento:**

1. Abre tu sitio: `https://solucionesit.pages.dev`
2. Ve a la sección **"Contacto"**
3. Llena el formulario con datos de prueba
4. Click en **"Enviar Solicitud"**
5. Deberías ver: **"¡Mensaje enviado con éxito!"**
6. Revisa tu email **pepocero@gmail.com**
7. También revisa **Spam/Correo no deseado**

---

## 🔄 Actualizar el Sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

**Cloudflare automáticamente:**
- Detecta el push
- Hace rebuild
- Actualiza tu sitio
- ¡En 1-2 minutos! ⚡

---

## 🛠️ Configuración Avanzada

### **Agregar Dominio Personalizado**

1. En Cloudflare Pages → Tu proyecto
2. Click en **"Custom domains"**
3. Click en **"Set up a custom domain"**
4. Sigue las instrucciones

### **Ver Logs de Functions**

1. En tu proyecto → **"Functions"**
2. Click en **"contact"**
3. Ver logs en tiempo real

### **Rollback a Versión Anterior**

1. En tu proyecto → **"Deployments"**
2. Encuentra el deployment anterior
3. Click en **"..."** → **"Rollback to this deployment"**

---

## 🔍 Paso 7: Troubleshooting

### **❌ Error: "Email no se envía"**

**Causa:** Variables de entorno no configuradas

**Solución:**
1. Ve a tu proyecto en Cloudflare
2. **Settings** → **Environment variables**
3. Verifica que estén:
   - `GMAIL_USER`
   - `RECIPIENT_EMAIL`
4. Si no están, agrégalas
5. Redeploy: **Deployments** → **"..."** → **"Retry deployment"**

---

### **❌ Error: "Build failed"**

**Causa:** Dependencias no instaladas o error en código

**Solución:**
```bash
# Probar build local
npm run build

# Si funciona, limpiar y volver a subir
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "fix: Update dependencies"
git push
```

---

### **❌ Error: "Function error"**

**Causa:** Error en `/functions/contact.js`

**Solución:**
1. Ve a **Functions** → **contact** → **Logs**
2. Lee el error específico
3. Revisa el código en `/functions/contact.js`
4. Corrige y sube cambios

---

### **❌ Email no llega**

**Checklist:**
- ✅ Verificar **Spam** en Gmail
- ✅ Confirmar variables en Cloudflare
- ✅ Revisar logs de la función
- ✅ Verificar que MailChannels esté respondiendo OK

**Buscar en Gmail:**
```
from:noreply@solucionesit.com
subject:Nueva Solicitud de Contacto
```

---

## 📊 Diferencias: Cloudflare vs Vercel

| Aspecto | Cloudflare Pages | Vercel |
|---------|------------------|--------|
| **Envío Emails** | MailChannels (gratis) | Nodemailer + Gmail |
| **Functions** | `/functions/` | `/api/` |
| **Formato** | Export functions | Node.js handlers |
| **Gratis** | Ilimitado | 100 GB bandwidth |
| **Velocidad** | Red global Cloudflare | Red global Vercel |
| **Variables** | Dashboard | Dashboard o CLI |

---

## ✅ Checklist Final

Antes de considerar completado:

- [ ] Repositorio en GitHub actualizado
- [ ] Deploy en Cloudflare Pages exitoso
- [ ] Variables de entorno configuradas (`GMAIL_USER`, `RECIPIENT_EMAIL`)
- [ ] Sitio accesible en `https://solucionesit.pages.dev`
- [ ] Formulario de contacto probado
- [ ] Email de prueba recibido en `pepocero@gmail.com`
- [ ] Sin errores en logs de Functions

---

## 🎯 URLs Importantes

| Recurso | URL |
|---------|-----|
| **Dashboard Cloudflare** | https://dash.cloudflare.com |
| **Tu Proyecto** | https://dash.cloudflare.com → Workers & Pages → solucionesit |
| **Sitio Web** | https://solucionesit.pages.dev |
| **GitHub Repo** | https://github.com/pepocero/solucionesit |
| **Docs Cloudflare** | https://developers.cloudflare.com/pages/ |
| **MailChannels Docs** | https://mailchannels.zendesk.com/hc/en-us |

---

## 💡 Tips Pro

### **1. Prevista de Branches**

Cloudflare crea previews automáticos para cada branch:
```
main → https://solucionesit.pages.dev
dev  → https://dev.solucionesit.pages.dev
```

### **2. Analytics Gratuito**

Cloudflare incluye analytics gratis:
- Visitas
- Países
- Páginas más vistas
- Performance

### **3. Seguridad**

Cloudflare automáticamente protege contra:
- DDoS
- Bots maliciosos
- Ataques

### **4. Cache Automático**

Assets estáticos se cachean globalmente:
- Carga ultra rápida
- Sin configuración extra

---

## 🆘 Soporte

Si tienes problemas:

1. **Logs**: Dashboard → Tu proyecto → Functions → Logs
2. **Documentación**: https://developers.cloudflare.com/pages/
3. **Community**: https://community.cloudflare.com/
4. **Discord**: Cloudflare Developers Discord

---

## 🎉 ¡Listo!

Tu sitio está:
- ✅ Desplegado en Cloudflare Pages
- ✅ Optimizado y rápido
- ✅ Con formulario funcional
- ✅ Protegido por Cloudflare
- ✅ Con SSL automático
- ✅ Gratis para siempre

**¡Felicitaciones! 🚀**

---

**Desarrollado con ❤️ usando React + Vite + Cloudflare Pages**

