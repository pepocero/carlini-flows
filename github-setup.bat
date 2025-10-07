@echo off
REM Script para configurar GitHub y subir el proyecto (Windows)
REM Uso: github-setup.bat TU_USUARIO

echo.
echo 🚀 Configuracion de GitHub - Soluciones IT
echo ==========================================
echo.

if "%1"=="" (
    echo ❌ Error: Debes proporcionar tu usuario de GitHub
    echo.
    echo Uso: github-setup.bat TU_USUARIO
    echo Ejemplo: github-setup.bat pepocero
    exit /b 1
)

set GITHUB_USER=%1
set REPO_NAME=soluciones-it

echo 👤 Usuario de GitHub: %GITHUB_USER%
echo 📦 Nombre del repositorio: %REPO_NAME%
echo.

REM Renombrar rama a main
echo 🔀 Configurando rama main...
git branch -M main

REM Agregar remote
echo 🔗 Configurando remote de GitHub...
git remote remove origin 2>nul
git remote add origin https://github.com/%GITHUB_USER%/%REPO_NAME%.git

echo.
echo ✅ Configuracion completada!
echo.
echo 📝 Proximos pasos:
echo.
echo 1. Crea el repositorio en GitHub:
echo    https://github.com/new
echo    - Nombre: %REPO_NAME%
echo    - NO marques 'Add README', 'Add .gitignore' ni 'Add license'
echo.
echo 2. Ejecuta este comando para subir el codigo:
echo    git push -u origin main
echo.
echo 3. Si te pide credenciales:
echo    - Usuario: %GITHUB_USER%
echo    - Contraseña: Usa un Personal Access Token
echo    - Crear token: https://github.com/settings/tokens
echo.
echo 4. Luego, ve a Vercel para hacer deploy:
echo    https://vercel.com/new
echo.
echo ¡Buena suerte! 🎉
echo.
pause

