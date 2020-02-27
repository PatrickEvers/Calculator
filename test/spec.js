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

  it('Addition 1', async function(){
    var n1 = '4';
    var n2 = '10';

    this.app.client.addValue('#number1', n1);
    this.app.client.addValue('#number2', n2);

    this.app.client.click('#addBtn');
    await this.app.client.waitUntilWindowLoaded();
    return this.app.client.getText('#result').then(function (result) {
      assert.equal(parseFloat(result,10), 14);
    });
  })

  it('Addition 2', async function(){
    var n1 = '4,89';
    var n2 = '-4,1';

    this.app.client.addValue('#number1', n1);
    this.app.client.addValue('#number2', n2);

    this.app.client.click('#addBtn');
    await this.app.client.waitUntilWindowLoaded();
    return this.app.client.getText('#result').then(function (result) {
      assert.equal(parseFloat(result,10), 0.79);
    });
  })

  it('Addition 3', async function(){
    var n = '8';

    this.app.client.addValue('#number2', n);

    this.app.client.click('#addBtn');
    await this.app.client.waitUntilWindowLoaded();
    return this.app.client.getText('#result').then(function (result) {
      assert.equal(parseFloat(result,10), 8);
    });
  })

  it('Subtraction 1', async function(){
    var n1 = '42';
    var n2 = '4';

    this.app.client.addValue('#number1', n1);
    this.app.client.addValue('#number2', n2);

    this.app.client.click('#subtractBtn');
    await this.app.client.waitUntilWindowLoaded();
    return this.app.client.getText('#result').then(function (result) {
      assert.equal(parseFloat(result,10), 38);
    });
  })

  it('Subtraction 2', async function(){
    var n1 = '-4,2';
    var n2 = '51';

    this.app.client.addValue('#number1', n1);
    this.app.client.addValue('#number2', n2);

    this.app.client.click('#subtractBtn');
    await this.app.client.waitUntilWindowLoaded();
    return this.app.client.getText('#result').then(function (result) {
      assert.equal(parseFloat(result,10), -55.2);
    });
  })

  it('Subtraction 3', async function(){
    var n = '2';

    this.app.client.addValue('#number2', n);

    this.app.client.click('#subtractBtn');
    await this.app.client.waitUntilWindowLoaded();
    return this.app.client.getText('#result').then(function (result) {
      assert.equal(parseFloat(result,10), -2);
    });
  })
})