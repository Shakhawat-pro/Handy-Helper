
## Website Name: Handy Helper

## Live Site URL: https://handyhelper-e2f7f.web.app/

## Category: Home Repair Services

## Description


Handy Helper simplifies service booking and management. For providers, manage services easily. Customers track bookings and enjoy seamless experiences. Responsive design ensures accessibility on all devices.


## Features

- **Booking:** Access your booking history and manage your appointments conveniently.
- **Booking Status:** View the status of your bookings in real-time.
- **Services To-Do:** Keep track of services you need to complete with a to-do list feature.
- **Manage Your Services:** Easily manage your offered services, update information, and respond to bookings.
- **Search Functionality:** Easily search for spots by country or keyword to find exactly what you're looking for.
- **User Authentication:** Sign up and log in to create your own personalized list of favorite spots and access additional features.
- **Responsive Design:** Enjoy a seamless browsing experience on any device, whether you're using a desktop, tablet, or smartphone. 


## New Features

 - [Edit Profile](#edit-profile)


---


### Dependencies

- React.js: "^18.2.0"
- Firebase: "^10.11.1"
- Axios: "^1.6.8"
- Lottie-react: "^2.4.0"
- React-icons: "^5.2.1"
- React-router-dom: "^6.23.1"
- React-toastify: "^10.0.5"
- Sweetalert2: "^11.10.8"
- Aos: "^2.3.4"
- Localforage: "^1.10.0"
- Match-sorter: "^6.3.4"
- Prop-types: "^15.8.1"
- Sort-by: "^1.2.0"
- React-awesome-button: "^7.0.5"
- React-dom: "^18.2.0"
- React-tooltip: "^5.26.4"
- Animate.css: "^4.1.1"

### Installation

1. Install necessary dependencies using npm or yarn:
   ```
   npm install react-icons firebase axios lottie-react react-router-dom react-toastify sweetalert2 aos localforage match-sorter prop-types sort-by react-awesome-button react-dom react-tooltip animate.css
   ```
   ```
   yarn add react-icons firebase axios lottie-react react-router-dom react-toastify sweetalert2 aos localforage match-sorter prop-types sort-by react-awesome-button react-dom react-tooltip animate.css

---

## Technology Used

Explore Asia is built using the following technologies:

- **Frontend:**
  - **React.js:** A JavaScript library for building user interfaces.
  - **React Router:** Used for client-side routing within the React application.
  - **Tailwind CSS:** A utility-first CSS framework for styling the application.
  - **React Simple Typewriter:** A React component for creating typewriter-like text animations.
  - **React Lottie:** A React component for rendering Lottie animations.
  - **React Toastify:** A React notification library for displaying toasts.
  - **React Prototype:** A prototyping tool for creating interactive prototypes.
  - **Firebase Hosting:** A web hosting service provided by Firebase for deploying and hosting the frontend React application.

- **Backend (API):**
  - **Node.js:** A JavaScript runtime environment for running server-side code.
  - **Express.js:** A web application framework for building APIs with Node.js.
  - **MongoDB:** A NoSQL database used for storing spot data.
  - **MongoDB Atlas:** A cloud-based MongoDB service for database hosting.
  - **Firebase Authentication:** Provides authentication services for the application users.
  - **Vercel:** A cloud platform used for deploying and hosting the backend API.

- **Development Tools:**
  - **Git & GitHub:** Version control and collaboration tools for managing the project's source code.
  - **npm:** Node Package Manager for installing and managing project dependencies.
  - **Vercel:** A cloud platform used for deploying and hosting the backend API during development.
  - **VS Code:** A lightweight, open-source code editor used for writing and debugging code.






## Edit Profile 

### Description:
The Edit Profile component is a React component responsible for allowing users to update their profile information. It provides a form interface where users can modify their name and profile picture.

### Functionality:
1. **User Context**: The component utilizes React context to access the currently authenticated user's information.
2. **State Management**: It uses the `useState` hook to manage the state of the profile picture URL.
3. **Form Submission**: When the user submits the form, the component triggers the `handleSubmit` function, which updates the user's profile information.
4. **Profile Update Confirmation**: Before updating the profile, the component displays a confirmation dialog using the SweetAlert2 library.
5. **Profile Update**: Upon confirmation, the component calls the `updateProfile` function from Firebase Authentication to update the user's display name and profile picture URL.
6. **Validation**: The form fields for the name and profile picture URL are required, and appropriate validation messages are displayed if the user attempts to submit the form without filling in these fields.
7. **Preview Profile Picture**: The component displays a preview of the current profile picture or the selected image URL using the `FaUpload` icon from the React Icons library.

### Usage:
To use the Edit Profile component, simply import it into your project and include it in a suitable location where users can access their account settings.


export default App;
```

### Dependencies:
- React: "^17.0.2"
- react-icons: "^4.3.1"
- firebase: "^9.6.1"
- sweetalert2: "^11.1.4"

### Installation:
1. Install dependencies using npm or yarn:
   ```
   npm install react-icons firebase sweetalert2
   ```
   ```
   yarn add react-icons firebase sweetalert2
   ```

2. Import the component and include it in your project as shown above.

### Note:
- Ensure that Firebase Authentication is properly set up in your project and that the user is authenticated before accessing the Edit Profile component.
- Customize the component's styling and functionality according to your project's requirements.

                          