module.exports = {
  // 识别这些后缀
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    // tell Jest to handle *.vue files
    'vue'
  ],
  transform: {
    // process *.vue files with vue-jest
    '^.+\\.vue$': require.resolve('vue-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
    require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('babel-jest')
  },
  // 不转化的代码
  transformIgnorePatterns: ['/node_modules/'],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jest-environment-jsdom-fifteen',
  // serializer for snapshots 快照
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // 匹配某个目录下 *.space格式的文件
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/tests/Bdd/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.[jt]s?(x)'
  ],
  // https://github.com/facebook/jest/issues/6766
  // 模拟浏览器地址是
  testURL: 'http://localhost/',
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname')
  ]
}
