param(
    [Parameter(Mandatory = $true, HelpMessage = "Please provide a major version number for Chrome (e.g., 125).")]
    [string]$MajorVersion
)

$url = "https://googlechromelabs.github.io/chrome-for-testing/LATEST_RELEASE_$MajorVersion"
try {
    $fullVersion = Invoke-RestMethod -Uri $url
    Write-Host "The latest Chrome version for major version $MajorVersion is: $fullVersion"
}
catch {
    Write-Error "Failed to retrieve the latest Chrome version. Please check the major version number and try again."
    exit 1
}

$chromeUrl = "https://storage.googleapis.com/chrome-for-testing-public/$fullVersion/win64/chrome-win64.zip"
$chromeDriverUrl = "https://storage.googleapis.com/chrome-for-testing-public/$fullVersion/win64/chromedriver-win64.zip"

Write-Host "Download URL for Chrome: $chromeUrl"
Write-Host "Download URL for ChromeDriver: $chromeDriverUrl"
# download the Chrome zip file
try {
    Invoke-WebRequest -Uri $chromeUrl -OutFile "chrome-win64-$fullVersion.zip"
    Write-Host "Chrome downloaded successfully."
}
catch {
    Write-Error "Failed to download Chrome. Please check the URL and try again."
    exit 1
}
# download the ChromeDriver zip file
try {
    Invoke-WebRequest -Uri $chromeDriverUrl -OutFile "chromedriver-win64-$fullVersion.zip"
    Write-Host "ChromeDriver downloaded successfully."
}
catch {
    Write-Error "Failed to download ChromeDriver. Please check the URL and try again."
    exit 1
}
