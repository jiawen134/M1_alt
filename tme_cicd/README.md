# CI/CD and Kubernetes Deployment Practice

This is a simple Node.js application that demonstrates a complete CI/CD workflow and Kubernetes deployment process. The project showcases the entire implementation from code commit to automated deployment.

## Features
- Provides a simple web page displaying "Hello, World!"
- Complete CI/CD process example
- Local Kubernetes cluster deployment using Kind
- Automated testing and deployment

## Tech Stack
- Node.js
- Docker
- Kubernetes (Kind cluster)
- GitHub Actions

## Local Development
```bash
# Install dependencies
npm install

# Start application
npm start
```

## Docker Container
```bash
# Build image
docker build -t hello-world-node .

# Run container
docker run -p 3000:3000 hello-world-node
```

## Kubernetes Deployment
```bash
# Create Kind cluster
kind create cluster --config kind-config.yaml

# Deploy application
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml

# Install NGINX Ingress Controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

## CI/CD Process
This project has a complete CI/CD process configured:
1. Code pushed to the GitHub main branch
2. GitHub Actions automatically builds and tests the application
3. Builds a Docker image and pulls it from Docker Hub
4. Creates a local Kubernetes cluster using Kind
5. Automatically deploys the application to the cluster
6. Verifies the application is successfully deployed and accessible

## Configuration Files
- `deployment.yaml`: Kubernetes deployment configuration
- `service.yaml`: Service configuration that exposes the application port
- `ingress.yaml`: Ingress configuration for managing external access
- `kind-config.yaml`: Kind cluster configuration
- `.github/workflows/ci.yml`: GitHub Actions workflow configuration

## Issues Encountered and Solutions

### 1. GitHub Actions Workflow Not Running Automatically
**Issue**: After pushing code, the GitHub Actions workflow did not trigger automatically.
**Cause**: Incorrect workflow file location. GitHub only looks for workflow files in the `.github/workflows/` directory.
**Solution**: Moved the workflow file from `tme_cicd/.github/workflows/ci.yml` to the repository root's `.github/workflows/ci.yml`.

### 2. Inconsistent Port Configuration
**Issue**: Port inconsistency between workflow verification and access information.
**Solution**: Standardized the use of port 3000 and updated the access information in the workflow file.

### 3. Configuration File Path Issues
**Issue**: Incorrect paths to configuration files in the workflow.
**Solution**: Used correct relative paths in the workflow file, such as `tme_cicd/deployment.yaml`.

### 4. Docker Hub Authentication
**Note**: The workflow uses `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets. These must be added in the GitHub repository settings.


## Accessing the Application
Once deployed, the application can be accessed at:
```
http://localhost:80
```
