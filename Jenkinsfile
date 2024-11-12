pipeline {
    agent any
     tools {
        nodejs "node"
        }
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Vu-Nhat-Tran/Playwright.git']])
            }
        }
        stage('Install') {
            steps {
                bat '''
                    npm i -D @playwright/test && npx playwright install
            '''
            }
        }
        stage('Testing') {
            steps {
                bat '''
                    npx playwright test S5_TC002.spec.ts --project=chrome --headed
                '''
            }
        }
    }
}