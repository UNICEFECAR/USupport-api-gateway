
# Update Kuberenetes Cluster applications for this API service
kubectl apply -f config.yaml -f deployment.yaml -f service.yaml

REDEPLOY=$1

if [ "$REDEPLOY" = 'deploy' ] || [ "$REDEPLOY" = 'redeploy' ]
then
    # Build docker image of the service locally
    docker build -t gateway:latest .

    docker tag gateway:latest 482053628475.dkr.ecr.eu-central-1.amazonaws.com/usupport-api-gw

    # Push image to 
    docker push 482053628475.dkr.ecr.eu-central-1.amazonaws.com/usupport-api-gw

    if [ "$REDEPLOY" = 'deploy' ]
    then
        # Update Kuberenetes Cluster applications for this API service
        kubectl apply -f config.yaml -f deployment.yaml -f service.yaml
    elif [ "$REDEPLOY" = 'redeploy' ]
    then 
        kubectl apply -f config.yaml -f service.yaml
        kubectl rollout restart deployment gateway
    fi

else
    echo "Please select either to deploy or redeploy k8s pod"
fi
