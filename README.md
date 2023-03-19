# Write Now! Text Editor
## Description
![logo](./client/dist/assets/icons/icon_256x256.png) <br>

Write Now! is a text editor that runs on the browser. It allows users to create notes or code snippets and retrieve them when the application is reopened. By clicking the "Install" button, this text editor can be installed on the desktop and used as if it were a native application. The application also works offline, allowing users to continue using it even when they don't have an internet connection.
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Application Preview](#Application-preview)
- [Technologies](#Technologies)
- [Questions](#Questions)

## Installation
- To use the application on your local machine, download or clone the repository. After navigating to the root directory, run the command "npm i" to install the necessary dependencies. To start your application, run 'npm run start:dev' and 'npm start'.

- Follow [this link](https://wnte-oslee.herokuapp.com/) and click the Install button to use it like a native app on your pc. 

## Usage
Live HEROKU application deployed at: [Click here](https://wnte-oslee.herokuapp.com/) <br> <br>

![preview](/assets/01-preview.png)

## Application Preview

| Manifest |
|----------------------|
| Manifest is a file describing a web app, including its icon, name, version, and metadata. It's important for caching and asset management. |
| ![manifest](/assets/03-manifest.png)|

| Service Worker |
|----------------------|
| By caching the application's files, users can still use the application even when offline. |
| ![sw](/assets/04-sw.png)|

| IndexDB |
|----------------------|
| IndexDB allows users to store and retrieve data within a web browser. |
| ![indexDB](/assets/05-indexDB.png)|

| Asset Cache |
|----------------------|
| Caching style, script, and worker files can improve the performance of the application. |
| ![assetcache](/assets/06-asset-cache.png)|

| Install |
|----------------------|
| When users click "install," the application will be added to the home screen. |
| ![install](/assets/07-install.png)|

| Add to Home screen|
|----------------------|
| It can be used on the desktop as if it were a native application. |
| ![addtohomescreen](/assets/08-addtohomescreen.png)|

## Technologies
- HTML
- CSS
- JavaScript
- Express.js
- Node.js
- Webpack: Module bundler, Manifest
- Workbox: Service Worker, Cache
- IndexDB

## Questions
If you have any questions about this projects, please contact me at oliviasylee@gmail.com. You can view more of my projects at https://github.com/oliviasylee.