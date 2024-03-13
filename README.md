# Stock Market Recommender App

## Introduction

This document serves as the primary documentation for the Stock Market Recommender App developed for GoTo's technical interview process. The app is built using React Native and is designed to provide stock market recommendations based on stock prices and social media data.

## Assumptions

During the development of this app, the following assumptions were made:

- **HTTP Requests**: The app uses `axios` for making HTTP requests to external APIs.
- **Stock Symbol Choices**: The app offers a limited set of choices concerning stock symbols.
- **Social Media Platforms**: The app considers data from Facebook, Instagram, Twitter, and TikTok.
- **Time Window**: The app allows users to select time windows of the last 10 days, 15 days, 30 days, and 60 days.

## Features

### Base Features

- [x] React Native based application.
- [x] Mock data generation using `Math.random`.
- [x] Recommendation algorithm using stock price and social media counts.
- [x] Maintainability and scalability considered.
- [x] Quality assurance through tests for the recommendation algorithm.
- [x] User-friendly UI for input and data presentation.
- [x] Separate sections for user input, data display, and recommendations.
- [ ] **Not Implemented**: Display of social media post counts.

### Optional Features

- [] **Not Implemented**: Testing of additional components beyond the recommendation algorithm.
- [x] Dynamic addition/removal of social media services.
- [x] Flexible architecture for switching recommendation algorithms.
- [ ] **Not Implemented**: Accessibility features for visually impaired users.
- [ ] **Not Implemented**: Graphical representation of recommendation points.
- [x] Extensible design for incorporating additional parameters in algorithms.

## Development Notes

- **State Management**: Implemented using [Context API].
- **Navigation**: Managed with React Navigation.
- **Error Handling**: Robust error handling for network requests and user interactions.

# Installation and Setup

To get started with the Stock Market Recommender App, follow these simple steps:

1. **Clone the Repository**

   - First, clone the repository to your local machine using the following command:
     ```bash
     git clone https://github.com/blmiranda/ReactStockAdvisor
     ```

2. **Install Dependencies**

   - Navigate to the project directory and run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```
     ```
     npx pod-install ios
     ```

3. **Starting the App**

   - To start the app, run:
     ```bash
     npm start
     ```
   - This command will start the Metro bundler, which is required for running React Native applications.

4. **Running on iOS or Android Simulator**

   - **For iOS**:

     - Ensure you have Xcode installed and set up on your macOS.
     - Run the following command to build the app for iOS:
       ```bash
       npm run ios
       ```
     - This will open the iOS Simulator and launch the app.

   - **For Android**:
     - Ensure you have Android Studio installed and an Android emulator set up.
     - Run the following command to build the app for Android:
       ```bash
       npm run android
       ```
     - This will open the Android emulator and launch the app.
