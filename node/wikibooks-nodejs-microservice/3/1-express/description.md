## 3 - 1 - 1 이미지 업로드

- `curl -X POST -H 'Content-Type: image/png' --data-binary @example.png http://localhost:3000/uploads/example.png`

## 3 - 1 - 2 폴더에 이미지가 있는지 확인

- `curl --head 'http://localhost:3000/uploads/example.png'`