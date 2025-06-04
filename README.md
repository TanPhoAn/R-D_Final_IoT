**Setup Construction**
<br/> 
**Clone this repos to your computer:** git clone https://github.com/questdb/questdb-mock-power-sensor mock-sensor
<br/> 
**Adjust** the telegraf.conf on mock-sensor folder and grafana/granafa.ini file on Docker as on R&D_GUIDELINE.pdf attached
<br/> 
<br/> 
***Power Supply***

1.Power supply for the endNode devices.
<br/> 
<br/>
2. Power supply for Gateway device.
<br/>   

****************************************
***WiFi Configuration***
<br/> 
<br/>
3. After gateway device is supplied, please connect to Setup Portal Wi-Fi address and access 192.168.4.1 page for Wi-Fi configuration.
<br/> 
<br/>
4. Enter password: mrdiy.ca for the Wi-Fi to connect. After finishing, an alert page will appear. Please press the reset button of the ESP8266 Gateway.
<br/> 
<br/>
5. If the gateway connect correctly, it will start sending data to MQTT.
<br/> 
<br/>

**************************************
***Docker Establish***
<br/> 
<br/>
6. Open CMD: <br/> go get
<br/>              go run ./main.go
<br/> 
<br/>
7. Open Docker and host QuestDB, Telegraf and Grafana server
<br/> 
<br/>
  QuestDB: -	docker run --rm -dit -p 8812:8812 -p 9000:9000 ^ -p 9009:9009 -e QDB_PG_READONLY_USER_ENABLED=true ^ --network=tutorial --name=questdb questdb/questdb 
<br/> 
<br/>
  Telegraf: -	docker run --rm -it ^ -v C:\Users\(your_computer_name)\mock-sensor\conf\telegraf\telegraf.conf:/etc/telegraf/telegraf.conf ^ --network=tutorial --name=telegraf telegraf
<br/> 
<br/>
  Grafana: -	docker run --rm -dit -p 3000:3000 ^ --network=tutorial --name=grafana grafana/grafana 
<br/> 
<br/>
8. Access: <br/> localhost:3000 for Grafana Dashboard
<br/> 
<br/>      localhost:9000 for QuestDB dashboard
<br/> 
<br/>

**************************************
***Grafana Setup***
<br/> 
<br/>
SELECT
<br/>
avg(uv_value),
<br/>
avg(uv_index),
<br/>
avg(sound) as sound,
<br/>
avg(weight) as weight,
<br/>
avg(temperature_inside) as temperature_inside,
<br/>
avg(humidity_inside) as humidity_inside,
<br/>
avg(temperature_outside) as temperature_outside,
<br/>
avg(humidity_outside) as humidity_outside,
<br/>
date_trunc('minute', vn_time) AS minute
<br/>
from "your_database.csv"  //input your database
<br/>
WHERE place = 'Dong Nai'
<br/>
GROUP BY minute
<br/>
ORDER BY minute ASC
<br/>
<br/>


For more detail please read the R&D_GUIDELINE.pdf attach on this repository 
<br/>
*********
