$dirs = @('src\components\admin', 'src\components\blog', 'src\components\sandbox')
$total = 0
foreach ($d in $dirs) {
    Get-ChildItem -Path $d -File | ForEach-Object {
        $content = Get-Content $_.FullName -Raw -ErrorAction SilentlyContinue
        if (-not $content) { return }
        # Count className values that look Tailwind
        $matches = [regex]::Matches($content, '"([^"]*\b(bg-gray-\d+|bg-white|bg-black|bg-primary-\d+|bg-red-\d+|bg-green-\d+|bg-blue-\d+|text-gray-\d+|text-white|text-black|text-primary-\d+|text-red-\d+|text-green-\d+|hover:bg-|hover:text-|hover:shadow|hover:-translate|sm:w-\[|sm:flex|md:flex|md:text-\d+|md:grid|lg:grid|max-w-\[|border-gray-\d+|border-border|divide-y|focus:ring|grid-cols-\d+|space-x-\d+|space-y-\d+|flex-row|flex-col|justify-\w+|items-\w+|rounded-(md|lg|xl|2xl)|shadow-(sm|md|lg|xl)|min-h-screen)\b[^"]*)"')
        $hits = $matches.Count
        $total += $hits
        if ($hits -gt 0) {
            '{0,-55} {1,4}' -f $_.Name, $hits
        }
    }
}
"TOTAL: $total"
