### TypeScript

### Requirements :
npm install --global typescript
npm install --global tslint

### Compilation 
`tsc`

### Available native commands : 
- `tsc --help`
- `tsc --app.ts`  Compile a file
- `tsc --sourceMap app.ts`  Generate Source map : useful when debugging  - "the debugger can run the JavaScript code but show you the line that actually generated it."

### config 
name of the file : `tsconfig.json`

- `tsc ‐‐init`  : initialize a ts config file 
- `tsc` or `tsc ‐‐config path/tsconfig.json` 

### Linter (Almost same as a ESLINT for JavaScript)
name of the file : `tsconfig.json`

`tslint src/ts/app.ts`

To see rules possibilities : https://palantir.github.io/tslint/rules/ 

### tests
- `npm install --save-dev jasmine`
- `npm install jasmine @types/jasmine`
- `jasmine init`

### improvements : 
- Change index.html location
- finish tests