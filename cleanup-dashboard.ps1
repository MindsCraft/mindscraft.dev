# Cleanup script for the protected dashboard directory
# This script removes all unnecessary files created during troubleshooting

$protectedDashboardDir = "src\app\admin\(protected)\dashboard"

# Files to keep (with minimal content)
$filesToKeep = @(
    "page.tsx",
    "route.js"
)

# Get all files in the directory
$allFiles = Get-ChildItem -Path $protectedDashboardDir -File

# Remove files that are not in the keep list
foreach ($file in $allFiles) {
    if ($filesToKeep -notcontains $file.Name) {
        Write-Host "Removing $($file.FullName)"
        Remove-Item -Path $file.FullName -Force
    }
}

Write-Host "Cleanup completed successfully!"
