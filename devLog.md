# Background
I've decided to start this devlog as a tracker of what I've done throughout each day of working on this Thesis Web Application. My plan is to record what I'm doing every day I'm working on the project to keep track of what ideas I have and what do I learn each day. The hope of this project is to come up with at least a minimal viable project to start talking about it with other people and then hopefully continue working on it until the start of the new school year so that new seniors who are decieding to write a thesis can check it out.

## Introduction
Create a place where undergraduate thesis/papers that students can put their work instead of their papers going to die.

# DevLog
## Day 1 — June 6th, 2025
This day was the start of when I decided to take the project seriously. I looked into a techstack that would be best for this type of web application and settled on the following.
    Frontend: Next.js
    React-based frameworks offer excellent UI interactivity, robust community support, and streamliend PDF integration(PDFs will be used for uploading)
    Backend: Node.js with Express.js
    Easy-to-learn JavaScript ecosystem, lightweight, and highly effective to simple API creation and file management
    Database: PostgreSQL
    Structured data handling, advanced searching, indexing, and metadata storage. (Plus helpful that my past internship was working with SQL)
    PDF Rendering: react-pdf
    Provide easy PDF rendering and inline viewing directly on platform
    Hosting: Vercel
    (Used it previously already)

In addition to figuring out the techstack I also took some time to figure out what features the minimal viable product(MVP) would need to include in order to be confident in what I'm building

MVP Features:
1. Metadata management(title, author, abstract, department, etc.)
2. PDF rendering directly in broswer
3. Basic Search Functionality with filtering
4. Clean landing page
5. PDF file upload and storage

Post-MVP Features:
1. User authentifcation and authorization (.edu accounts only)
2. Tagging and categorization
3. Analytics

After figuring out what type of product I was trying to create I looked into the next steps in project creation would be and from what I was researching it seemed like creating and developing the backend would be the first thing I should do, and then I would transition into creating the frontend with it's functionality and connection to the backend.

### Backend Journey I
