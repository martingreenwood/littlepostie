# LittlePostie

A modern mobile application built with Ionic and Vue.js, designed to provide a seamless mobile experience for content sharing and YouTube integration.

## Description

LittlePostie is a feature-rich Ionic Vue mobile application that combines the power of Vue 3 with Ionic's mobile-first components. This application is built using TypeScript for enhanced type safety and developer experience.

## Features

- YouTube video integration and playback
- Modern, responsive UI with Ionic components
- Cross-platform compatibility (iOS and Android)
- TypeScript support for better development experience
- Component-based architecture using Vue 3
- State management with Vuex
- Routing with Vue Router

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Ionic CLI (`npm install -g @ionic/cli`)
- iOS development requirements (for iOS builds):
- macOS
- Xcode
- CocoaPods
- Android development requirements (for Android builds):
- Android Studio
- Java Development Kit (JDK)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd littlepostie
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS/Android platforms (optional):
```bash
ionic cap add ios
ionic cap add android
```

## Available Scripts

- `npm run serve` - Start development server
- `npm run build` - Build the production version
- `npm run test:unit` - Run unit tests
- `npm run lint` - Lint and fix files
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android device/emulator

## Development Environment Setup

1. Start the development server:
```bash
npm run serve
```

2. For mobile development:
```bash
# iOS
npm run build
npx cap sync ios
npx cap open ios

# Android
npm run build
npx cap sync android
npx cap open android
```

## Built With

- [Ionic Framework](https://ionicframework.com/) - Mobile UI toolkit
- [Vue.js 3](https://v3.vuejs.org/) - Progressive JavaScript Framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Capacitor](https://capacitorjs.com/) - Native runtime for web apps
- [YouTube API](https://developers.google.com/youtube/v3) - YouTube Data API integration
- [Vuex](https://vuex.vuejs.org/) - State management
- [Vue Router](https://router.vuejs.org/) - Official router for Vue.js

## Testing

The project uses Jest for unit testing. Run the tests with:

```bash
npm run test:unit
```

To generate test coverage reports:

```bash
npm run test:unit -- --coverage
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

