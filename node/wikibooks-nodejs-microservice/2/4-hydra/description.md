## 2 - 4 히드라(Hydra)

- `npm i -g yo generator-fwsp-hydra hydra-cli`

- `hydra-cli config local`
	- `redisUrl: 127.0.0.1 redisPort: 6379 redisDb: 15`

- `yo fwsp-hydra`
	- ? Name of the service (`-service` will be appended automatically) hello
	- ? Your full name?
	- ? Your email address?
	- ? Your organization or username? (used to tag docker images)
	- ? Host the service runs on?
	- ? Port the service runs on? 0
	- ? What does this service do?
	- ? Does this service need auth? No
	- ? Is this a hydra-express service? Yes
	- ? Set up a view engine? No
	- ? Set up logging? No
	- ? Enable CORS on serverResponses? No
	- ? Run npm install? No