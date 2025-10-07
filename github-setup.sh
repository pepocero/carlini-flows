#!/bin/bash

# Script para configurar GitHub y subir el proyecto
# Uso: bash github-setup.sh TU_USUARIO

echo "🚀 Configuración de GitHub - Soluciones IT"
echo "=========================================="
echo ""

# Verificar si se proporcionó el usuario
if [ -z "$1" ]; then
    echo "❌ Error: Debes proporcionar tu usuario de GitHub"
    echo ""
    echo "Uso: bash github-setup.sh TU_USUARIO"
    echo "Ejemplo: bash github-setup.sh pepocero"
    exit 1
fi

GITHUB_USER=$1
REPO_NAME="soluciones-it"

echo "👤 Usuario de GitHub: $GITHUB_USER"
echo "📦 Nombre del repositorio: $REPO_NAME"
echo ""

# Verificar si Git está inicializado
if [ ! -d ".git" ]; then
    echo "📁 Inicializando Git..."
    git init
    git add .
    git commit -m "feat: Initial commit - Soluciones IT website"
fi

# Renombrar rama a main
echo "🔀 Configurando rama main..."
git branch -M main

# Agregar remote
echo "🔗 Configurando remote de GitHub..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"

echo ""
echo "✅ Configuración completada!"
echo ""
echo "📝 Próximos pasos:"
echo ""
echo "1. Crea el repositorio en GitHub:"
echo "   https://github.com/new"
echo "   - Nombre: $REPO_NAME"
echo "   - NO marques 'Add README', 'Add .gitignore' ni 'Add license'"
echo ""
echo "2. Ejecuta estos comandos para subir el código:"
echo "   git push -u origin main"
echo ""
echo "3. Si te pide credenciales:"
echo "   - Usuario: $GITHUB_USER"
echo "   - Contraseña: Usa un Personal Access Token"
echo "   - Crear token: https://github.com/settings/tokens"
echo ""
echo "4. Luego, ve a Vercel para hacer deploy:"
echo "   https://vercel.com/new"
echo ""
echo "¡Buena suerte! 🎉"

