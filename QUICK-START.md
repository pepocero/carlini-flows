# ⚡ Quick Start - Soluciones IT

## 🎯 Resumen Rápido

Tu proyecto React está **100% listo** para deploy. Solo necesitas:

1. ✅ Crear repositorio en GitHub
2. ✅ Subir el código
3. ✅ Deploy en Vercel con variables de entorno

---

## 📋 Checklist de Deploy

### ✅ Paso 1: GitHub (2 minutos)

1. Ve a: **https://github.com/new**
2. Nombre: `soluciones-it`
3. ❌ NO marcar nada (README, gitignore, license)
4. Click "Create repository"
5. Ejecuta en tu terminal:

```bash
git remote add origin https://github.com/TU_USUARIO/soluciones-it.git
git push -u origin main
```

### ✅ Paso 2: Gmail App Password (3 minutos)

1. Ve a: **https://myaccount.google.com/apppasswords**
2. Crear nueva contraseña de aplicación
3. Copiar los 16 caracteres
4. ⚠️ **Guárdala**, la necesitas para Vercel

### ✅ Paso 3: Vercel Deploy (2 minutos)

1. Ve a: **https://vercel.com/new**
2. Importa tu repositorio `soluciones-it`
3. **Variables de Entorno** (¡IMPORTANTE!):

```
GMAIL_USER=pepocero@gmail.com
GMAIL_APP_PASSWORD=tu-contraseña-de-16-caracteres
RECIPIENT_EMAIL=pepocero@gmail.com
```

4. Click "Deploy"
5. ¡Listo! 🎉

---

## 🚀 Comandos Rápidos

### Para Windows:

```bash
# Opción 1: Usar el script
github-setup.bat TU_USUARIO

# Opción 2: Manual
git remote add origin https://github.com/TU_USUARIO/soluciones-it.git
git push -u origin main
```

### Para Mac/Linux:

```bash
# Opción 1: Usar el script
bash github-setup.sh TU_USUARIO

# Opción 2: Manual
git remote add origin https://github.com/TU_USUARIO/soluciones-it.git
git push -u origin main
```

---

## 🔑 Variables de Entorno

Copia esto en Vercel:

| Variable | Valor |
|----------|-------|
| `GMAIL_USER` | pepocero@gmail.com |
| `GMAIL_APP_PASSWORD` | (tu contraseña de app) |
| `RECIPIENT_EMAIL` | pepocero@gmail.com |

---

## 🧪 Probar Localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir: http://localhost:3000
```

⚠️ **Nota**: El formulario NO funcionará en local sin las variables de entorno configuradas.

---

## 🎨 Características

✨ **Diseño**
- Paleta vibrante: Cyan, Rosa, Púrpura
- Animaciones con Framer Motion
- Partículas animadas en Canvas
- 100% Responsivo

📧 **Formulario**
- Envío automático a pepocero@gmail.com
- Email HTML profesional
- Validación de campos
- Notificaciones de éxito/error

🚀 **Performance**
- Vite para builds ultra rápidos
- Code splitting automático
- Optimización de assets
- PWA ready

---

## 📁 Estructura

```
soluciones-it/
├── api/contact.js          # 📧 Backend email
├── src/components/         # 🧩 Componentes
├── vercel.json            # ⚙️ Config Vercel
└── package.json           # 📦 Dependencias
```

---

## ❓ Ayuda

### ¿Error al hacer push?

Usa un **Personal Access Token** en vez de tu contraseña:
- https://github.com/settings/tokens

### ¿Email no llega?

1. Verifica variables en Vercel
2. Revisa carpeta de spam
3. Confirma contraseña de aplicación

### ¿Build falla?

```bash
npm run build
```

Revisa errores en consola.

---

## 📚 Documentación Completa

- **Deploy detallado**: Ver `DEPLOY-INSTRUCTIONS.md`
- **README completo**: Ver `README.md`
- **Deploy Vercel**: Ver `vercel-deploy.md`

---

## 🔗 Links Útiles

- **GitHub**: https://github.com
- **Vercel**: https://vercel.com
- **Gmail App Passwords**: https://myaccount.google.com/apppasswords
- **Documentación Vite**: https://vitejs.dev
- **Documentación React**: https://react.dev

---

## ✅ Todo Está Listo

Tu proyecto incluye:
- [x] React + Vite configurado
- [x] Componentes completos
- [x] API de envío de emails
- [x] Estilos responsivos
- [x] Animaciones
- [x] Git inicializado
- [x] Configuración Vercel
- [x] Scripts de deploy
- [x] Documentación completa

**¡Solo falta subirlo a GitHub y Vercel!** 🚀

---

💡 **Tip**: Si tienes dudas, abre `DEPLOY-INSTRUCTIONS.md` para una guía paso a paso.

