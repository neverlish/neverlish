## 3 - 2 히드라 사용

- `yo fwsp-hydra`
	- ? Name of the service (`-service` will be appended automatically) imagini
	- ? Your full name?
	- ? Your email address?
	- ? Your organization or username? (used to tag docker images)
	- ? Host the service runs on?
	- ? Port the service runs on? 3000
	- ? What does this service do?
	- ? Does this service need auth? No
	- ? Is this a hydra-express service? Yes
	- ? Set up a view engine? No
	- ? Set up logging? No
	- ? Enable CORS on serverResponses? No
	- ? Run npm install? No

- `curl -X POST -H 'Content-Type: image/png' --data-binary @example.png http://localhost:3000/v1/imagini/example.png`