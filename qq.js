const request = require('request');
const base64 = require('./lib/base64');

let re = /MusicJsonCallback_lrc\((.*)\)/;  // 用来去掉jsonp的函数
/**
 * 
 * options 对象
 *    id 歌曲的id
 *    type 数据类型 jsonp|data 默认是jsonp
 *    jsonp_callback jsonp的回到函数 默认 MusicJsonCallback_lrc
 */
function findRicBysongmid (id) {
  
  let url = `https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?
              callback=MusicJsonCallback_lrc&pcachetime=1506783483547&songmid=001hwT1w1Izz3y`
  let options = {
    url: url,
    headers: {
      'referer': 'https://y.qq.com/portal/player.html'
    },
    json:true
  }

  request(options, (error, response, body) => {

    try{
      let data = JSON.parse(body.match(re)[1]);
      
      if(data.retcode === 0){ // 拿数据成功
        let d = new base64().decode(data.lyric);
      }else {
        console.log('拿数据失败')
      }
    }catch(error){
      throw new Error(error);
    }
  })
}
