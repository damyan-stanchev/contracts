module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 2900000,
      network_id: "*" // Match any network id
    }
  }
};
