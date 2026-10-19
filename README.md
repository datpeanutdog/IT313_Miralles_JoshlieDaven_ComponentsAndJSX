IT313 Lab 4: Student Roster Card Renderer

For my Entire Code its all in the Class_Roster due to the handling of my folders

Project Overview
This project is a React Native app built with Expo that displays a class roster using custom components, props, array mapping, conditional rendering, and dynamic key handling.

Files
- StudentCard.js: Renders student name, course, units, and a "Full Load" badge if units >= 18 using conditional rendering (&&).
- StudentRoster.js: Holds student data state, calculates student count dynamically, maps data into StudentCard components, and toggles key types (ID vs Index) and list reversing.
- App.js: Main entry point that renders the StudentRoster component.

How to Run
1. Install dependencies:
   npm install

2. Run on web:
   npx expo start --web

3. Run on mobile:
   npx expo start
