## Technical Task: Image Handling Microservice

### Overview

- Design and implement a microservice to enable the functionalities of image upload and subsequent retrieval through URLs.

### Features & Functionalities

- Image upload
  - The service should accept and store images.
- Image serving
  - The service should be capable of serving the uploaded images via URLs.

### Technical Specifications

- Accessibility
  - The developed service should be accessible over the internet.
- Image Formats
  - The service should accept images in the following formats: JPG, PNG
- Image Size
  - The service should accept images with a size up to 15 MB.
- Error Handling:
  - The service must generate appropriate error responses in cases of attempted upload of non-image files.
  - If an image exceeding the maximum size limit is attempted to be uploaded (15 MB), the microservice should produce appropriate error responses.
- API Platform
  - Image uploading should be facilitated through any API platform (e.g. Postman).
- Authentication
  - No authentication is required for this service.
- URL Protection
  - No specific protection for URLs is required. Anyone can upload images.

### Technologies

- Node.js, TypeScript

### Source code

- The source code of the developed service should be available on GitHub for review and evaluation.
- Use public or private repositories. If a private repository was used, make sure that project is available to the reviewer.

### Timeline

- The estimated time for the completion of this task is 3-4 days.

### Completion

- After completing the task, send a notification to [gabe@hislovers.com](gabe@hislovers.com), [roman@hisovers.com](roman@hisovers.com), and [larry@hislovers.com](larry@hislovers.com) with a link to the repository where the source code is located.
- Use the following email subject - `Technical Task Completed: Image Handling Microservice`.
- Please ensure all parts of this task are well understood and feasible within the given timeline. If any clarifications or additional resources are needed, don't hesitate to ask [roman@hislovers.com](roman@hislovers.com).
