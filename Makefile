client_port = 3000
server_port = 5000

start-client:
	cd frontend; npm start --port $(client_port)

start-server:
	cd backend; sam local start-api -p $(server_port)

deploy:
	cd backend; sam build