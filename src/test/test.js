const chai =  require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const fetch = require('node-fetch');
const mocha = require('mocha');
const describe = mocha.describe;
chai.use(require('chai-dom'));
const it = mocha.it;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(``, {
    url: "http://localhost:3000/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000,
    runScripts: "dangerously"
  });

describe('Check for succcessful Fetech API call', () => {
    it('1) Should return an object, with an array count of 9 elements', async () => {
        await fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res.hits);
                assert.typeOf(res.hits, 'array');
                assert.lengthOf(res.hits, 9);
            })
    })
})

describe('Carousel DOM element', function() {
    it('2) Should be present', function() {

        JSDOM.fromURL('http://localhost:3000/', { runScripts: "dangerously" }).then(dom => {
            console.log(dom.serialize()); 
            const itemsContainer = dom.window.document.getElementById('items-container');
            expect(itemsContainer).to.exist;
        });


    });
  });
