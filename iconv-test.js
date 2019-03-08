var iconv = require('iconv-lite');
var fs = require('fs');


function test1(oriText) {
    var encodedBuff = iconv.encode(oriText, 'utf8');
    console.log(encodedBuff);
    
    var decodedText = iconv.decode(encodedBuff, 'utf8');
    console.log(decodedText);
    
    //var wrongText = iconv.decode(encodedBuff, 'gbk');
    //console.log(wrongText);
}



function test2(hexArr) {
    var buff = Buffer.from(hexArr);
    
    var decodedText = iconv.decode(buff, 'utf8');
    console.log(decodedText);
    
    //var wrongText = iconv.decode(buff, 'gbk');
    //console.log(wrongText);
}



//<Buffer e2 be 83>
//⾃
test1('⾃')

//<Buffer e8 87 aa>
//自
test1('自')

//<Buffer e7 ae 97>
//算
test1('算')

//方
test2([0xe6, 0x96, 0xb9])

//⽅
test2([0xe2, 0xbd, 0x85])
