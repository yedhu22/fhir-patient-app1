# FHIR Patient Registration App

A simple web app to manage patients using the FHIR API and HAPI server hosted in Docker.

## Features
- Create new patients
- List existing patients
- Update (TBD)
- Delete patients

## Setup

### FHIR Server
```bash
cd docker
docker-compose up -d
```

### Frontend
```bash
cd frontend
npm install
npm start
```

### Access App
- FHIR server: http://localhost:8080/fhir
- App: http://localhost:3000

## Challenges Faced
- CORS issues resolved using proxy settings
- Validating input to match FHIR spec
- Handling inconsistent patient name data

## License
MIT
