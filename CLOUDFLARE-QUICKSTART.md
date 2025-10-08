# ⚡ Quick Start: Cloudflare Pages

## 🎯 Pasos Rápidos (5 minutos)

### **1. Push a GitHub** (ya hecho ✅)
```bash
git add .
git commit -m "feat: Optimize for Cloudflare Pages"
git push origin main
```

### **2. Cloudflare Pages**

1. Ve a: **https://dash.cloudflare.com/**
2. **Workers & Pages** → **Create application** → **Pages**
3. **Connect to Git** → Selecciona `pepocero/solucionesit`

### **3. Configuración Build**

```
Project name:     solucionesit
Branch:           main
Framework:        Vite
Build command:    npm run build
Output directory: dist
```

### **4. Variables de Entorno** ⚠️ **IMPORTANTE**

Click en **"Add variable"** y agrega:

```
GMAIL_USER=pepocero@gmail.com
RECIPIENT_EMAIL=pepocero@gmail.com
```

Marca: ✅ Production ✅ Preview

### **5. Deploy**

Click en **"Save and Deploy"** → Espera 2-3 minutos

---

## ✅ Tu Sitio

URL: `https://solucionesit.pages.dev`

---

## 📧 Sobre el Envío de Emails

✅ **Usa MailChannels** (gratis con Cloudflare)
✅ **NO necesitas contraseña de Gmail**
✅ **Emails desde:** `noreply@solucionesit.com`
✅ **Reply-to:** Email del usuario que llena el formulario
✅ **Llegan a:** `pepocero@gmail.com`

---

## 🔄 Actualizar Sitio

```bash
# Hacer cambios en el código
git add .
git commit -m "update: Mi cambio"
git push

# ¡Cloudflare actualiza automáticamente!
```

---

## 🆘 Si el Email No Llega

1. Revisa **Spam** en Gmail
2. Busca: `from:noreply@solucionesit.com`
3. Verifica variables en: Dashboard → Settings → Environment variables
4. Revisa logs en: Dashboard → Functions → contact → Logs

---

## 📚 Documentación Completa

Ver: `CLOUDFLARE-DEPLOY.md`

---

**¡Eso es todo!** 🚀

