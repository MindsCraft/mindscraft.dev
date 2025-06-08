# Dependency Resolution Notes

## Recent Changes

The following changes were made to resolve a dependency conflict between `next` and `next-auth`:

1. Updated Next.js from canary version `^15.4.0-canary.71` to stable version `^15.0.0`
2. Added a `resolutions` field to enforce the Next.js version
3. Added an `install:legacy` script that uses the `--legacy-peer-deps` flag

## Error Details

The original error was:

```
npm error peer next@"^12.2.5 || ^13 || ^14 || ^15" from next-auth@4.24.11
npm error node_modules/next-auth
npm error   next-auth@"^4.24.11" from the root project
npm error
npm error Conflicting peer dependency: next@15.3.3
npm error node_modules/next
npm error   peer next@"^12.2.5 || ^13 || ^14 || ^15" from next-auth@4.24.11
npm error   node_modules/next-auth
npm error     next-auth@"^4.24.11" from the root project
```

## How to Handle Future Dependency Issues

If you encounter dependency conflicts in the future, you have several options:

1. **Use the legacy install script**: Run `npm run install:legacy` to install dependencies while ignoring peer dependency conflicts.

2. **Update package versions**: Modify the versions in `package.json` to use compatible versions.

3. **Add specific resolutions**: If a particular package needs a specific version, add it to the `resolutions` field.

4. **Use npm flags directly**: Run npm commands with flags like:
   - `npm install --legacy-peer-deps`: Ignores peer dependency conflicts
   - `npm install --force`: Forces installation despite conflicts

## Notes on Next.js and next-auth Compatibility

- next-auth@4.24.11 requires next@^12.2.5 || ^13 || ^14 || ^15
- Using canary/pre-release versions of Next.js may cause compatibility issues
- It's recommended to use stable versions of Next.js with next-auth
