# Intake Record Batch Manager

A React + TypeScript app for capturing intake records, reviewing them in a staging table, and exporting the batch as JSON.

## Overview

This project is a small intake-record management interface for collecting person details such as:

- Full name
- Email
- Phone number
- Government ID
- LGA
- Provider

The app stores records in browser localStorage, displays them in a batch table, and lets the user delete individual entries or download the full dataset as a JSON file.

## Features

- Intake form for collecting applicant data
- Record validation and structured storage
- Batch list for tracking submitted records
- Delete individual records
- Save records to localStorage
- Export all records as JSON

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Browser localStorage

## Project Structure

```text
ICT_project/
├── src/
│   ├── App.tsx
│   ├── IntakeForm.tsx
│   ├── StagingTable.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
├── README.md
└── ...
```

## Prerequisites

Before running the project, ensure you have:

- Node.js 18 or later
- npm

## Installation

From the project root, install dependencies:

```bash
npm install
```

## Run the App Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Usage

1. Fill out the intake form.
2. Submit the record to add it to the current batch.
3. Review the records in the staging table.
4. Remove any record you do not need.
5. Click the download button to export the batch as `IntakeRecords.json`.

## Notes

- Records are stored in browser `localStorage`, so they remain available after refresh.
- Each record gets a unique ID generated with `crypto.randomUUID()`.
- The JSON export contains the full batch of current records.

## License

This project is intended for educational/demo purposes unless otherwise specified.