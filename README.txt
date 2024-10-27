# 1. Chạy dự án: 
```
    docker-compose up -d --build
```

# 2. Import dữ liệu vào database
```
    docker exec -it mongodb mongoimport --db Blog-Page --collection users --file /data/import/Blog-Page.users.json --jsonArray
    docker exec -it mongodb mongoimport --db Blog-Page --collection posts --file /data/import/Blog-Page.posts.json --jsonArray
    docker exec -it mongodb mongoimport --db Blog-Page --collection comments --file /data/import/Blog-Page.comments.json --jsonArray
```

# 3. Kiểm tra dữ liệu đã được thêm vào chưa
## 3.1 Truy cập vào terminal của mongo container
```
    docker exec -it mongodb bash
```

## 3.2 Mở cửa sổ mongo shell

```
    mongosh
```

## 3.3 Kiểm tra
```
    use Blog-Page
    db.posts.find()
```
