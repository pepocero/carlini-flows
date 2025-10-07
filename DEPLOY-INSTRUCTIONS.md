# 📦 Instrucciones de Deploy - Soluciones IT

## ✅ Git Inicializado

El repositorio Git ya está inicializado y los archivos están en commit.

## 🚀 Próximos Pasos

### 1️⃣ Crear Repositorio en GitHub

#### Opción A: Crear desde la web (Recomendado)

1. Ve a https://github.com/new
2. Configura el repositorio:
   - **Repository name**: `soluciones-it`
   - **Description**: `Website profesional para empresa de soluciones informáticas con React + Vite`
   - **Visibility**: Public o Private (tu elección)
   - ❌ **NO marcar** "Add a README file"
   - ❌ **NO agregar** .gitignore ni license (ya los tenemos)

3. Click en "Create repository"

4. En la siguiente pantalla, copia el comando de la sección "...or push an existing repository from the command line":

```bash
git remote add origin https://github.com/TU_USUARIO/soluciones-it.git
git branch -M main
git push -u origin main
```

5. Ejecuta esos comandos en la terminal de tu proyecto

#### Opción B: Usar el script de deploy

Ejecuta en la terminal:

```bash
# Reemplaza TU_USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/soluciones-it.git
git branch -M main
git push -u origin main
```

### 2️⃣ Configurar Gmail para el Formulario

**IMPORTANTE**: El formulario de contacto necesita una contraseña de aplicación de Gmail.

1. Ve a https://myaccount.google.com/security
2. Habilita "Verificación en 2 pasos" si no está activada
3. En "Contraseñas de aplicaciones":
   - Selecciona "Correo"
   - Selecciona "Otro" → escribe "Soluciones IT"
   - Copia la contraseña de 16 caracteres generada

4. Guarda esta contraseña, la necesitarás para Vercel

### 3️⃣ Deploy en Vercel

#### Método 1: Desde el Dashboard (Más fácil)

1. Ve a https://vercel.com/new
2. Importa tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Vite
4. **Variables de Entorno** (¡MUY IMPORTANTE!):
   
   Agrega estas 3 variables:
   
   ```
   GMAIL_USER=pepocero@gmail.com
   GMAIL_APP_PASSWORD=tu-contraseña-de-aplicacion-de-16-caracteres
   RECIPIENT_EMAIL=pepocero@gmail.com
   ```

5. Click en "Deploy"
6. ¡Espera 2-3 minutos y listo! 🎉

#### Método 2: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Deploy
vercel

# Agregar variables de entorno
vercel env add GMAIL_USER
# Valor: pepocero@gmail.com

vercel env add GMAIL_APP_PASSWORD
# Valor: tu-contraseña-de-aplicacion

vercel env add RECIPIENT_EMAIL
# Valor: pepocero@gmail.com

# Deploy a producción
vercel --prod
```

### 4️⃣ Probar el Formulario

1. Abre tu sitio desplegado en Vercel
2. Ve a la sección "Contacto"
3. Llena el formulario y envíalo
4. Verifica que el email llega a **pepocero@gmail.com**
5. Revisa también la carpeta de spam por si acaso

### 5️⃣ Dominio Personalizado (Opcional)

Si tienes un dominio:

1. En Vercel → Settings → Domains
2. Agrega tu dominio
3. Configura los DNS según las instrucciones

## 🔧 Comandos Útiles

```bash
# Ver estado de Git
git status

# Ver historial
git log --oneline

# Ver remotes
git remote -v

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## 📊 Estructura del Proyecto

```
soluciones-it/
├── api/
│   └── contact.js          # ✉️ API de envío de emails
├── src/
│   ├── components/         # 🧩 Componentes React
│   ├── App.jsx            # 📱 App principal
│   └── main.jsx           # 🚀 Entry point
├── public/                # 📁 Assets estáticos
├── .gitignore            # 🚫 Archivos ignorados
├── package.json          # 📦 Dependencias
├── vite.config.js        # ⚙️ Config de Vite
├── vercel.json           # 🔧 Config de Vercel
└── README.md             # 📖 Documentación

```

## 🎨 Paleta de Colores

- **Cyan**: #00D9FF (Primary)
- **Rosa**: #FF006E (Secondary)
- **Púrpura**: #8338EC (Accent)
- **Verde**: #06FFA5 (Success)

## 📝 Variables de Entorno

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `GMAIL_USER` | pepocero@gmail.com | Email de Gmail |
| `GMAIL_APP_PASSWORD` | (16 caracteres) | Contraseña de app |
| `RECIPIENT_EMAIL` | pepocero@gmail.com | Destinatario |

## ❓ Problemas Comunes

### Error al hacer push a GitHub

```bash
# Si te pide credenciales, usa:
# Usuario: tu-usuario-de-github
# Contraseña: Personal Access Token (no tu contraseña normal)

# Para crear un token:
# https://github.com/settings/tokens
```

### Error en Vercel: "Email not sent"

1. Verifica las variables de entorno en Vercel
2. Confirma que la contraseña de aplicación es correcta
3. Revisa los logs: `vercel logs`

### Build error

```bash
# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📞 Contacto

- **Email**: pepocero@gmail.com
- **Proyecto**: https://github.com/TU_USUARIO/soluciones-it
- **Deploy**: https://tu-proyecto.vercel.app

---

## ✨ Próximos Pasos Opcionales

1. [ ] Agregar Google Analytics
2. [ ] Implementar blog con MDX
3. [ ] Agregar casos de éxito
4. [ ] Implementar chat en vivo
5. [ ] Crear dashboard de admin
6. [ ] Agregar multi-idioma (i18n)

---

**¡Todo listo! 🎉 Tu proyecto está preparado para desplegarse en Vercel**

