const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron')
const path = require('path')

describe('Application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, '..')]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  /*it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })*/

  it('Calculation 1', async function(){
    var n1 = '4';
    var n2 = '10';

    this.app.client.addValue('#number1', n1);
    this.app.client.addValue('#number2', n2);

    this.app.client.click('#submitBtn');
    await this.app.client.waitUntilWindowLoaded();
    return this.app.client.getText('#result').then(function (result) {
      assert.equal(parseFloat(result,10), 14);
    });
  })

  it('Calculation 2', async function(){
    var n1 = '4,89';
    var n2 = '-4,1';

    this.app.client.addValue('#number1', n1);
    this.app.client.addValue('#number2', n2);

    this.app.client.click('#submitBtn');
    await this.app.client.waitUntilWindowLoaded();
    return this.app.client.getText('#result').then(function (result) {
      assert.equal(parseFloat(result,10), 0.79);
    });
  })
})