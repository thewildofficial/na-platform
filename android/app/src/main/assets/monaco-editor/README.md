# Monaco Code Editor
This is a small build of Monaco code editor. We use the output of these files to render the Monaco Editor inside a webview.

## Optimizations
This setup was carefully crafted to match the needs of our application.

* We do not load more languages than needed.
* We receive environment variables from the webview via the `__monacoEditorEnvVars: ICodeEditor` global variable

## Updating libs
If monaco editor is updated for the web build of the app we need to also update it and build it here as well.

* `npm run build` - This is the only command you need here
* To make sure the build is running properly try to open `dist/index.html` in Chrome