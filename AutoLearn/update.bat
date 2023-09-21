taskkill -im AutoLearn.exe
ping 127.0.0.1 -n 2 > nul
taskkill -im chromedriver.exe
taskkill -im msedgedriver.exe
ping 127.0.0.1 -n 1 > nul
copy /y .\update
start AutoLearn.exe
del .\update\* /q