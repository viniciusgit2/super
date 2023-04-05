import chai, { expect, } from "chai";
import { stdout } from "node:process";
import { describe, it } from "node:test";
const exec=require(`child.process`)
const btcconverter=`../main.js`
describe(`main cli`,()=>{
    it (`should return hello word `,(done)=>
    {exec(btcconverter,(err,stdout,stderr)=>{if(err) throw err
        expect (stdout).to.be.equal("hallo word")
            })
})

})
