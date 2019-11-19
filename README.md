# oscilloscope 


## part 2
### warmup 
this is the video for part 1 warmup
video: https://imgur.com/a/ghAb5cp
### section i 
#### a 
changing the wavelengths using functions and changing frequency
video: https://imgur.com/a/Rwbyp3r

#### b
changing wavelength with the function generator
video: https://imgur.com/a/v5tZJmJ

#### c 
a one line code in java allowing the microbit to output pwm pulse to pin 0 
video:https://imgur.com/a/mphbWIl

#### d 
the readings for the duty cycle we recorded were width pulse low 1.98 high 18.8 period low 11.20 high 20.05
video: https://imgur.com/a/SfhWVpz

## part 3 
### warmup 
#### part a 
UART Ports are asynchronous, and require hardware overhead. UARTs are complex and difficult to accurately implement in software. At least one start and stop bit is required for each part of a frame of data. an example that would be 10 bits of transmission time is required for each 8 bits of data sent. they are basically setup to work between only two devices. It is possible to connect multiple devices to a single port, however there are factors that have to be taken into account in order not to damage the questions in action, mainly through external hardware.

SPI ports have drawbacks, the number of pins required for connections between devices for example. Connecting a single master to a single slave with SPI requires 4 lines, also each additional slave requires an additional I/O chip select pin on master. Because of this, the amount of pin connections makes it not great in situations where lots of devices are connected to one master. Also, routing signals can become difficult in these situations due to the physical space that routing lanes require.

I2C requires only two wires, like asynchronous serial, but those two wires can support up to 1008 slave devices. unlike SPI, I2C can support a multi-master system, allowing more than one master to communicate with all devices on the bus 

Data rates fall between asynchronous serial and SPI; most I2C devices can communicate at 100kHz or 400kHz. There is some overhead with I2C; for every 8 bits of data to be sent, one extra bit of meta data (the "ACK/NACK" bit, which we'll discuss later) must be transmitted.

The hardware required to implement I2C is more complex than SPI, but less than asynchronous serial. It can be fairly simple implemented in software.
