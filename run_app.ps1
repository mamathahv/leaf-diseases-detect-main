$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location "$scriptDir\leaf-diseases-detect-main"
$env:PYTHONPATH = "C:\Users\MY PC\AppData\Local\Programs\Python\Python312\Lib\site-packages"
$env:PYTHONIOENCODING = "utf-8"
& "C:\ProgramData\anaconda3\python.exe" -m streamlit run main.py
