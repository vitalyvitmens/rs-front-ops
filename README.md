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

