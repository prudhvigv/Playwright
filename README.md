# 🎭 Playwright Automation Framework (TypeScript + POM + Ortowni)

This repository contains an end-to-end automation framework to automate UI functionalities as well as API functionalities built using [Playwright](https://playwright.dev/), with TypeScript, Page Object Model (POM), ESLint, Prettier, Winston Logs and Ortwoni reporting integration.

---

## ✅ Prerequisites

Make sure the following are installed on your machine:

| Tool                                                                   | Version                             |
| ---------------------------------------------------------------------- | ----------------------------------- |
| [Node.js](https://nodejs.org/)                                         | >= 20.x                             |
| [Git](https://git-scm.com/)                                            | 

## ✅ Structure of project

Playwright/
├── src/
└──config
└──hooks
└──pages/
└──test-data
└──tests/
└──utils
├── playwright-report/
├── my-report/
├── playwright.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── package.json
├── README.md

## ✅ Create .env file to store details like BASE_URL, USERMAIL and PASSWORD

    - Create a file named with .env in root folder
    - Insert below data and enter valid values in where execution has to be happened

        BASE_URL=https://{url}/
        USERMAIL=userid
        PASSWORD=password
    - Hence this file is being added into .gitignore it won't get committed

## ✅ Install packages related to Automation by following below steps

    - Execute below command in cmd to install all required packages
    - npm install

## ✅ Execute automation suite in head mode

    - In order to execute whole suite "npm run test" can be used.
    - In order to execute a specific scenario "npm run test tests/Metadata_Manager/FileManager/FieldType.spec" can be used.

## ✅ Execute automation suite in headless mode

    - To execute whole suite `npm run test --headed=true` can be used alone
    - To execute a specific scenario `npm run test tests/Metadata_Manager/FileManager/FieldType.spec --headed=true` can be used.
    - To execute whole suite in headed mode `npm run test:headed`
    - To execute using specific tags `npm run test -g\"@Smoke\"`

## ✅ Resources and Best practices

### 🎭 Playwright

    - [Playwright DOCS] (https://playwright.dev/docs/intro)
    - [Test Configuration](https://playwright.dev/docs/test-configuration)

### 🧱 Page Object Model

    - [POM in Playwright] (https://playwright.dev/docs/pom)
