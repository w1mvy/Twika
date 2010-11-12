var endsign = '(。|｡|．|！|!|？|\\?|\\)|」|』|…|―|$)';
var s_endsign = '(。|｡|．|！|!|？|\\?|\\)|」|』|…|―)';

/* 置換候補の正規表現と結果の辞書 */
var dictionaries = [
	{
		"id"		: "100",
		"pattern"	: "(だろうか|じゃねーか|じゃねーよ|かな|でしょうか)" + endsign,
		"option"	: "gm",
		"replace"	: "じゃなイカ$2"
	},
	{
		"id"		: "101",
		"pattern"	: "するか",
		"option"	: "gm",
		"replace"	: "するめイカ"
	},
	{
		"id"		: "102",
		"pattern"	: "じゃん" + endsign,
		"option"	: "gm",
		"replace"	: "じゃなイカ$1"
	},
	{
		"id"		: "200",
		"pattern"	: "ありません" + endsign,
		"option"	: "gm",
		"replace"	: "ないんじゃなイカ$1"
	},
	{
		"id"		: "200",
		"pattern"	: "しれません|しれない" + endsign,
		"option"	: "gm",
		"replace"	: "しれないんじゃなイカ$1"
	},
/*	{
		"id"		: "300",
		"pattern"	: "である",
		"option"	: "gm",
		"replace"	: "でゲソ"
	},*/
	{
		"id"		: "400",
		"pattern"	: "いか|以下|医科|異化|烏賊|医家|伊香",
		"option"	: "gm",
		"replace"	: "イカ"
	},
	/*	{
		"id"		: "500",
		"pattern"	: "(でした|だった)",
		"option"	: "gm",
		"replace"	: "$1ゲソ"
	},*/
	{
		"id"		: "600",
		"pattern"	: "ください" + endsign,
		"option"	: "gm",
		"replace"	: "くれでゲソ$1"
	},
	{
		"id"		: "700",
		"pattern"	: "します" + endsign,
		"option"	: "gm",
		"replace"	: "するでゲソ$1"
	},
	{
		/* 着せます: 着せるでゲソ */
		"id"		: "701",
		"pattern"	: "せます" + endsign,
		"option"	: "gm",
		"replace"	: "せるでゲソ$1"
	},
	{
		/* 思われます: 思われるでゲソ */
		"id"		: "702",
		"pattern"	: "れます" + endsign,
		"option"	: "gm",
		"replace"	: "れるでゲソ$1"
	},
	{
		/* ありました: なりましたでゲソ */
		"id"		: "703",
		"pattern"	: "ありました" + endsign,
		"option"	: "gm",
		"replace"	: "あったでゲソ$1"
	},


	{
		"id"		: "704",
		"pattern"	: "います" + endsign,
		"option"	: "gm",
		"replace"	: "いますでゲソ$1"
	},
	{
		"id"		: "800",
		"pattern"	: "(でき|出来)ます" + endsign,
		"option"	: "gm",
		"replace"	: "できるでゲソ$2"
	},
	{
		"id"		: "801",
		"pattern"	: "(あり|有り)ます" + endsign,
		"option"	: "gm",
		"replace"	: "あるでゲソ$2"
	},
	{
		"id"		: "900",
		"pattern"	: "あなた|あんた|貴方|貴女|キミ",
		"option"	: "gm",
		"replace"	: "おまえ"
	},
	{
		"id"		: "901",
		"pattern"	: "(で|ま)すね" + endsign,
		"option"	: "gm",
		"replace"	: "$1ゲソね$2"
	},
	{
		"id"		: "902",
		"pattern"	: "(だ)(ね|な)" + endsign,
		"option"	: "gm",
		"replace"	: "ゲソね$3"
	},
	{
		"id"		: "903",
		"pattern"	: "(だ|です)よね" + endsign,
		"option"	: "gm",
		"replace"	: "でゲソね$2"
	},
	{
		"id"		: "904",
		"pattern"	: "ですよ" + endsign,
		"option"	: "gm",
		"replace"	: "でゲソね$1"
	},

	{
		"id"		: "1000",
		"pattern"	: "(で)(す|ある)" + endsign,
		"option"	: "gm",
		"replace"	: "$1ゲソ$3"
	},
	{
		/* ないぞ: ないでゲソ
		   ですぞ: でゲソ */
		"id"		: "1001",
		"pattern"	: "(い|す)ぞ" + endsign,
		"option"	: "gm",
		"replace"	: "$1でゲソ$2"
	},
	{
		/* あるんだ: あるんでゲソ
		   あるのだぞ: あるのでゲソ */
		"id"		: "1002",
		"pattern"	: "(ん|の)(だ|だよ|だぞ)" + endsign,
		"option"	: "gm",
		"replace"	: "$1でゲソ$3"
	},

	{
		/* その他の文末 */
		"id"		: "1101",
		"pattern"	: "(ません|あり|なし|はず|かも|でも|だけ|こと|べし|べき|以上|万歳|方)" + endsign,
		"option"	: "gm",
		"replace"	: "$1でゲソ$2"
	},
	{
		/* 文末 (2) */
		"id"		: "1102",
		"pattern"	: "(だ|で|だろ)" + s_endsign,
		"option"	: "gm",
		"replace"	: "でゲソ$2"
	},
	{
		/* 文末 (3) */
		"id"		: "1200",
		"pattern"	: "でろ" + endsign,
		"option"	: "gm",
		"replace"	: "でるでゲソ$1"
	},
	{
		/* 連続する漢字で終わる文 */
		"id"		: "1300",
		"pattern"	: "([一-龠]{2,})" + s_endsign,
		"option"	: "gm",
		"replace"	: "$1でゲソ$2"
	},
	{
		/* 文末で */
		"id"		: "1500",
		"pattern"	: "(る|た|だ|す|い|う|く|つ|む|ぐ|ぶ|ふ|だけ|ぬ)" + s_endsign,
		"option"	: "gm",
		"replace"	: "$1でゲソ$2"
	}
];

var regexpCache = [];

$('#tweeting_button').mousedown(function(){
	var status = $("#status").val();
	var post = "";
	for(var i = 0; i < dictionaries.length; i++){
		var d = dictionaries[i];
		if(!(i in regexpCache)){
			regexpCache[i] = new RegExp(d.pattern, d.option);
		}
		var r = regexpCache[i];
		status = status.replace(r, d.replace);
	}
	$("#status").val(status);
});