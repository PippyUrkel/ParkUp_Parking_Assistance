# ParkUp Parking Assistance

ParkUp is a smart parking solution that helps users find and manage parking spots efficiently (Minimal Viable Product and Prototype). This project is built using Flask and integrates with Firebase for authentication and database management.

## Project Structure

```
.gitignore
main.py
requirements.txt
website/
    website/__init__.py
    website/auth.py
    website/firebase.py
    website/models.py
    website/views.py
    static/
        images/
        scripts/
        styles/
        videos/
    templates/
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ParkUp_Parking_Assistance.git
    cd ParkUp_Parking_Assistance
    ```

2. Create a virtual environment and activate it:
    ```sh
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

4. Set up Firebase:
    - Add your Firebase configuration to `config/firebase_config.py`.
    - Ensure the Firebase service key is added to `.gitignore`.

## Running the Application

1. Start the Flask application:
    ```sh
    python main.py
    ```

2. Open your browser and navigate to `http://127.0.0.1:5000`.

## Features

- **Landing Page**: Welcome page with a typewriter effect and navigation links.
- **Parking Slots**: View and select available parking spots.
- **Dashboard**: Admin dashboard to monitor parking status and sensor diagnostics.
- **Customer Dashboard**: Overview of available parking spots and pricing breakdown.
- **Login**: Google authentication for users.

## File Descriptions

- `main.py`: Entry point of the application.
- `requirements.txt`: List of dependencies.
- `website/__init__.py`: Initializes the Flask application and registers blueprints.
- `website/auth.py`: Handles authentication routes.
- `website/firebase.py`: Firebase configuration and helper functions.
- `website/models.py`: Placeholder for database models.
- `website/views.py`: Defines routes and views for the application.
- `website/static/`: Contains static files (images, scripts, styles, videos).
- `website/templates/`: Contains HTML templates.

## Contributing

Contributions are currently limited to members of the project team. If you are part of the team, please follow these steps:

1. Create a new branch (`git checkout -b feature-branch`).
2. Make your changes and commit them (`git commit -am 'Add new feature'`).
3. Push to the branch (`git push origin feature-branch`).
4. Create a new Pull Request.
