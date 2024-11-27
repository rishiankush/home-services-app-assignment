# React Native Home Services App

This is a React Native project built using React Native CLI, showcasing a home services app with various features such as a grid-based categories section, special offers, recommended services, and a discover & explore section. The app follows a pixel-perfect design based on Figma specifications.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Steps](#steps)
- [Running the App](#running-the-app)
  - [For iOS](#for-ios)
  - [For Android](#for-android)
- [Dependencies](#dependencies)
- [Components Overview](#components-overview)
  - [Header](#header)
  - [SearchBar](#searchbar)
  - [LocationBar](#locationbar)
  - [SpecialOfferBanner](#specialofferbanner)
  - [CategoryCard](#categorycard)
  - [ServiceCard](#servicecard)
  - [SectionHeader](#sectionheader)
- [Screens Overview](#screens-overview)
  - [HomeScreen](#homescreen)
  - [MyBookmarkScreen](#mybookmarkscreen)
  - [MessagesScreen](#messagesscreen)
  - [ProfileScreen](#profilescreen)
- [Custom Data](#custom-data)
  - [Categories](#categories)
  - [Services](#services)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)

---

## Features

- Pixel-perfect design implementation based on Figma.
- **Header** with user profile, notifications, and bookmarks icons.
- **Search Bar** and **Location Bar** for quick interactions.
- **Special Offer Banner** with animated dots for multiple banners.
- **Categories Section** displayed in a grid with 4 items per row.
- **Recommended Services** and **Discover & Explore Services** with card-based layouts.
- Dynamic navigation, including a bookmarks section with similar components.

---

## Project Structure

```plaintext
src/
├── assets/
│   ├── images/           # Contains app images
│   ├── icons/            # Contains app icons
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── LocationBar.tsx
│   ├── CategoryCard.tsx
│   ├── ServiceCard.tsx
│   ├── SectionHeader.tsx
│   ├── SpecialOfferBanner.tsx
├── data/                 # Contains dummy JSON data
│   ├── home.json
├── navigation/           # Navigation structure
│   ├── TabNavigator.tsx
├── screens/              # App screens
│   ├── HomeScreen.tsx
│   ├── MyBookmarkScreen.tsx
│   ├── MessagesScreen.tsx
│   ├── ProfileScreen.tsx
├── App.tsx               # Entry point
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
