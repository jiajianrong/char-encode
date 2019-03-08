/*
 * https://en.wikipedia.org/wiki/Radical_70
 * https://en.wikipedia.org/wiki/Kangxi_radical
 * https://zh.wikipedia.org/wiki/中日韓統一表意文字
 * 
 * https://blog.csdn.net/hezh1994/article/details/78899683
 * https://unicodelookup.com/#%E4%B8%80/1
 * https://unicodelookup.com/#%E2%BC%80/1
 * https://www.branah.com/unicode-converter
 */

var kxrChars = `⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿⾀⾁⾂⾃⾄⾅⾆⾇⾈⾉⾊⾋⾌⾍⾎⾏⾐⾑⾒⾓⾔⾕⾖⾗⾘⾙⾚⾛⾜⾝⾞⾟⾠⾡⾢⾣⾤⾥⾦⾧⾨⾩⾪⾫⾬⾭⾮⾯⾰⾱⾲⾳⾴⾵⾶⾷⾸⾹⾺⾻⾼⾽⾾⾿⿀⿁⿂⿃⿄⿅⿆⿇⿈⿉⿊⿋⿌⿍⿎⿏⿐⿑⿒⿓⿔⿕`;
var cjkChars = `一丨丶丿乙亅二亠人儿入八冂冖冫几凵刀力勹匕匚匸十卜卩厂厶又口囗土士夂夊夕大女子宀寸小尢尸屮山巛工己巾干幺广廴廾弋弓彐彡彳心戈戶手支攴文斗斤方无日曰月木欠止歹殳毋比毛氏气水火爪父爻爿片牙牛犬玄玉瓜瓦甘生用田疋疒癶白皮皿目矛矢石示禸禾穴立竹米糸缶网羊羽老而耒耳聿肉臣自至臼舌舛舟艮色艸虍虫血行衣西見角言谷豆豕豸貝赤走足身車辛辰辵邑酉釆里金長門阜隶隹雨靑非面革韋韭音頁風飛食首香馬骨高髟鬥鬯鬲鬼魚鳥鹵鹿麥麻黃黍黑黹黽鼎鼓鼠鼻齊齒龍龜龠`;


let KXR2CJK_MAP = {};
let CJK2KXR_MAP = {};


for(let i=0; i<kxrChars.length; i++) {
    KXR2CJK_MAP[kxrChars[i]] = cjkChars[i];
    CJK2KXR_MAP[cjkChars[i]] = kxrChars[i];
}


function kxr2cjk(str) {
    if (typeof str !== 'string') return '';
    return str.split('').map( c => KXR2CJK_MAP[c] || c ).join('');
}
function cjk2kxr(str) {
    if (typeof str !== 'string') return '';
    return str.split('').map( c => CJK2KXR_MAP[c] || c ).join('');
}


exports.kxr2cjk = kxr2cjk;
exports.cjk2kxr = cjk2kxr;



function test() {
    let s = require('fs').readFileSync('./kxr.txt', 'utf8')
    console.log('原始kxr字符串：')
    console.log('------------')
    console.log(s)
    console.log('------------')
    console.log('转成cjk字符串：')
    console.log('------------')
    console.log(kxr2cjk(s))
    console.log('------------')
    console.log('再转成kxr字符串：')
    console.log('------------')
    console.log(cjk2kxr(kxr2cjk(s)))
}

test();
