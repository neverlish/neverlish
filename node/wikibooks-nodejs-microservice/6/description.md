## 6 - 3 도커를 사용한 배포 - 2 도커파일 정의

- `docker pull node:alpine`
- `docker build -t imagini:0.0.1 .`
- `docker run -i -t imagini:0.0.1 sh`
- `docker run -v $(pwd)/settings.json:/opt/app/settings.json imagini:0.0.1`

## 6 - 3 - 3 컨테이너 관리
- `time docker stop CONTAINER_ID`
- `docker run -d -p 80:3000 -v $(pwd)/settings.json:/opt/app/settings.json imagini:0.0.1`

## 6 - 3 - 4 컨테이너 정리
- `docker rm $(docker ps -qa)`
- `docker rmi $(docker images -q)`

## 6 - 4 MySQL 배포
- `docker network create imagini`
- `docker network ls`
- `docker run --name imagini-database --network imagini -v $(pwd)/mysql:/var/lib/mysql -e MYSQL_DATABASE=imagini -e MYSQL_ROOT_PASSWORD=secret -d mysql:5.7`
- `docker run --rm -t -i --network imagini node:latest bash`
  - `# ping imagini-database -c 5`
- `docker run --name imagini-service --network imagini -p 80:3000 -d -v $(pwd)/settings.json:/opt/app/settings.json imagini:0.0.1`

## 6 - 5 도커 컴포즈 사용
- `docker-compose up -d`

## 6 - 5 - 1 도커 컴포즈 고급 활용
- `docker-compose logs service`
- `docker-compose ps`
- `docker-compose down`