pipeline {

    agent any

    environment {
        IMAGE_NAME = "192.168.137.51:5000/grocery-app:v1"
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning source code'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy To Production') {
            steps {
                sh 'ansible-playbook -i /opt/ansible/hosts /opt/ansible/grocery-deploy.yml'
            }
        }

    }
}
