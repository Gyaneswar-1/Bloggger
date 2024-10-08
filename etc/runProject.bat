@echo off

REM To run this file in git bash type cmd "file name"
REM Set the paths to the two folders
set CLIENT="C:/Users/GYANESWAR/real programming/web devlopement/Projects/Blog Website/client"
set SERVER="C:/Users/GYANESWAR/real programming/web devlopement/Projects/Blog Website/server"

REM Navigate to the first folder and run "npm run dev"
start "" cmd /k "cd /d %CLIENT% && npm run dev"

REM Navigate to the second folder and run "npm run dev"
start "" cmd /k "cd /d %SERVER% && npm run dev"

REM Wait a few seconds to ensure servers are started before opening the browser
timeout /t 5 >nul

REM Open the browser and navigate to http://localhost:5173/
start "" "http://localhost:5173/"
