$ENVIRONMENT_DIR = "./environment/"
$HTTP_TIMEOUT = 3600

function Download-Environment() {
    New-Item -Path $ENVIRONMENT_DIR -ItemType Directory -Force | Out-Null

    $Url = "https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions-with-downloads.json"
    $UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
    $Response = Invoke-WebRequest -Uri $Url -UserAgent $UA | ConvertFrom-Json
    $Version = $Response.channels.Stable.version
    Write-Host "Latest Stable $Version"
    
    $Chromes = $Response.channels.Stable.downloads.chrome
    $IsIncludeWin64 = $false
    for($i = 0; $i -lt $Chromes.Count; $i++){
        if ($Chromes[$i].platform -eq "win64"){
            $Url = $Chromes[$i].url
            $FileName = $Url.Split("/")[-1]
            $FilePath = $ENVIRONMENT_DIR + $FileName
            Write-Host "Downloading $FileName..."
            Invoke-WebRequest -Uri $Url -OutFile $FilePath -TimeoutSec $HTTP_TIMEOUT -UseBasicParsing

            Expand-Archive -Path $FilePath -DestinationPath $ENVIRONMENT_DIR -Force

            $IsIncludeWin64 = $true
            break
        }
    }
    if ($IsIncludeWin64 -eq $false){
        Write-Error "No chrome for win64 platform found!"
        exit 1
    }

    $ChromeDriver = $Response.channels.Stable.downloads.chromedriver
    $IsIncludeWin64 = $false
    for($i = 0; $i -lt $ChromeDriver.Count; $i++){
        if ($ChromeDriver[$i].platform -eq "win64"){
            $Url = $ChromeDriver[$i].url
            $FileName = $Url.Split("/")[-1]
            $FilePath = $ENVIRONMENT_DIR + $FileName
            Write-Host "Downloading $FileName..."
            Invoke-WebRequest -Uri $Url -OutFile $FilePath -TimeoutSec $HTTP_TIMEOUT -UseBasicParsing

            Expand-Archive -Path $FilePath -DestinationPath $ENVIRONMENT_DIR -Force

            $IsIncludeWin64 = $true
            break
        }
    }
    if ($IsIncludeWin64 -eq $false) {
        Write-Error "No chrome_driver for win64 platform found!"
        exit 2
    }
}

function Read-Version() {
    $Files = Get-ChildItem -Path $ENVIRONMENT_DIR -Filter "*.manifest" -File -Recurse
    if($Files.Count -eq 0){
        Write-Warning "No manifest file found! Try to download environment..."

        Remove-Item -Path $ENVIRONMENT_DIR -Force -Recurse
        Download-Environment
    }
    else{
        $File = $Files[0]
        Write-Host "Current version: $File.NameWithoutExtension"
    }
}

function Check-Environment() {
    if (Test-Path -Path $ENVIRONMENT_DIR -PathType Container) {
        Read-Version
    }
    else{
        Write-Warning "No environment directory found! Try to download environment..."
        Download-Environment
    }
}

Check-Environment