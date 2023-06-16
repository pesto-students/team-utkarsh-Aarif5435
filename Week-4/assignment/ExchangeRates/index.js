// import axios from 'axios';
const axios = require('axios');
async function getExchangeRate(currencyCode){

    try{
        const res = await axios(`https://v6.exchangerate-api.com/v6/3d5bbc5e0b3a9a88d3e947d1/latest/${currencyCode}`);
        return res;
    }catch(err){
        return err;
    }
}

getExchangeRate('EUR').then((rate)=>{
    console.log(rate.data);
}).catch((err)=>{
    console.log(err);
})