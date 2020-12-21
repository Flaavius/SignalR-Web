module.exports = {
  verbose: true,
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/__mocks__/setup.js'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverage: true,
  moduleNameMapper : {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "identity-obj-proxy"
  }
}