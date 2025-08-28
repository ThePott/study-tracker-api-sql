# 🚀 스터디 트래커 API
> 학습 기록을 체계적으로 저장하고 관리하는 RESTful API 서버

## 📖 소개
**스터디 트래커 API**는 학생들의 학습 진도와 오답 기록을 효율적으로 저장하고 관리하는 백엔드 서버입니다
Neon Postgres 데이터베이스와 Prisma ORM을 활용하여 안정적이고 확장 가능한 데이터 관리 시스템을 제공합니다

프런트엔드 프로젝트는 아래 링크에서 확인하세요
https://github.com/ThePott/study-tracker

## ✨ 주요 기능
- **🗄️ 데이터베이스 관리**: Neon Postgres를 통한 클라우드 기반 데이터 저장
- **🔧 ORM 통합**: Prisma를 활용한 타입 안전한 데이터베이스 접근
- **📊 학습 진도 추적**: 학생별 학습 진행 상황 모니터링
- **❌ 오답 관리**: 복습이 필요한 문제들의 체계적인 기록과 관리
- **👥 학생 관리**: 개별 학생 정보 및 학습 데이터 관리

## 🛠️ 기술 스택

### Backend & Runtime
![Node.js](https://img.shields.io/badge/node.js-20.x-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-5.9.2-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Database & ORM
![PostgreSQL](https://img.shields.io/badge/neon_postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/prisma-6.13.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

### Development Tools
![Nodemon](https://img.shields.io/badge/nodemon-3.1.10-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![CORS](https://img.shields.io/badge/cors-2.8.5-FF6B6B?style=for-the-badge)

## 🔗 API 엔드포인트
```
GET/POST         /manage             → 학생 정보 관리
GET/POST/PATCH   /progress           → 학습 진도 관리
GET/POST/PATCH   /review-check       → 오답 문제 관리
```

## 📦 설치
프로젝트를 설치하고 싶은 디렉토리에서 아래 명령어를 입력하세요
```bash
git clone https://github.com/ThePott/study-tracker-api-sql
cd study-tracker-api-sql
npm install
```

## ✅ 요구사항
* Node.js

## 📜 라이센스
MIT