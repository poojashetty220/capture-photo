# Capture Photo

### Overview

This project is a React-based web application that allows users to capture photos using either the front or back camera. The app is built using ReactJS, react-webcam, and TailwindCSS for styling.

### Features

* Capture photos using the front or back camera.
* Seamlessly switch between front and back cameras.
* Display the captured image for user preview.
* Option to retake the photo if needed.
* Handle camera unavailability, inactivity, or permission denial with informative error messages.

### Technologies Used

* ReactJS: JavaScript library for building the UI.
* react-webcam: Provides camera access within a React application.
* TailwindCSS: Used for responsive and clean UI styling.

### Installation & Setup

#### Clone the repository:
```git clone https://github.com/poojashetty220/capture-photo```

#### Navigate to the project folder:
```cd capture-photo```

#### Install dependencies:

```npm install```

#### Start the development server:

```npm run dev```

### Usage

* Grant the necessary camera permissions when prompted.
* Use the Switch Camera button to toggle between front and back cameras.
* Click the Take photo button to take a photo.
* Preview the captured image and choose to retake it if necessary.
* If camera access fails, an appropriate error message will be displayed.

### Error Handling
* If the camera is not accessible or permission is denied, the app will show a user-friendly error message.
* If no camera device is found, users will be informed accordingly.
