require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stomach radar payment come include end army giant'; 
let testAccounts = [
"0xfb46746384ead2161fa1e27bea85fce15260076d32baf02049c9022eab7039d0",
"0xc887dc983e8dadc467ebb2e20e9aa5b8549e5221d9285482a0d5c2a69f39e0c1",
"0x69dd5bb06d1a03029b51a25f789cbc2e8c4bb3de7b2f396c20649fbf43d70f96",
"0xbb8b58d1a0aed7783f2f5bb14f73e5edba61031067bb3f283aab82659f2a5044",
"0xeb1650bcec5819cbcf28aa4ad31238e3906eeec00e2e59de563429f1917726d6",
"0xe1f9ba6ea8a47802d6a223b47b25905db50494a68081c8db128e0149930d32ad",
"0x4e7a2af4e912b3bd1bb6b8de4fce4951f7585ab52dfea9575d852d286b53db22",
"0xf636106172bf42f5198edb2b09e9823a799682025e24bacc889908137259e9e9",
"0x41a1e1d099196734b541dce81f2a56b7513e027beb30b351c1e2c3691c8b2d26",
"0xb505121ddcde7e0d16c8d4c8f7182b02d47b7516705b5aa8d85d237ba4a628c7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

