import terraceImg from '../assets/29terrace.png'
import udonImg from '../assets/udon.png'
import udon2Img from '../assets/udon2.png'
import harbsImg from '../assets/harbs.png'
import afuriImg from '../assets/afuri.png'
import lemonImg from '../assets/lemon.png'
import lamanImg from '../assets/laman.png'
import laman2Img from '../assets/laman2.png'
import eggImg from '../assets/egg.png'
import bbqImg from '../assets/bbq.png'
import bbq2Img from '../assets/bbq2.png'
import bbq3Img from '../assets/bbq3.png'
import dountImg from '../assets/dount.png'
import MMImg from '../assets/MM.png'
import riceImg from '../assets/rice.png'
import rice2Img from '../assets/rice2.png'
import cakeImg from '../assets/cake.png'
import popoImg from '../assets/popo.png'
import sushiImg from '../assets/sushi.png'
import mochaImg from '../assets/mocha.png'
import shisaImg from '../assets/shisa.png'
import shisa2Img from '../assets/shisa2.png'
import coffee1 from '../assets/coffee1.png'
import coffee2 from '../assets/coffee2.png'

const coffeeImgs = [coffee1, coffee2]



export const fooddata = {  
    新宿Shinjuku: {
    bbq: [
      { img: terraceImg, name: '燒肉 29 Terrace', desc: '高質感和牛吃到飽套餐，視覺與味覺雙享受！', url: 'https://maps.app.goo.gl/7xvk3Q1C68tT3f226', lat: 35.6917, lng: 139.7016 },
      { img: lemonImg, name: '東京牛舌の檸檬', desc: '新宿燒肉 厚切牛舌超人氣！', url: 'https://maps.app.goo.gl/odUJCcKZPaDd9UQ98', lat: 35.6923, lng: 139.7038 }
    ],
    noodles: [
      { img: udonImg, name: 'うどん 慎', desc: '彈牙手打烏龍麵，排隊也值得一試的超人氣名店！', url: 'https://maps.app.goo.gl/tuxUKT9fWNzsTJQe6', lat: 35.6912, lng: 139.6995 },
      { img: afuriImg, name: 'AFURI 新宿', desc: 'AFURI阿夫利鹽柚子拉麵是多人推薦的東京美食', url: 'https://maps.app.goo.gl/sXucYTsqfkDVuxMJ7', lat: 35.6907, lng: 139.7009 }
    ],
    dessert: [
      { img: harbsImg, name: 'HARBS LUMINE EST新宿店', desc: '大人氣的水果千層蛋糕甜點', url: 'https://maps.app.goo.gl/Fte6hGwsc1QB1zfk6', lat: 35.6916, lng: 139.7023 }
    ],
    breakfast: [
      { img: eggImg, name: 'eggslut Shinjuku Southern Terrace', desc: '新宿早餐首選', url: 'https://maps.app.goo.gl/d4qr3JJWewF9E5PH9', lat: 35.6889, lng: 139.7005 }
    ]
  },
  澀谷Shibuya: {
    bbq: [
      { img: MMImg, name: 'Kushiyaki Meat Man', desc: '精緻串燒的時尚居酒屋', url: 'https://maps.app.goo.gl/ZX9fg6qpBGffgkVr6', lat: 35.6591, lng: 139.7036 }
    ],
    noodles: [
      { img: udon2Img, name: 'Yamashita Honki Udon', desc: '創意奶油明太子起司烏龍麵推薦', url: 'https://maps.app.goo.gl/4mUmo5td4NjaD19A8', lat: 35.6608, lng: 139.7042 }
    ],
    rice: [
      { img: riceImg, name: 'かつお食堂', desc: '涉谷超人氣柴魚片飯專門店', url: 'https://maps.app.goo.gl/ZmZWL1EfUn5S1wug7', lat: 35.6623, lng: 139.7031 },
    ],
    dessert: [
      { img: coffeeImgs, name: 'HATTO COFFEE 咖啡&簡餐', desc: '神宮前好喝咖啡，還有客製化3D奶泡', url: 'https://maps.app.goo.gl/ncX7DQUqx334JnvU6', lat: 35.6679, lng: 139.7126, multiple: true },
      { img: dountImg, name: "I'm donut ?", desc: '生甜甜圈紅到東京', url: 'https://maps.app.goo.gl/y1nW1S2Bp3yaJssW8', lat: 35.6593, lng: 139.7025 },
      { img: cakeImg, name: 'Afternoon Tea •LOVE & TABLE', desc: '日本人氣甜點店', url: 'https://maps.app.goo.gl/qnx58rybf9K8YgUu8', lat: 35.6621, lng: 139.7030 }
    ]
  },
  麻布區Nishiazabu: {
    bbq: [{ img: null, name: null, desc: null }],
    noodles: [{ img: null, name: null, desc: null }],
    rice: [{ img: rice2Img, name: 'Kogaiken', desc: '明星都愛吃的日本人靈魂美食蛋包飯', url: 'https://maps.app.goo.gl/Fd6toHbZq8VDFQCS6', lat: 35.6627, lng: 139.7028  }],
    dessert: [{ img: null, name: null, desc: null }]
  },
  千代田區ChiyodaCity: {
    bbq: [{ img:popoImg , name:'PATISSERIE TEN&', desc:'東京泡芙天花板',url:'https://maps.app.goo.gl/f2pzHGDGNxT67WBD9' }],
    noodles: [{ img: null, name: null, desc: null }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: null, name: null, desc: null }]
  },
  港區MinatoCity: {
    bbq: [{ img: bbqImg, name: '爐端武藏', desc:'東京人氣居酒屋「爐端燒武藏」坐等師傅現烤美食給你吃！',url:'https://maps.app.goo.gl/rWVskEE77DjQPhJa7' },
    { img: bbq2Img, name:'燒肉 JUMBO', desc:'白金黑毛和牛',url:'https://maps.app.goo.gl/psVrbXnBvrNdkFXE6' },
    { img: bbq3Img, name:'燒肉Kunimoto 新館', desc:'該店多次獲得 Tabelog Award 銅獎，並連續多年入選「燒肉百名店」榜單',url:'https://maps.app.goo.gl/nMZLTEBUnZBz2gkv8' },
    ],
    noodles: [{ img: lamanImg, name:'富喜製麺研究所 六本木店', desc:'東京拉麵老字號',url:'https://maps.app.goo.gl/ogH4kbGN56J6sSSa8' }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: null, name: null, desc: null }]
  },
  淺草台東區TaitoCity: {
    bbq: [{img: null, name: null, desc: null}],
    noodles: [{ img: laman2Img, name:'拉麵鴨to蔥', desc:'極致鴨香拉麵',url:'https://maps.app.goo.gl/yaRBD6u62R6ViRz7A' }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: mochaImg, name:'八十八良葉舍 淺草', desc: '淺草八十八抹茶推薦！在東京也能體驗京都八十八良葉舎手刷抹茶與茶點',url:'https://maps.app.goo.gl/cEMfiaPgp4VAkpoAA' }]
},
文京區BunkyoCity: {
    bbq: [{ img: null, name: null, desc: null}],
    noodles: [{ img: null, name: null, desc: null }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: null, name: null, desc: null }],
    Sushi: [{ img:sushiImg, name:'Sushi Edo Fuji', desc: '巨大海鮮丼飯' ,url:'https://maps.app.goo.gl/1UB5frDujraifDPi9'}]
},
人形町區ChuoCity: {
    bbq: [{ img: null, name: null, desc: null}],
    noodles: [{ img: null, name: null, desc: null }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: null, name: null, desc: null }],
    Sukiyaki: [{img: shisaImg, name:'人形町今半 壽喜燒', desc: '東京必吃壽喜燒名店！',url:'https://maps.app.goo.gl/Gn4ny3yh9BLzAp9Z7'},
    { img: shisa2Img, name: '熊本あか牛しゃぶしゃぶ 甲梅 火鍋 ', desc: '使用熊本阿蘇孕育的赤牛「甲誠牛」的涮涮鍋專門店',url:'https://maps.app.goo.gl/v3ERi35Qtq2v9BMf9' }

    ]
  }}