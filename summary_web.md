## Frontend Service Summary: A Portfolio Website

This frontend service will be built using **Next.js** and **Tailwind CSS**, with a simple **pastel blue theme**. It will serve as the primary user interface of the website. Although it will eventually connect to the Portfolio API service, we will use mock data for now to streamline development.

### Main Website Flow

1.  **Home Page (`/`)**: This is the landing page that visitors will see first. It will feature a brief introduction, a profile picture, and a short description about yourself.
2.  **Portfolio Page (`/projects`)**: This page will display a list of all your projects in a card-based layout. Each card will include the project's title, a short description, and an image. Users can click on a card to view more details.
3.  **Project Detail Page (`/projects/[slug]`)**: This page will show a specific project's full details, such as a comprehensive description, additional screenshots, and links to the GitHub repository or a live demo.
4.  **About Page (`/about`)**: This page will contain more detailed information about your work experience, technical skills, and educational background.
5.  **Contact Page (`/contact`)**: This page will provide ways for visitors to get in touch with you, such as your email address or links to professional social media profiles.

-----

### API Endpoints (Using Mock Data)

For this development phase, we'll assume the **Portfolio API** service provides the following endpoints. You can create local JSON files or hardcode the data directly in your Next.js code to simulate the API's responses.

1.  **Endpoint for All Projects List**

      * **Method**: `GET`
      * **URL**: `/api/projects`
      * **Function**: Fetches data for all projects.
      * **Mock Data**: You'll create an array of project objects.

    <!-- end list -->

    ```json
    [
      {
        "id": "1",
        "slug": "personal-portfolio-website",
        "title": "Personal Portfolio Website",
        "short_description": "This project is a personal portfolio website...",
        "image_url": "/images/portfolio-thumbnail.jpg"
      },
      {
        "id": "2",
        "slug": "to-do-list-app",
        "title": "To-Do List Application",
        "short_description": "An application for managing daily tasks...",
        "image_url": "/images/todo-thumbnail.jpg"
      }
    ]
    ```

2.  **Endpoint for a Single Project's Details**

      * **Method**: `GET`
      * **URL**: `/api/projects/[slug]`
      * **Function**: Fetches detailed data for a specific project.
      * **Mock Data**: You'll create a single object containing a project's full details.

    <!-- end list -->

    ```json
    {
      "id": "1",
      "slug": "personal-portfolio-website",
      "title": "Personal Portfolio Website",
      "description": "This website was built to showcase my work...",
      "live_demo_url": "https://example-portfolio.vercel.app",
      "github_repo_url": "https://github.com/user/portfolio-repo",
      "screenshots": [
        "/images/screenshot1.jpg",
        "/images/screenshot2.jpg"
      ]
    }
    ```