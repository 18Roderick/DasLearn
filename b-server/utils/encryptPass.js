const uuid = require('uuid/v4')
const crypt = require('crypto')


const secret = '8515dc44-aedc-45c0-9153-c2cc74ba6a01'


function encrypt(text){
  const cipher = crypt.createCipher('aes192', secret)

  let encryptText = cipher.update(text, 'utf8', 'hex')

  encryptText += cipher.final('hex')

  return encryptText
}


function decrypt(text){
  const decipher = crypt.createDecipher('aes192', secret)

  let decryptText = decipher.update(text, 'hex', 'utf8')

  decryptText += decipher.final('utf8')

  return decryptText
}


module.exports = {
  encrypt,
  decrypt,
}