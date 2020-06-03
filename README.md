# Cipher-O-Matic

Cipher-O-Matic is a single page, MERN based, web application to encrypt text using classic cyphers. It uses a RESTful API to make the encryption calculations, and makes use of Jest for unit testing. Work in progress - see Roadmap to have a gander at the planned features!

![](https://i.imgur.com/LTREuXH.gif)

## 🔌 API endpoints

| **Method** | **Route** | **Description**                                                                                       |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------- |
| POST       | /caesar   | Encrypts **plaintext** with the Caesar cipher, shifting letters **factor** positions in the alphabet. |

## 🧭 Roadmap

- Modifying the Caesar function so it also can decrypt ciphertext.
- Including endpoints to encrypt/decrypt in Atbash and Vigenère ciphers.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Feature suggestions are also very welcome.

## ⚖️ License

[MIT](https://choosealicense.com/licenses/mit/)
