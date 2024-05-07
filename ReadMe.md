## 1. Setting up the DockerHub credentials on Jenkins
Jenkins will need the docker hub credentials to build and push the image to the dockerHub. Instead of using dockerHub username and password, we will Create an Access Token in the dockerHub.
1. Log in to DockerHub
2. Click on the profile Icon and click on the Account settings

![Jenkins](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xig2b0jmgrukr3gziw13.png)
3. Click on the Security tab on the left menu, click on the "New Access Token and Enter a brief Description. After clicking "Generate" button, click on the "Copy and Close" button. 

### Saving the credentials on Jenkins 

On Jenkins navigate to add a global credential

![Jenkins](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/by9n6wou8t9czy416z8v.png)
Enter the details needed to create the credential and save

![Jenkins](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ay3q1xcpznx3tcdsv468.png)
## 2. Setting up the project
if you don't have a project you can clone this https://github.com/Ericawanja/Jenkins-DockerHub-Automation

Delete the Jenkinsfile and Dockerfile to follow along
## 3. Updating Jenkins file and DockerFile
Let's start with creating a Jenkinsfile

## 4. Creating and Running the Jenkins Jobs
