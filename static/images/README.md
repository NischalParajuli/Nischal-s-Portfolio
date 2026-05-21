# Static Images Setup

This directory contains all static images for the portfolio.

## Directory Structure

- `static/images/profile/` - Profile/user images
- `static/images/projects/` - Project images

## How to Add Images

1. Place your profile image in `static/images/profile/` (e.g., `myself.jpeg`)
2. Place project images in `static/images/projects/` (e.g., `project1.png`)

## How to Reference Images in Admin

When adding images in the Django admin, use the relative path (without "static/" prefix):

- Profile image example: `images/profile/myself.jpeg`
- Project image example: `images/projects/project1.png`

These paths are stored in the database and automatically resolved to static files in the template using:
```django
<img src="{% static user.image %}">
<img src="{% static project.image %}">
```

This approach works seamlessly with Render deployment using `python manage.py collectstatic`.
