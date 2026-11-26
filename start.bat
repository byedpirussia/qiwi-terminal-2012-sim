@echo off
chcp 65001 >nul
echo Запуск локального сервера терминала QIWI 2012...
start "" http://localhost:8080/index.html
python "%~dp0server.py"
pause
