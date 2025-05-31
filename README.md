**Setup Construction**
***Power Supply***
1.Power supply for the endNode devices.
2. Power supply for Gateway device.
***Power Supply***

***WiFi Configuration***
3. After gateway device is supplied, please connect to Setup Portal Wi-Fi address and access 192.168.4.1 page for Wi-Fi configuration.
4. Enter password: mrdiy.ca for the Wi-Fi to connect. After finishing, an alert page will appear, please press the reset button of the ESP8266 Gateway.
5. If the gateway connect correctly, it will start sending data to MQTT.
***WiFi Configuration***

***Docker Establish***
6. Open CMD: go get
              go run ./main.go
7. Open Docker and host QuestDB, Telegraf and Grafana server
  QuestDB: -	docker run --rm -dit -p 8812:8812 -p 9000:9000 ^ -p 9009:9009 -e QDB_PG_READONLY_USER_ENABLED=true ^ --network=tutorial --name=questdb questdb/questdb 
  Telegraf: -	docker run --rm -it ^ -v C:\Users\(your_computer_name)\mock-sensor\conf\telegraf\telegraf.conf:/etc/telegraf/telegraf.conf ^ --network=tutorial --name=telegraf telegraf
  Grafana: -	docker run --rm -dit -p 3000:3000 ^ --network=tutorial --name=grafana grafana/grafana 
8. Access localhost:3000 for Grafana Dashboard
           localhost:9000 for QuestDB dashboard
***Docker Establish***

***Grafana Setup***
SELECT 
avg(uv_value), 
avg(uv_index), 
avg(sound) as sound, 
avg(weight) as weight, 
avg(temperature_inside) as temperature_inside, 
avg(humidity_inside) as humidity_inside, 
avg(temperature_outside) as temperature_outside, 
avg(humidity_outside) as humidity_outside,
date_trunc('minute', vn_time) AS minute
from "your_database.csv"  //input your database 
WHERE place = 'Dong Nai'
GROUP BY minute
ORDER BY minute ASC
***Grafana Setup***

For more detail please read the R&D_GUIDELINE.pdf attach on this repository 
