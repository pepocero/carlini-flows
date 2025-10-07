# 🔑 Guía: Configurar Variables de Entorno en Vercel

## Paso a Paso (MUY FÁCIL)

### 📍 Paso 1: Ve a Vercel

1. Abre: **https://vercel.com/new**
2. Haz login si no lo has hecho

### 📍 Paso 2: Importar el Repositorio

1. Verás una lista de tus repositorios de GitHub
2. Busca y selecciona: **`solucionesit`**
3. Click en **"Import"**

### 📍 Paso 3: Configurar el Proyecto

Vercel te mostrará una pantalla de configuración. Ahí verás:

```
┌─────────────────────────────────────────┐
│  Configure Project                       │
│                                          │
│  Framework Preset: Vite  ✓ (auto)      │
│  Root Directory: ./                      │
│  Build Command: npm run build            │
│  Output Directory: dist                  │
│                                          │
│  ▼ Environment Variables  <-- AQUÍ     │
│                                          │
└─────────────────────────────────────────┘
```

### 📍 Paso 4: Agregar Variables de Entorno

**¡ESTE ES EL PASO IMPORTANTE!**

1. Busca la sección que dice **"Environment Variables"**
2. Haz click para expandirla
3. Verás 3 campos:

```
┌─────────────────────────────────────────────┐
│  Environment Variables                       │
│                                              │
│  ┌─────────────┐  ┌──────────────────────┐ │
│  │ NAME        │  │ VALUE                 │ │
│  └─────────────┘  └──────────────────────┘ │
│                                              │
│  [+ Add another]                             │
└─────────────────────────────────────────────┘
```

4. Agrega estas **3 variables** una por una:

#### Variable 1:
```
NAME:  GMAIL_USER
VALUE: pepocero@gmail.com
```
Click en "+ Add another"

#### Variable 2:
```
NAME:  GMAIL_APP_PASSWORD
VALUE: (aquí pegas tu contraseña de 16 caracteres de Google)
```
Click en "+ Add another"

#### Variable 3:
```
NAME:  RECIPIENT_EMAIL
VALUE: pepocero@gmail.com
```

### 📍 Paso 5: Deploy

1. Después de agregar las 3 variables, scroll hacia abajo
2. Click en el botón azul **"Deploy"**
3. ¡Espera 2-3 minutos! ☕

### ✅ ¡Listo!

Vercel construirá tu proyecto y te dará una URL como:
```
https://solucionesit.vercel.app
```

---

## 🎯 Resumen Visual

```
Vercel Dashboard
    ↓
Import Repository (selecciona solucionesit)
    ↓
Environment Variables (expandir)
    ↓
Agregar 3 variables:
    1. GMAIL_USER = pepocero@gmail.com
    2. GMAIL_APP_PASSWORD = tu-contraseña-de-google
    3. RECIPIENT_EMAIL = pepocero@gmail.com
    ↓
Click "Deploy"
    ↓
¡LISTO! 🎉
```

---

## ❓ Si Ya Hiciste el Deploy SIN Variables

**No te preocupes**, puedes agregarlas después:

1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** (arriba)
3. Click en **"Environment Variables"** (menú lateral izquierdo)
4. Agrega las 3 variables
5. Ve a **"Deployments"**
6. Click en los 3 puntos `···` del último deployment
7. Click en **"Redeploy"**

---

## 🔒 Tu Contraseña de Google

La contraseña que obtuviste de Google tiene este formato:
```
xxxx xxxx xxxx xxxx
(16 caracteres divididos en 4 grupos)
```

**IMPORTANTE**: 
- Cópiala completa (con o sin espacios, funciona igual)
- Pégala en el campo `GMAIL_APP_PASSWORD`
- NO la compartas con nadie
- Guárdala en un lugar seguro

---

## 🧪 Probar que Funciona

1. Una vez desplegado, abre tu sitio
2. Ve a la sección "Contacto"
3. Llena el formulario
4. Envíalo
5. Revisa tu email **pepocero@gmail.com**
6. ¡Deberías recibir el mensaje! 📧

---

## 🆘 Si Tienes Problemas

### El formulario no envía emails:

1. Verifica en Vercel → Settings → Environment Variables
2. Asegúrate de que las 3 variables están ahí
3. Verifica que `GMAIL_APP_PASSWORD` sea la contraseña correcta
4. Haz "Redeploy" del proyecto

### No encuentro Environment Variables:

- Están en la pantalla de configuración al importar
- O en: Settings → Environment Variables (después del deploy)

---

## 📸 Captura Mental del Proceso

```
1. vercel.com/new
2. Import → solucionesit
3. Scroll down → Environment Variables
4. Agregar:
   - GMAIL_USER: pepocero@gmail.com
   - GMAIL_APP_PASSWORD: tu-contraseña
   - RECIPIENT_EMAIL: pepocero@gmail.com
5. Deploy
6. ¡Listo!
```

**¡Es así de simple!** 🚀

