ENV=$1
REDEPLOY=$2

if [ "$ENV" != 'staging' ] && [ "$ENV" != 'prod' ]
then    
    echo "Please select deployment environment: staging | prod"
fi

if [ "$REDEPLOY" = 'deploy' ] || [ "$REDEPLOY" = 'redeploy' ]
then
    IMAGE_TAG=beta
    if [ "$ENV" = 'staging' ]
    then    
        IMAGE_TAG=beta
    elif [ "$ENV" = 'prod' ]
    then 
        IMAGE_TAG=latest
    fi

    # Build docker image of the service locally
    docker build -t gateway:$IMAGE_TAG .
    docker tag gateway:$IMAGE_TAG 482053628475.dkr.ecr.eu-central-1.amazonaws.com/usupport-api-gw:$IMAGE_TAG

    # Push image to 
    docker push 482053628475.dkr.ecr.eu-central-1.amazonaws.com/usupport-api-gw:$IMAGE_TAG

    cd kube-config
    
    kubectl apply -f config.yaml

    cd $ENV

    if [ "$REDEPLOY" = 'deploy' ]
    then
        # Update Kuberenetes Cluster applications for this API service
        kubectl apply -f deployment.yaml
    elif [ "$REDEPLOY" = 'redeploy' ]
    then 
        kubectl rollout restart deployment gateway
    fi

    cd ..
    kubectl apply -f service.yaml

else
    echo "Please select either to deploy or redeploy k8s pod"
fi
