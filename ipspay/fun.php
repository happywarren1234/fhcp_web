<?php

	
	
	$con = mysql_connect("localhost","root","Tf0Tn1Ka5Ec3La0Lg9Qi0Gm5Ky6Cl2Rw");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }
	
	mysql_select_db("sscdc", $con);
	mysql_query("set names 'utf8'");
	
	//Change('987389','56');
	
	function Change($rid,$rmoney)
	{
		$addtime = time();
	 	$result2 = mysql_query("select * from blast_member_recharge where rechargeId='{$rid}' and state = 0 ");
		$row = mysql_fetch_array($result2);
		if($row['state']=='0')
		{      
	        mysql_query("update blast_members set coin=coin+{$rmoney} where  uid={$row['uid']}");
	        mysql_query("update blast_member_recharge set state='2',rechargeAmount={$rmoney},actionTime={$addtime} where  rechargeId='".$rid."'"); 
			$r  = mysql_query("select coin from blast_members where  uid={$row['uid']}");
			$rr = mysql_fetch_array($r);
			mysql_query("insert into blast_coin_log (`id`,`uid`,`type`,`playedId`,`coin`,`userCoin`,`fcoin`,`liqType`,`actionUID`,`actionTime`,`actionIP`,`info`,`extfield0`,`extfield1`,`extfield2`) values(null,'{$row['uid']}','0','0','{$rmoney}','{$rr['coin']}','0','1','0','".time()."','0','充值','258','{$rid}','0')");
        }
		
	}
	
	
	
	
	
?>