// talkArray		课程中对应的额外的对话数组
// questionJump		课程中对应的问题跳转到指定问题和对话数组
// questionnaire	课程最后的问卷
const ksjlbkp = {
	"questionnaire": {
		"id": 1,
		"bigtitle": "考试焦虑自评量表",
		"title": "本测试共有33道题，每道题有四个备选答案，请根据自己最符合的情况，给每道题目一个评分，并将评分填入相应的括号里。<br/>0-很不符合    1-较不符合    2-比较符合    3-很符合",
		"questions": [
			{
				"id": 1,
				"content": "在重要的考试前几天，我就坐立不安了。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 2,
				"content": "临近考试时，我就泻肚子了。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 3,
				"content": "一想到考试即将来临，身体就会发僵。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 4,
				"content": "考试前，我总感到苦恼。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 5,
				"content": "考试前，我感到烦躁，脾气变坏。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 6,
				"content": "紧张的温课期间，常会想到：“这次考试要是得到个坏分数怎么办？”",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 7,
				"content": "临近考试，我的注意力越难集中。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 8,
				"content": "想到马上就要考试了，参加任何文娱活动都感到没劲。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 9,
				"content": "在考试前，我总预感到这次考试将要考坏。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 10,
				"content": "在考试前，我常做关于考试的梦。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 11,
				"content": "到了考试那天，我就不安起来。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 12,
				"content": "听到开始考试的铃声响了，我的心马上紧张地急跳起来。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 13,
				"content": "一到重要的考试，我的脑子就变得比平时迟钝。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 14,
				"content": "考试题目越多、越难，我越感到不安。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 15,
				"content": "考试中，我的手会变得冰凉。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 16,
				"content": "考试时，我感到十分紧张。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 17,
				"content": "遇到很难的考试，我就担心自己会不及格。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 18,
				"content": "紧张的考试中，我却会想些与考试无关的事情，注意力集中不起来。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 19,
				"content": "考试时，我会紧张得连平时记得滚瓜烂熟的知识一点也回忆不起来。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 20,
				"content": "在考试中，我会沉浸在空想之中，一时忘了自己是在考试。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 21,
				"content": "考试中，我想上厕所的次数比平时多些。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 22,
				"content": "考试时，即使不热，我也会浑身出汗。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 23,
				"content": "在考试时，我紧张得手发僵，写字不流畅。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 24,
				"content": "考试时，我经常会看错题目。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 25,
				"content": "在进行重要的考试时，我的头就会痛起来。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 26,
				"content": "发现剩下的时间来不及做完全部考题，我就急得手足无措、浑身大汗。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 27,
				"content": "如果我考了个坏分数，家长或教师会严厉地指责我。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 28,
				"content": "考试后，发现自己懂得的题没有答对时，就十分生自己的气。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 29,
				"content": "有几次在重要的考试之后，我腹泻了。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 30,
				"content": "我对考试十分厌烦。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 31,
				"content": "只要考试不计成绩，我就会喜欢考试。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 32,
				"content": "考试不应当像在这样的紧张状态下进行。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
			{
				"id": 33,
				"content": "如不进行考试，我能学到更多的知识。",
				"answers": [
					{
						"id": "1",
						"answerOption": "0",
						"answerContent": "很不符合",
						"value": "0"
					},
					{
						"id": "2",
						"answerOption": "1",
						"answerContent": "较不符合",
						"value": "1"
					},
					{
						"id": "3",
						"answerOption": "2",
						"answerContent": "比较符合",
						"value": "2"
					},
					{
						"id": "4",
						"answerOption": "3",
						"answerContent": "很符合",
						"value": "3"
					}
				]
			},
		]
	},
	"result": "<p><b>计分与评价：<br/>总得分是33个项目得分之和，根据你的总得分，查下面的评价表，就可以知道你的考试焦虑水平。</b></p><p>0—24：镇定。你总是以较为轻松的方式对待考试，只有在特别重要的考试前你才会有些激动。但是如果得分少于10分，则说明你对考试不在乎，学习动机较低。</p><p>25—49：适度焦虑。你面对考试时有些激动，有时会有点紧张和不安。这时你的脑细胞被充分调动起来了，这种程度的焦虑有助于考试的超常发挥。只是不要让焦虑持续太久。</p><p>50—74：中度焦虑。你面对考试比较紧张，这种焦虑如不及时调整，会导致你无法静心复习，考试时还会影响你的发挥。</p>"
}

const specialHandleData = {
	"25": {
		"talkArray": [
			{
				"id": 1,
				"talks": [
					'（主角）着急地反驳：“小星，你你你狗咬吕洞宾，不识好人心，我好心提醒你，你反倒说我害你，你真是不可理喻。”',
					'小星与（主角）在教室中推搡起来，“嘭”的一声，（主角）放在桌边的美国队长文具盒摔在地上，文具盒分成两半，里面的铅笔、橡皮擦、转笔刀都散了出来。',
					'小星目瞪口呆，（主角）则十分愤怒。',
					'（主角）气愤地指责小星说：“你这人怎么这样啊，我好心提醒你，你却把我的文具盒摔坏了，真是好心没好报，我再也不跟你玩了！”'
				],
				"duration": 6000,
				"showTime": 100
			},
			{
				"id": 2,
				"talks": [
					'（主角）在教室门口遇到了广广。',
					'（主角）：“广广，你帮我去跟小星说，汪老师找他去办公室。”'
				],
				"duration": 4000,
				"showTime": 109.56
			},
			{
				"id": 3,
				"talks": [
					'（主角）：“还不是因为他上课吃面包的事情，我们俩吵了一架。”'
				],
				"duration": 4000,
				"showTime": 117.48
			},
			{
				"id": 4,
				"talks": [
					'（主角）：“广广还是你去帮我告诉小星吧，我就不去了。谢谢你！”'
				],
				"duration": 4000,
				"showTime": 130.32//129.72
			},
			{
				"id": 5,
				"talks": [
					'（主角）：“小星，我也有要跟你道歉的地方，前天你心情不好，我不应该跟你争吵，我也应该更宽容一点，谢谢你买的新文具盒！”'
				],
				"duration": 6000,
				"showTime": 165.8//165.3
			},
			{
				"id": 6,
				"talks": [
					'接下来几天你和小星都在冷战。'
				],
				"fail": true,
				"duration": 4000,
				"showTime": 174
			}
		],
		"questionJump": [
			{
				"answerId": 140,
				"questionIndex": 6,//序号-1 从0开始 如问题7，则序号为7-1=6
			},
			{
				"answerId": 141,
				"questionIndex": 4,
				"talkIndex": 1
			},
			{
				"answerId": 142,
				"questionIndex": 5
			},
			{
				"answerId": 143,
				"questionIndex": 6,
			},
			{
				"answerId": 144,
				"questionIndex": 6,
				"talkIndex": 3
			},
			{
				"answerId": 145,
				"talkIndex": 5
			},
			{
				"answerId": 146,
				"questionIndex": 6,
			},
			{
				"answerId": 147,
				"talkIndex": 5
			},
			{
				"answerId": 148,
				"talkIndex": 5
			},
			{
				"answerId": 149,
				"talkIndex": 4
			},
			{
				"answerId": 150,
				"talkIndex": 4
			},
			{
				"answerId": 151,
				"talkIndex": 4
			}
		]
	},
	"27":{
		"talkArray": [
			{
				"id": 1,
				"talks": [
					'（主角）：老师，一亿可不可以读成一万万'
				],
				"duration": 4000,
				"showTime": 205.16
			},
			{
				"id": 2,
				"talks": [
					'（主角）：谢谢大家，放心吧，我一定会坚持多思考、多提问。'
				],
				"duration": 4000,
				"showTime": 238.16
			}
		]
	},
	"28":{
		"questionnaire": {
			"id": 1,
			"title": "如果今天回家后你有2个小时完成自己的家庭作业，任务包括1篇日记，10个单词的背诵和5道应用题，你还想看一会儿动画片，你会怎么安排自己的时间呢？",
			"questions": [
				{
					"id": 1,
					"content": "5道应用题（）",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "10分钟",
							"value": "10"
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "25分钟",
							"value": "25"
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "30分钟",
							"value": "30"
						},
						{
							"id": "4",
							"answerOption": "D",
							"answerContent": "45分钟",
							"value": "45"
						}
					]
				},
				{
					"id": 2,
					"content": "休息（）",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "10分钟",
							"value": "10"
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "25分钟",
							"value": "25"
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "30分钟",
							"value": "30"
						},
						{
							"id": "4",
							"answerOption": "D",
							"answerContent": "45分钟",
							"value": "45"
						}
					]
				},
				{
					"id": 3,
					"content": "10个单词（）",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "10分钟",
							"value": "10"
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "25分钟",
							"value": "25"
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "30分钟",
							"value": "30"
						},
						{
							"id": "4",
							"answerOption": "D",
							"answerContent": "45分钟",
							"value": "45"
						}
					]
				},
				{
					"id": 4,
					"content": "休息（）",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "10分钟",
							"value": "10"
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "25分钟",
							"value": "25"
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "30分钟",
							"value": "30"
						},
						{
							"id": "4",
							"answerOption": "D",
							"answerContent": "45分钟",
							"value": "45"
						}
					]
				},
				{
					"id": 5,
					"content": "1篇日记（）",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "10分钟",
							"value": "10"
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "25分钟",
							"value": "25"
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "30分钟",
							"value": "30"
						},
						{
							"id": "4",
							"answerOption": "D",
							"answerContent": "45分钟",
							"value": "45"
						}
					]
				}
			]
		}
	},
	"29":{
		"talkArray": [
			{
				"id": 1,
				"talks": [
					'（主角）：小星你也早啊！'
				],
				"duration": 4000,
				"showTime": 16.08,// 16.28
			},
			{
				"id": 2,
				"talks": [
					'（主角）：雅雅早上好！'
				],
				"duration": 4000,
				"showTime": 21.2  //22.12，21.5
			},
			{
				"id": 3,
				"talks": [
					'（主角）：小玉，你的声音真好听，以后说话也像朗诵的时候大一点声音会很棒哦！'
				],
				"duration": 4000,
				"showTime": 199.64
			}
		]
	},
	"31":{
		"questionJump": [
			{
				"answerId": 194,
				"questionIndex": 1,
				"nextQuestionIndex": 4,
				"isNext": true,
			},
			{
				"answerId": 195,
				"questionIndex": 2,
				"nextQuestionIndex": 4,
				"isNext": true,
			},
			{
				"answerId": 196,
				"questionIndex": 3,
				"nextQuestionIndex": 4,
				"isNext": true,
			},
			{
				"answerId": 207,
				"questionIndex": 5,
				"isNext": true,
			}
		]
	},
	"32":{
		"0":{
			"questionImage":"/course/static/img/32/pic01.png"
		},
		"questionJump": [
			{
				"answerId": 513,
				"questionIndex": 2
			},
			{
				"answerId": 515,
				"questionIndex": 1
			},
			{
				"answerId": 516,
				"questionIndex": 3
			},
			{
				"answerId": 222,
				"questionIndex": 0,
				"fail": true,
			}
		],
		"specialHandleQuestion":{
			"id": "3201",
			"content": "如果你是小玉，你该怎么选择？",
			"showTime": 119.8,
			"answers": [
				{
					"id": "32011",
					"answerContent": "薯片",
					"img_url": "/course/static/img/32/food01.png",
					"value": 1, //value  0代表食物， 1代表零食
					"checked": false,
				},
				{
					"id": "32012",
					"answerContent": "矿泉水",
					"img_url": "/course/static/img/32/food02.png",
					"value": 0, //value  0代表食物， 1代表零食
					"checked": false,
				},
				{
					"id": "32013",
					"answerContent": "干脆面",
					"img_url": "/course/static/img/32/food03.png",
					"value": 1, //value  0代表食物， 1代表零食
					"checked": false,
				},
				{
					"id": "32014",
					"answerContent": "辣条",
					"img_url": "/course/static/img/32/food04.png",
					"value": 1, //value  0代表食物， 1代表零食
					"checked": false,
				},
				{
					"id": "32015",
					"answerContent": "牛肉粒",
					"img_url": "/course/static/img/32/food05.png",
					"value": 1 //value  0代表食物， 1代表零食
				},
				{
					"id": "32016",
					"answerContent": "威化饼干",
					"img_url": "/course/static/img/32/food06.png",
					"value": 1, //value  0代表食物， 1代表零食
					"checked": false,
				},
				{
					"id": "32017",
					"answerContent": "方便米饭",
					"img_url": "/course/static/img/32/food07.png",
					"value": 0, //value  0代表食物， 1代表零食
					"checked": false,
				},
				{
					"id": "32018",
					"answerContent": "话梅糖",
					"img_url": "/course/static/img/32/food08.png",
					"value": 1, //value  0代表食物， 1代表零食
					"checked": false,
				},
				{
					"id": "32019",
					"answerContent": "面包",
					"img_url": "/course/static/img/32/food09.png",
					"value": 0, //value  0代表食物， 1代表零食
					"checked": false,
				}
			]
		},
		"questionnaire": {
			"id": 1,
			"title": "",
			"questions": [
				{
					"id": 1,
					"content": "你的零花钱主要花在哪里？",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "学习用品",
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "零食",
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "休闲娱乐",
						},
						{
							"id": "4",
							"answerOption": "D",
							"answerContent": "其他",
						}
					]
				},
				{
					"id": 2,
					"content": "你的零花钱是否有记账？",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "有",
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "没有",
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "偶尔有",
						},
					]
				},
				{
					"id": 3,
					"content": "你认为记账有必要吗？",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "有必要",
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "没必要",
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "无所谓",
						},
					]
				},
				{
					"id": 4,
					"content": "如果父母忘记给你零花钱，你会？",
					"answers": [
						{
							"id": "1",
							"answerOption": "A",
							"answerContent": "大发脾气",
						},
						{
							"id": "2",
							"answerOption": "B",
							"answerContent": "心平气和地向父母索要",
						},
						{
							"id": "3",
							"answerOption": "C",
							"answerContent": "不消费",
						},
						{
							"id": "4",
							"answerOption": "D",
							"answerContent": "其他",
						}
					]
				},
			]
		}
	},
	"59":{
		"questionJump": [
			{
				"answerId": 395,
				"questionIndex": 3
			}
		]
	},
	"69": ksjlbkp,
	"70": ksjlbkp,	
	"75":{
		"1":{//问题序号
			"answerImage":{
				"507": "/course/static/img/75/pic_video_01.png",
				"508": "/course/static/img/75/pic_video_02.png",
				"509": "/course/static/img/75/pic_video_03.png",
				"510": "/course/static/img/75/pic_video_04.png",
				"511": "/course/static/img/75/pic_video_05.png",
				"512": "/course/static/img/75/pic_video_06.png"
			}
		}
	}
}

export default specialHandleData;