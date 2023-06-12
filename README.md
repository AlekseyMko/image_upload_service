## Image Handling Microservice

### Description

Project follows requirements from TECHNICAL_REQUIREMENT.md
and implements application with integration to Google Cloud App Engine and Cloud Storage services.

### Configuration set

Project has next configured tools:

- NodeJs project
- TypeScript configuration
- OpenApi 3.0 with request and response validation
- Jest Framework for testing
- App Engine integration with deployment scripts and configs
- Cloud Storage integration
- Linter with Prettier for code style control
- Husky config for automatic git hooks and code checks before commit and push
- configuration and scripts for running app in production and development modes

### Setup Environment

- install and setup GCloud Cli
- create .env file from .env.default example
- update variables in .env for development and app.yaml for App Engine
- run `gcloud auth application-default login` to be able to run test

### Quick Start

Get started developing...

```shell
# install dependencies
npm install

npm run build

# run linter and prettier
npm run lint
npm run lint:fix
npm run prettier

# run in development mode
npm run dev

# run in development mode with debug
npm run dev:debug

# run in production mode
npm run start

# run tests
npm run test

# deploy app to App Engine
npm run deploy-gcp
```

---

### Try It

- Microservice is deployed to App Engine and has next three endpoints:
  - https://aleksey-test-env.uc.r.appspot.com/api/upload to upload images
  - https://aleksey-test-env.uc.r.appspot.com/api/images to get list of uploaded images
  - https://aleksey-test-env.uc.r.appspot.com/api/images/{name} to get a particular image
- Web documentation is available here [https://aleksey-test-env.uc.r.appspot.com/docs](https://aleksey-test-env.uc.r.appspot.com/docs)
- Import Postman config `Image Handling Microservice.postman_collection.json`
