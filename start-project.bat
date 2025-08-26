@echo off
echo Demarrage du backend...
start cmd /k "cd backend && node server.js"

timeout /t 3

echo Demarrage du frontend...
start cmd /k "cd frontend && npm run serve"

echo Tout est lance. Verifiez les fenetres ouvertes pour backend et frontend.
pause
