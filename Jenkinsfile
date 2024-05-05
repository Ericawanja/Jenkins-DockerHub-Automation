/* groovylint-disable LineLength */
/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    stages{
        stage('Build'){
            steps {
                sh 'docker build -t ericawanja/todoapp:latest .'
            }
        }

        stage('Login') {
            steps {
                sh 'echo'
            }
        }
        stage('Push'){
            steps {
                //Deploy our app to DockerHub
                withCredentials([usernamePassword(credentialsId: 'dockerJenkinsID', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                        echo "Username: $USERNAME"
                        echo "Password: $PASSWORD"
                        # Use the credentials to perform some operation, e.g., login to a service
                    '''
                  
                }
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
