const assert = require('assert');
const convertNumber = require('../index');
const intToRoman = convertNumber.intToRoman;
const romanToInt = convertNumber.romanToInt;

describe('intToRoman()', () => {
  it('Deveria retornar erro quando parâmetro estiver vazio', () => {
    assert.equal(intToRoman(), 'Esse campo não pode esta vazio!');
  });
  it('Deveria retornar erro se o número for uma string', () => {
    assert.equal(intToRoman('hello'), 'Esse campo só apenas números!');
  });
  it('Deveria retornar a string III para o número 3', () => {
    assert.equal(intToRoman(3), 'III');
  });
  it('Deveria retornar a string C para o número 100', () => {
    assert.equal(intToRoman(100), 'C');
  });
  it('Deveria retornar a string M para o número 1000', () => {
    assert.equal(intToRoman(1000), 'M');
  });
  it('Deveria retornar a string MCCCXLV para o número 1345', () => {
    assert.equal(intToRoman(1345), 'MCCCXLV'); 
  });
  it('Deveria retornar a string MMDCCCXC para o número 2890', () => {
    assert.equal(intToRoman(2890), 'MMDCCCXC');
  });
});

describe('romanToInt()', () => {
  it('Deveria retornar erro quando parâmetro estiver vazio', () => {
    assert.equal(romanToInt(), 'Esse campo não pode esta vazio!');
  });
  it('Deveria retornar erro quando parâmetro não for string', () => {
    assert.equal(romanToInt(101), 'Este campo só é permitido algarismos romanos!');
  });
  it('Deveria retornar 4 para a string IV', () => {
    assert.equal(romanToInt('IV'), 4);
  });
  it('Deveria retornar 2 para a string ii', () => {
    assert.equal(romanToInt('ii'), 2);
  });
  it('Deveria retornar 2890 para a string MMDCCCXC', () => {
    assert.equal(romanToInt('MMDCCCXC'), 2890);
  });
  it('Deveria retornar a string m para o número 1000', () => {
    assert.equal(intToRoman(1000), 'M');
  });
}); 