# 🚀 Guía de Deploy en Vercel

## Paso 1: Configurar Gmail App Password

1. Ve a https://myaccount.google.com/security
2. Activa "Verificación en 2 pasos" si no está activada
3. En "Contraseñas de aplicaciones", crea una nueva:
   - Seleccionar "Correo"
   - Seleccionar "Otro" → escribir "Soluciones IT"
   - Copiar la contraseña de 16 caracteres

## Paso 2: Subir a GitHub

```bash
# Inicializar Git
git init
git add .
git commit -m "feat: Initial commit - Soluciones IT website"

# Crear repositorio en GitHub
# Ve a https://github.com/new
# Nombre: soluciones-it
# Descripción: Website profesional para empresa de soluciones informáticas

# Conectar y subir
git remote add origin https://github.com/TU_USUARIO/soluciones-it.git
git branch -M main
git push -u origin main
```

## Paso 3: Deploy en Vercel

### Opción A: Desde Vercel Dashboard (Recomendado)

1. Ve a https://vercel.com/new
2. Import Git Repository
3. Selecciona tu repositorio `soluciones-it`
4. Configuración:
   - Framework Preset: Vite
   - Build Command: `npm run build` (auto-detectado)
   - Output Directory: `dist` (auto-detectado)

5. **Variables de Entorno** (importante):
   ```
   GMAIL_USER=pepocero@gmail.com
   GMAIL_APP_PASSWORD=tu-contraseña-de-aplicacion-de-16-caracteres
   RECIPIENT_EMAIL=pepocero@gmail.com
   ```

6. Click en "Deploy"

### Opción B: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Agregar variables de entorno
vercel env add GMAIL_USER
vercel env add GMAIL_APP_PASSWORD
vercel env add RECIPIENT_EMAIL

# Deploy a producción
vercel --prod
```

## Paso 4: Configurar Dominio (Opcional)

1. En tu proyecto de Vercel → Settings → Domains
2. Agregar tu dominio personalizado
3. Configurar DNS según instrucciones de Vercel

## Verificación

1. Abre tu sitio desplegado
2. Prueba el formulario de contacto
3. Verifica que recibes el email en pepocero@gmail.com

## Troubleshooting

### Error: "Authentication failed"
- Verifica que la contraseña de aplicación sea correcta
- Asegúrate de que las variables de entorno estén configuradas en Vercel

### Email no llega
- Revisa la carpeta de spam
- Verifica los logs en Vercel Functions
- Confirma que Gmail permite aplicaciones menos seguras

### Build fails
- Asegúrate de que `package.json` tiene todas las dependencias
- Verifica que Node.js versión sea 18+
- Revisa los logs de build en Vercel

## Comandos Útiles

```bash
# Ver logs de producción
vercel logs

# Ver logs en tiempo real
vercel logs --follow

# Ver información del proyecto
vercel inspect

# Eliminar deployment
vercel remove [deployment-url]
```

## Variables de Entorno Requeridas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `GMAIL_USER` | Email de Gmail | pepocero@gmail.com |
| `GMAIL_APP_PASSWORD` | Contraseña de aplicación | abcd efgh ijkl mnop |
| `RECIPIENT_EMAIL` | Email destinatario | pepocero@gmail.com |

## URLs Importantes

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/TU_USUARIO/soluciones-it
- **Documentación Vercel**: https://vercel.com/docs

