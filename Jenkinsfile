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
                withCredentials([usernamePassword(credentialsID:'dockerJenkinsID', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'echo $PASSWORD'

                    echo USERNAME

                    echo "username is $USERNAME"
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
