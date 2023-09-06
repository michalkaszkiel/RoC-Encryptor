# Rotational Cipher Encryptor:
is web application designed to provide an easy-to-use Rotational Cipher encryption and decryption tool. This application allows you to secure your messages and data with a classic encryption technique known as the Caesar Cipher. With RoC you can encode and decode messages quickly and securely.

![RoC](https://cscx.org/caesar3.svg)
## Key Features:

1. User-Friendly Encryption: Encrypt your messages with just a few clicks, ensuring the confidentiality of your data.

2. Customizable Encryption Key: Choose the rotation key that best suits your security needs, with support for both alphabetic and numeric keys.

3. Copy and Paste: Easily copy the encrypted message and send it to your recipient. They can then use the same tool with the correct key to decrypt the message.

## Repository Structure:

- src/Introduction.js: React component for the application's introduction and explanation of the Rotational Cipher.

- src/Cyphers.js: Main component managing the Encode and Decode functionalities.

- src/Encode.js: Component for encrypting messages using the Rotational Cipher technique.

- src/Decode.js: Component for decrypting messages encrypted with the Rotational Cipher.

- src/Selection.js: Component for selecting the rotation key.

- src/Buttons/Btn17.js and src/Buttons/Btn.jsx: Reusable button component for the user interface.

- src/images/: Images used in Project.

## Getting Started:

Clone this repository to your local machine.
Navigate to the project directory.
Install the required dependencies using npm install.
Start the development server with npm start.

Contributing:
If you'd like to contribute, please follow these steps:

Fork this repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your changes to your fork.
Submit a pull request to the main repository.
Issues and Bug Reports:
If you encounter any issues or would like to report a bug, please open an issue on our GitHub repository. We appreciate your feedback and will work to address any problems promptly.

I believe you find Roc useful and enjoy using it for your encryption needs. Thank you for checking out.

## Explanation
![Encoding-of-the-letters-in-The-Caesar-Cipher-6](https://github.com/michalkaszkiel/Rotational-Cipher-code-decode/assets/120386627/ac728624-e486-4d8b-8c48-d4459578402e)

English alphabet consists of 26 characters. App can also code password with numbers from 0 to 9 to improve difficulty for unauthorized decryptors.
Cesar cipher class has its methods:

1. encrypt()

* takes two arguments: 
    *       lowercased string which will be decrypted
    *       the offset, the shift distance chosen by an index heading left.
            Each letter is replaced by another letter of offset index located
            a little further in the alphabet.

2. decrypt()
* takes two arguments: 
    *       decoded password - analogically method decrypts previously coded password,
    *       the offset.



## Authors

- [@michalkaszkiel] (https://github.com/michalkaszkiel)

