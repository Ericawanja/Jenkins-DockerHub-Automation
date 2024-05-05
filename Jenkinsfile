/* groovylint-disable LineLength */
/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any
    stages{
         stage('Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerJenkinsID', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    
                   sh "docker login -u $USERNAME -p $PASSWORD"                  
                  
                }
            }
        }
        
        stage('Build'){
            steps {
                sh 'docker build -t ericawanja/todoapp:latest .'
            }
        }

       
        stage('Push'){
            steps {
                //Deploy our app to DockerHub
               sh 'docker push ericawanja/todoapp:latest'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
