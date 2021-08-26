require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember protect hidden cloth flame solve'; 
let testAccounts = [
"0xafc1f6edc31410a0f394aad40d8dc4303960e5738a235e9b84b45bfd824674c7",
"0x96430b7741622ace0cee4a5fd27bafbb20f8fce4cd0a4e04506ab1667450384c",
"0x32337cf4674ff569a2d54562452b43cb45e2fee07a57778a158c4147f719c98d",
"0x9b626198ec9491c06ec2477bda1ebbfcc3aca05ccfaae4567227477bb32ab3a4",
"0xcb2488ecd1b3338769cf136fa76f5d5a15c14b4ae4ea38aa7d463806efcd4423",
"0x084e6aaf9e0cfa1d5609160c0bb6faaaf846137d5cda3982895a26cb370d2548",
"0x0d6fe1abfd525ea6ec368c707a9d405a502737e01821887f571ef63e44520dd1",
"0x92dd3f0f29be7c80b63f6f34167a378653ba4539e052dbbf5340f712a2362aaf",
"0x247ad6cf3e320216bfda71c50306f514b1f0ecf958925d23cffbc6dfcefc5678",
"0xaa9c25fe8bdb447e0e9629b86e8408916f38003fa05807344f8372a02ab5dc4f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


