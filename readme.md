##The Url to be used to post request to :


https://dtplus-cn-shanghai.data.aliyuncs.com/dt_ng_1162503409822049/pai/prediction/projects/minst/onlinemodels/xlab_m_random_forests__731816_v0

LTAIwJ7fC0HEEbhx

h8kXisXjdTt6fuWmjxSpiDV5s5kKWU


帮助: https://help.aliyun.com/document_detail/45395.html
预测服务endpoint: http://prediction.odps.aliyun.com
部署project: minst
在线模型名称: xlab_m_random_forests__731816_v0
接口方式: Restful Api支持Json和Protobuf
返回格式: JSON/XML

接口样例:
POST	https://dtplus-cn-shanghai.data.aliyuncs.com/dataplus_1162503409822049/pai/prediction/projects/minst/onlinemodels/xlab_m_random_forests__731816_v0	HTTP/1.1
Authorization:	ODPS
AccessId:AccessKey
Date:	Tue,	31	Mar	2015	06:32:27	GMT
Content-Type:	application/json
Host:	10.97.180.57
Content-Length:	1311
Connection:	Keep-Alive
{
	"inputs":	[
		{
			"f6":	{
				"dataType":	40,
				"dataValue":	0.1036
			},
			"f31":	{
				"dataType":	40,
				"dataValue":	5
			},
			"f4":	{
				"dataType":	40,
				"dataValue":	1013
				},
		}
	]
}