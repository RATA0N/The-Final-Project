# The-Final-Project


# 🧥 Smart Safety Jacket

[![GitHub release](https://img.shields.io/github/release/username/smart-safety-jacket.svg)](https://github.com/username/smart-safety-jacket/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/travis/username/smart-safety-jacket.svg)](https://travis-ci.org/username/smart-safety-jacket)
[![PlatformIO](https://img.shields.io/badge/PlatformIO-Project-orange.svg)](https://platformio.org/)

A next-generation wearable safety solution designed for industrial workers, electricians, and linemen. The Smart Safety Jacket integrates multiple sensors and IoT capabilities to provide real-time monitoring of environmental hazards, worker health, and safety conditions.

## 📋 Table of Contents

- [Features](#-features)
- [Hardware Components](#-hardware-components)
- [Software Architecture](#-software-architecture)
- [Installation](#-installation)
- [Usage](#-usage)
- [Mobile App](#-mobile-app)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

- **Environmental Monitoring**: Detects hot surfaces and temperature anomalies with IR sensors
- **Health Monitoring**: Tracks heart rate and blood oxygen levels in real-time
- **Fall Detection**: Automatically detects falls and sends alerts
- **Electrical Hazard Detection**: Warns workers when approaching live conductors
- **Multi-modal Alerts**: Visual (LED), audio (buzzer), and haptic (vibration) notifications
- **Remote Monitoring**: Sends data to mobile app and control room via Bluetooth/Wi-Fi
- **Long Battery Life**: Efficient power management with rechargeable Li-ion battery

## 🔧 Hardware Components

### Core Controller
- **ESP32-S3**: Main processing unit with on-device AI capabilities

### Sensors
- **MLX90614/90640**: IR temperature sensor mounted on shoulder/chest area
- **MAX30102**: Heart rate and SpO₂ sensor integrated into wrist cuff
- **MPU6050/MPU9250**: Motion and fall detection sensor in back collar region
- **Custom E-field Probe**: Electric field detector woven into chest pocket/sleeve

### Power System
- **18650 Li-ion Battery**: Main power source in padded pocket
- **TP4056 Charging Module**: Battery charging management
- **LDO 3.3V Regulator**: Stable power supply for components
- **USB-C Charging Port**: Waterproof and concealed charging interface

### Alert System
- **Vibration Motor**: Haptic feedback for silent alerts
- **Buzzer**: Audio alerts for critical warnings
- **LED Strip**: Visual indicators sewn into jacket seams

## 💻 Software Architecture

```
┌───────────────────────────────────────────────────────┐
│                   Mobile App / Dashboard              │
└───────────────────────┬───────────────────────────────┘
                        │ (Bluetooth/Wi-Fi)
┌───────────────────────▼───────────────────────────────┐
│                     ESP32-S3                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Sensor    │  │   Alert    │  │  Power     │     │
│  │  Manager    │  │  Manager   │  │ Management │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
└───────────────────────┬───────────────────────────────┘
                        │
┌───────────────────────▼───────────────────────────────┐
│                    Sensors                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │Temperature  │  │   Health    │  │   Motion    │     │
│  │   Sensor    │  │   Monitor   │  │  Detector   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│  ┌─────────────┐                                      │
│  │E-field      │                                      │
│  │Detector     │                                      │
│  └─────────────┘                                      │
└───────────────────────────────────────────────────────┘
```

## 🚀 Installation

### Prerequisites

- PlatformIO IDE or Arduino IDE
- ESP32 development board support
- Required libraries (see `platformio.ini` or `libraries.txt`)

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/username/smart-safety-jacket.git
   ```

2. Open the project in PlatformIO IDE or Arduino IDE

3. Install the required libraries:
   - For PlatformIO: Libraries will be automatically installed
   - For Arduino IDE: Install libraries manually through Library Manager

4. Configure your device:
   - Edit `include/config.h` with your specific settings
   - Adjust sensor calibration values if needed

5. Upload the firmware to your ESP32:
   ```bash
   # For PlatformIO
   pio run --target upload
   ```

6. Open the Serial Monitor to verify the device is working correctly

## 📱 Usage

1. Power on the jacket by pressing the power button (located inside the chest pocket)

2. The jacket will perform a self-test sequence:
   - LEDs will flash
   - Buzzer will sound briefly
   - Vibration motor will activate

3. Connect your mobile device to the jacket via Bluetooth:
   - Open the companion app
   - Select "Smart Safety Jacket" from the device list
   - Wait for connection to establish

4. The jacket will now:
   - Continuously monitor environmental conditions
   - Track your health metrics
   - Alert you to potential hazards
   - Send data to the mobile app

5. To charge the jacket:
   - Connect the USB-C cable to the hidden charging port
   - The LED indicator will show charging status
   - A full charge takes approximately 3 hours

## 📲 Mobile App

The companion mobile app provides:

- Real-time monitoring of all sensor data
- Historical data visualization
- Customizable alert thresholds
- Emergency contact configuration
- Location tracking (when GPS module is installed)

Download the app from:
- [Google Play Store](#) (Android)
- [App Store](#) (iOS)

## 🔮 Future Enhancements

- [ ] GPS + LoRa integration for remote location tracking
- [ ] Thermal fabric patches for internal overheating detection
- [ ] OLED display on chest for status information
- [ ] Machine learning for improved hazard prediction
- [ ] Voice control and feedback system
- [ ] Integration with industrial safety management systems

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [ESP32](https://www.espressif.com/en/products/socs/esp32) for the powerful microcontroller
- [PlatformIO](https://platformio.org/) for the excellent development framework
- The open-source community for various libraries and components

## 📞 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - your.email@example.com

Project Link: [https://github.com/username/smart-safety-jacket](https://github.com/username/smart-safety-jacket)

---

⭐ If you find this project useful, please give it a star!
