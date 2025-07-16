# RND_IOB_V2 – Beehive Monitoring System

**RND_IOB_V2** is an IoT-based beehive monitoring system designed to collect environmental and activity data from beehives using LoRaWAN-enabled microcontrollers. This project aims to help beekeepers monitor hive health remotely through sensors, a backend server, and a user-friendly frontend dashboard.

---

## 🐝 Features

- Real-time sensor data collection (temperature, humidity, weight, sound, UV)
- LoRaWAN transmission (AI Thinker Ra-08 with ESP8266/Arduino)
- ExpressJS backend API
- ReactJS frontend dashboard for data visualization
- MongoDB + QuestDB integration for user and sensor data
- Low-power operation with sleep cycle and solar charging

---

## 🧰 Tech Stack

| Component       | Technology                        |
|----------------|------------------------------------|
| Microcontroller| ESP8266, Arduino                   |
| Communication  | LoRaWAN (AI Thinker Ra-08)         |
| Backend        | Node.js, ExpressJS                 |
| Frontend       | ReactJS                            |
| Database       | MongoDB (User) + QuestDB (Sensor)  |
| Power Supply   | Lithium Battery + Solar Panel      |

---

## 📁 Project Structure

```
RND_IOB_V2/
├── Ai-Thinker-LoRaWAN-Ra08/      # LoRaWAN config & driver
├── Arduino_sending/              # Arduino-based data transmission
├── ESP_sending/                  # ESP8266 transmission code
├── ESP_receiving/                # ESP8266 receiver code
├── Beehive-Backend- expressJS/   # Node.js backend API
├── Beehive-Frontend-React/       # Web dashboard
├── README.md                     # Project overview
├── .gitignore                    # Ignore list
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/2059052/RND_IOB_V2.git
cd RND_IOB_V2
```

### 2. Install Backend

```bash
cd Beehive-Backend- expressJS
npm install
npm start
```

### 3. Run Frontend

```bash
cd ../Beehive-Frontend-React
npm install
npm start
```

### 4. Flash Microcontroller

Use Arduino IDE or PlatformIO to flash code in `ESP_sending/` and `ESP_receiving/`.

---

## ⚙️ System Diagram

```
[Sensors] --> [ESP/Arduino] --> [LoRaWAN] --> [Gateway] --> [Backend Server] --> [MongoDB + QuestDB] --> [React Dashboard]
```

---

## 🧪 Development Notes

- Ensure your gateway forwards packets to your backend endpoint.
- Sensor sleep cycles are configurable (e.g., 15-minute intervals).
- Battery usage is optimized with solar charging.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change or improve.

---

## 📜 License

This project is for educational purposes and is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

For questions or feedback, please reach out via GitHub Issues or contact `2059052` (project owner).
