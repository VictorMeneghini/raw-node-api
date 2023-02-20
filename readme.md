### Raw node api

![Node image](https://portswigger.net/cms/images/b8/7e/72d4-article-210902-node-js-body-text.png)

The goal of this project is to build an API using only Node.js and its functionalities without using external libraries and thus, understand how current frameworks work.

During the development of the project, the file system was used to manage the CRUD of the information and stored it locally. In a real application this module would be replaced by a conventional database.


|knowledge|Links|  
|---|---|
| File system | https://nodejs.org/dist/latest-v18.x/docs/api/fs.html |
| Protocol http/https| https://nodejs.org/dist/latest-v18.x/docs/api/http.html and https://nodejs.org/dist/latest-v18.x/docs/api/https.html  and https://developer.mozilla.org/en-US/docs/Web/HTTP|
| SSL/TLS / openSSL| https://nodejs.org/dist/latest-v18.x/docs/api/tls.html and https://www.openssl.org/
| Callback functions| https://developer.mozilla.org/en-US/docs/Glossary/Callback_function |
| Promises| https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises |
| Server applications| https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server |
| Buffers| https://nodejs.org/dist/latest-v18.x/docs/api/buffer.html |
| MJS | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules |

### Run with https
To run the application with https you will have to put your TLS/SSL config into `./https` folder