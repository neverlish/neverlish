## 3 - 3 세네카 사용

- `curl -H 'Content-Type: application/json' --data '{"role":"upload","image":"example.png","data":"'"$(base64 example.png)"'"}' http://localhost:3000/act`

- `curl -H 'Content-Type: application/json' --data '{"role":"check", "image": "example.png"}' http://localhost:3000/act`

- `curl -H 'Content-Type: application/json' --data '{"role":"download", "image": "example.png","greyscale":true,"height":100}' http://localhost:3000/act`