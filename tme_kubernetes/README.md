# Kubernetes 部署示例

这是一个简单的Node.js应用程序，展示了如何使用Docker容器化应用并通过Kubernetes进行部署。

## 第1部分：应用容器化

### 构建和推送Docker镜像

```bash
# 构建Docker镜像
docker build -t yourusername/hello-world-node .

# 推送到Docker Hub（需要先登录）
docker login
docker push yourusername/hello-world-node
```

### 使用Docker Compose运行

```bash
docker-compose up
```

## 第2部分：使用Kubernetes部署

### 创建部署

```bash
kubectl apply -f k8s-deployment.yaml
```

### 暴露服务

```bash
kubectl apply -f k8s-service.yaml
```

## 第3部分：扩展和更新

### 扩展应用

```bash
kubectl scale deployment hello-world-node --replicas=3
```

### 更新应用

```bash
kubectl set image deployment/hello-world-node hello-world-node=yourusername/hello-world-node:new_version
```

## 第4部分：清理资源

```bash
kubectl delete deployment hello-world-node
kubectl delete service hello-world-node-service
``` 