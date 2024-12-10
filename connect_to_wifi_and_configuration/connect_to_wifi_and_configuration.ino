#include <ESP8266WiFi.h>
#include <PubSubClient.h>  //mqtt protocol 
#include "DHT.h"
#include <Adafruit_Sensor.h>
#include <Arduino_JSON.h>

#define DHTPIN 4     
#define DHTTYPE DHT22   
DHT dht(DHTPIN, DHTTYPE);


JSONVar data;

//config wifi  and mqtt server for esp8266
const char* ssid = "Nhung";
const char* password = "khimvanhung";
const char* mqtt_server = "192.168.1.69";  //mqtt broker

WiFiClient espClient;
PubSubClient client(espClient);  //use espClient for network communication

void setup_wifi() {

  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  //config wifi station mode(join exists network)
  WiFi.mode(WIFI_STA);
  IPAddress staticip(192,168,1,30);
  IPAddress gateway(192,168,1,1);
  IPAddress subnet (255,255,255,0);
  WiFi.config(staticip, gateway, subnet);

  WiFi.begin(ssid,password);
  /**/
  while(WiFi.status() !=WL_CONNECTED){
  delay(500);
  // randomSeed(micros()); //
  Serial.print(".");
  }
  Serial.println("WiFi connected");
  Serial.print("IP HOST: ");
  Serial.println(WiFi.localIP());
  Serial.println(WiFi.gatewayIP());
  Serial.println(WiFi.subnetMask());
  Serial.println(WiFi.status());
}
  /**/


void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
        Serial.print("Attempting MQTT connection...");

  if (client.connect("ESP8266Client")) {
      Serial.println("connected");
      //if esp can connect to server, then esp will subcribe the topic
      client.subscribe("device/temp");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}
//receive message sent from device to mqtt
void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();

  // if message = 1 then react on esp
  if ((char)payload[0] == '1') {
    Serial.print("esp8266 receive message 1");
  } 

}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
  dht.begin();
}


void loop(){
if (!client.connected()) {
        reconnect();
      }
      client.loop();

      // Wait a few seconds between measurements.
      delay(2000);
      Serial.print("Temperature: ");
  
  Serial.print(getTemp("c"));
  
  Serial.print(" *C ");
   
   
  Serial.print("Humidity: ");
  Serial.print(getTemp("h"));
  Serial.println(" % ");
  Serial.println("===========================");
//data format
  data["temperature"] = getTemp("c");
  data["humidity"] = getTemp("h");
  data["place"] = "Dong Nai";
  String jsonString = JSON.stringify(data);

  //publish sensor data to server via topic
  client.publish("beehive", jsonString.c_str(), true);
      
  delay(2000);

}
float getTemp(String req)
{

  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  float h = dht.readHumidity();
  // Read temperature as Celsius (the default)
  float t = dht.readTemperature();
  
  
 

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return 0;
  }
  if(req =="c"){
    return t;//return Celsus
  }else if(req =="h"){
    return h;// return humidity
  }else{
    return 0.000;// if there is nothing,  0.000
  }
 
}
