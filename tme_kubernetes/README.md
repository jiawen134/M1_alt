# Kubernetes deployment

This is a simple Node.js application that demonstrates how to containerize an application and deploy it through Kubernetes.

## Part 1: Containerization of the application

### Building and pushing the Docker image

```bash
# Build the Docker image
docker build -t yourusername/hello-world-node .

# Push to Docker Hub (need to login first)
docker login
docker push yourusername/hello-world-node
```

### Running with Docker Compose

```bash
docker-compose up
```

## Part 2: Deploying with Kubernetes

### Creating the deployment

```bash
kubectl apply -f k8s-deployment.yaml
```

### Exposing the service

```bash
kubectl apply -f k8s-service.yaml
```

## Part 3: Scaling and updating

### Scaling the application

```bash
kubectl scale deployment hello-world-node --replicas=3
```

### Updating the application

```bash
kubectl set image deployment/hello-world-node hello-world-node=yourusername/hello-world-node:new_version
```

## Part 4: Cleaning up resources

```bash
kubectl delete deployment hello-world-node
kubectl delete service hello-world-node-service
``` 