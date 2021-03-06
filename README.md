# wallet-bridge
This is a [credential handler polyfill](https://github.com/digitalbazaar/credential-handler-polyfill) based demo app to receive/send custom [CHAPI](https://w3c-ccg.github.io/credential-handler-api/) requests/responses.

Once registerd, this wallet can be used to read raw CHAPI requests from an issuer or relying party, a custom CHAPI response can also be sent back to an issuer or relying party.

## Prerequisites 

- Npm

## How to Run

Run below command to start wallet in project root,

```bash
npm start
```

Above command will start local wallet in port 5555. Once started visit [wallet registration page](https://localhost:5555), you will get a prompt from your browser to allow wallet to manage credentials, choose ``Allow``.

## How to Use
Once registered, your wallet is ready handle browser CHAPI requests. 

[Credential Request](https://w3c-ccg.github.io/credential-handler-api/#the-credentialrequestevent) and [Credential Store events](https://w3c-ccg.github.io/credential-handler-api/#the-credentialstoreevent) can be copied from the wallet pages and custom credential event response data can be sent using the same page.
Note: For CHAPI credential request calls, response has to be in [Verifiable Presentation](https://www.w3.org/TR/vc-data-model/#example-2-a-simple-example-of-a-verifiable-presentation) format.

 

