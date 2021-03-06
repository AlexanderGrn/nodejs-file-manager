# Scoring: File Manager
## Basic Scope
- General

    - [x] **+6** Application accepts username and prints proper message

    - [x] **+10** Application exits if user pressed `ctrl+c` or sent `.exit` command and proper message is printed
- Operations fail
    - [x] **+20** Attempts to perform an operation on a non-existent file or work on a non-existent path result in the operation fail
    - [x] **+10** Operation fail doesn't crash application
- Navigation & working directory operations implemented properly
    - [x] **+10** Go upper from current directory
    - [x] **+10** Go to dedicated folder from current directory
    - [x] **+10** List all files and folders in current directory
- Basic operations with files implemented properly
    - [ ] **+10** Read file and print it's content in console
    - [ ] **+10** Create empty file
    - [ ] **+10** Rename file
    - [ ] **+10** Copy file
    - [ ] **+10** Move file
    - [ ] **+10** Delete file
- Operating system info (prints following information in console) implemented properly
    - [x] **+6** Get EOL (default system End-Of-Line)
    - [x] **+10** Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
    - [x] **+6** Get home directory
    - [x] **+6** Get current *system user name* (Do not confuse with the username that is set when the application starts)
    - [x] **+6** Get CPU architecture for which Node.js binary has compiled
- Hash calculation implemented properly
    - [ ] **+20** Calculate hash for file 
- Compress and decompress operations
    - [ ] **+20** Compress file (using Brotli algorithm)
    - [ ] **+20** Decompress file (using Brotli algorithm)

## Advanced Scope

- [ ] **+50** All files operations with reading/writing should be performed using Streams API
- [x] **+20** Codebase is written in ESM modules instead of CommonJS
- [x] **+20** Codebase is separated (at least 7 modules)

## Forfeits

- **-95% of total task score** Any external tools/libraries are used
- **-30% of total task score** Commits after deadline (except commits that affect only `Readme.md`, `.gitignore`, etc.)

## Total score 150 / 320