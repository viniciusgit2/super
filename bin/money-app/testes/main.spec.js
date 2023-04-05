import chai, { expect } from "chai";
import { stdout } from "node:process";
import { describe } from "node:test";
const exec=require(`child.process`)
const btcconverter=`../main.js`
describe(`main cli`,()=>{
exec(btcconverter,(err,stdout,stderr)=>{})
if(err) throw err
expect (stdout).to.be.equal("hallo word")

})
