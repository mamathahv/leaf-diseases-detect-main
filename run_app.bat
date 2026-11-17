@echo off
echo Starting Leaf Disease Detection System...
cd /d "%~dp0leaf-diseases-detect-main"
set PYTHONPATH=C:\Users\MY PC\AppData\Local\Programs\Python\Python312\Lib\site-packages;%PYTHONPATH%
set PYTHONIOENCODING=utf-8
"C:\ProgramData\anaconda3\python.exe" -m streamlit run main.py
pause
