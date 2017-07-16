<?php
require_once('xingcai_sqlin.php');
$conf['debug']['level']=5;

/*		数据库配置		*/
$conf['db']['dsn']='mysql:host=127.0.0.1;dbname=sscdc;charset=utf8';
$dbname='sscdc';
$dbhost='127.0.0.1';
$conf['db']['user']='root';
$conf['db']['password']='root';
$conf['db']['charset']='utf8';
$conf['db']['prename']='blast_';

$conf['cache']['expire']=0;
$conf['cache']['dir']='_xingcai_buffer/';

$conf['url_modal']=2;

$conf['action']['template']='xingcai_Front/';
$conf['action']['modals']='xingcai_back/';

$conf['member']['sessionTime']=15*60;	// 用户有效时长
$conf['node']['access']='http://localhost:65531';	// node访问基本路径
error_reporting(1);                    //打印出所有的 错误信息


ini_set('display_errors',1);            //错误信息
ini_set('display_startup_errors',1);    //php启动错误信息

ini_set('date.timezone', 'PRC');


if(strtotime(date('Y-m-d',time()))>strtotime(date('Y-m-d',time()))){
	$GLOBALS['fromTime']=strtotime(date('Y-m-d',strtotime("-1 day")));
	$GLOBALS['toTime']=strtotime(date('Y-m-d',time()));
}else{
	
	$GLOBALS['fromTime']=strtotime(date('Y-m-d'));
	$GLOBALS['toTime']=strtotime(date('Y-m-d',strtotime("+1 day")));
}
?>
<?php
error_reporting(1);
$config = mysql_connect("127.0.0.1","root","root")or die("Mysql Connect Error");//设置数据库IP，账号，密码
mysql_select_db("sscdc");//数据库库名
mysql_query("SET NAMES UTF8");
?>