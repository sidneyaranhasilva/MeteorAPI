#include <ESP8266WiFi.h>
#include "DHT.h"
#include <ESP8266HTTPClient.h>


#define DHTTYPE DHT11 
uint8_t DHTPin = 12; 
DHT dht(DHTPin, DHTTYPE); 

HTTPClient http;
String bodyAux;

const int luz = 13;             // Pino Referente ao led ou rele

float temp;
float umi;

const char* ssid = "*******"; //SSID wifi
const char* senha = "*****"; //senha wifi

String serverName = "http://192.168.1.120:3000/meteorapp/dados";

void setup(){
  Serial.begin(115200);
  pinMode(luz, OUTPUT);
  pinMode(DHTPin, INPUT);

  dht.begin();  

  Serial.print("Conectando na rede:  ");
  Serial.println(ssid);
  WiFi.begin(ssid, senha);
  while (WiFi.status() != WL_CONNECTED) {
    piscaLed();
    Serial.print(".");
}

  Conectado();
  Serial.println("");
  Serial.println("WiFi conectado");
  Serial.println("Endereço IP: ");
  Serial.println(WiFi.localIP());
 
}

void loop(){
  
 enviaInfo() ;

}


void piscaLed() {
  digitalWrite(luz, HIGH);   
  delay(100);                      
  digitalWrite(luz, LOW);   
  delay(100);                  
}

void Conectado() {
  digitalWrite(luz, HIGH);   
              
}

 void enviaInfo() {

  temp = dht.readTemperature(); 
  umi = dht.readHumidity(); 

      WiFiClient client;
      HTTPClient http;

    String serverPath = serverName;
String body = "humidade=" + String(umi, 2) +   "&temperatura=" + String(temp, 2) + "&dispositivo=2" ;

if(body != bodyAux ){
    http.begin(client, serverPath.c_str());
    http.addHeader("content-type", "application/x-www-form-urlencoded");

  
  
  Serial.print("body: ");
  Serial.print(body);

    int httpCode = http.POST(body);

    
  if (httpCode == 200) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpCode);
        String payload = http.getString();
        Serial.println(payload);
      }
      else {
        Serial.print("Error code: ");
        Serial.println(httpCode);
      }
      // Free resources
      http.end();

  }
    bodyAux = body;


  delay(1000);    
    
}



