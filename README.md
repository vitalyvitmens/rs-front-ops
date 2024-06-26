### Установи зависимости:
- npm i

### Для запуска:
- node index.js

### Для получение ответа с сервера:
- curl localhost:3000

#### Для отключения:
- Ctrl + C

### Проверяем доступен ли нам Docker:
- docker -v

### Создаем в корне приложения файл с названием Dockerfile и заполняем его:
```
FROM node:18

COPY . . 

RUN npm ci

EXPOSE 3000

CMD ["node", "index.js"]
```

### Создаем файл .dockerignore и добавляем в него папку node_modules

### Собираем образ Docker и сразу даем ему название "rsfrontops":
- docker build -t rsfrontops .

### Запускаем собранный образ с названием "rsfrontops":
- docker run -d rsfrontops

### Рекомендуемые команды для Docker:
#### посмотреть логи по id: 
- docker logs 5e83e90e9b099f11edb840355b9bed855f9514ba260eef512e294d003fc9fe35
#### посмотреть запущенные контейнеры: 
- docker ps
#### остановить запущенный контейнер по его имени: 
- docker stop ecstatic_elion
#### посмотреть все контейнеры вместе с остановленными: 
- docker ps -a
#### команда exec позволяет зайти внутри контейнера через Ubuntu по его имени в данном случае "naughty_bardeen" и выполнять в нем какие-либо команды например shell: 
- sudo docker exec -it naughty_bardeen /bin/sh
##### далее войдя можно например посмотреть содержимое контейнера:
- ls
##### чтобы выйти с контейнера на клавиатуре нажимаем сочетание клавиш:
- Ctrl + D
#### Чтобы удалить все образы:
- sudo docker system prune

### Опубликовать порт в контейнере с названием "rsfrontops" что бы общаться с ним:
- sudo docker run -p 1000:3000 -d rsfrontops
### проверяем что связь с контейнером установлено, обращаемся к нему:
- curl localhost:1000

### Добавляем в Dockerfile строку EXPOSE 3000 и пересобираем образ с новым названием "rs-front-ops":
docker build -t rs-front-ops .

#### проверяем что действительно пробросились порты: 
- docker ps
#### увидим: 0.0.0.0:1000->3000/tcp
#### останавливаем контейнер по id что бы не было конфликтов:
- docker stop d6678d1a567b
#### запускаем его по названию:
- docker run -d rs-front-ops
#### проверяем что привязки портов нет: 
- docker ps
#### вместо 0.0.0.0:1000->3000/tcp увидим: 3000/tcp 

### поднимаем docker
- docker compose up -d
### стучимся по порту 3000 поднятом Docker
- curl localhost:3000
### что бы положить все аши контейнеры:
- docker compose down
### что бы положить какой то конкретный контейнер например с id: a665e95e9d21:
- docker stop a665e95e9d21

## Переменные окружения
### Пересобираем контейнеры:
- docker compose build
### поднимаем docker
- docker compose up -d
### стучимся по порту 3000 поднятом Docker
- curl localhost:3000

## Что бы запушить образы в https://hub.docker.com:
- в https://hub.docker.com создаем 2 репозитоия с названиями result & result-date
- в файле docker-compose.yml добавляем поля image: vitalyvitmens/result-date & image: vitalyvitmens/result
- docker compose build
- docker login
- docker compose push | docker push vitalyvitmens/result:latest | docker push vitalyvitmens/result:latest

