# Build docker image of the service locally
docker build -t gateway:latest .

docker tag gateway:latest 482053628475.dkr.ecr.eu-central-1.amazonaws.com/usupport-api-gw

# Push image to 
docker push 482053628475.dkr.ecr.eu-central-1.amazonaws.com/usupport-api-gw

# Update Kuberenetes Cluster applications for this API service
kubectl apply -f config.yaml -f deployment.yaml -f service.yaml
