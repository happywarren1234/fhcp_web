<?php

		$pVersion = 'v1.0.0';//版本号
		$pMerCode = '185689';//商户号
		$pMerName = '';//商户名
		$pMerCert = 'uLsLnQ9N0kbn2aoHFRtb76WcEYZw5OuL8onCQty7s6uY3MEZHssDZHsctKKPrM77GWWZb5PaX80eVCu6SGB6xmPEEuywP6zlukuWWGOdqAgsS0URZUrjhPWFf8VRtVbg';//商户证书
		$pAccount  = '1856890015';//账户号
		$pMsgId = "msg".rand(1000,9999);;//消息编号
		$pReqDate = date("Ymdhis");//商户请求时间

		$pMerBillNo = $_GET['rid']."A".date("Ymdhis").rand(1000,9999);//商户订单号
		$pAmount = $_GET['v_amount'];//订单金额 
	 
		$pDate = date("Ymd");//订单日期
		$pCurrencyType = 'GB';//币种
		$pGatewayType = '01';//支付方式
		$pLang = '156';//语言
		$pMerchanturl = 'http://'.$_SERVER['HTTP_HOST'].'/result.php';//支付结果成功返回的商户URL 
		$pFailUrl = "";//支付结果失败返回的商户URL 
		$pAttach = $_GET['rid'];//商户数据包
		$pOrderEncodeTyp = '5';//订单支付接口加密方式 默认为5#md5
		$pRetEncodeType = '17';//交易返回接口加密方式
		$pRetType = '1';//返回方式 
		$pServerUrl = 'http://'.$_SERVER['HTTP_HOST'].'/result.php';//Server to Server返回页面 
		$pBillEXP = 1;//订单有效期(过期时间设置为1小时)
		$pGoodsName =$pMerBillNo  ;//商品名称
		$pIsCredit = 0;//直连选项
		$pBankCode = $_POST['paytype'];//银行号
		$pProductType= '1';//产品类型
		 if($pIsCredit==0)
		 {
			 $pBankCode="";
			 $pProductType='';
		 }

		 //请求报文的消息体
		  $strbodyxml= "<body>"
					 ."<MerBillNo>".$pMerBillNo."</MerBillNo>"
					 ."<Amount>".$pAmount."</Amount>"
					 ."<Date>".$pDate."</Date>"
					 ."<CurrencyType>".$pCurrencyType."</CurrencyType>"
					 ."<GatewayType>".$pGatewayType."</GatewayType>"
						 ."<Lang>".$pLang."</Lang>"
					 ."<Merchanturl>".$pMerchanturl."</Merchanturl>"
					 ."<FailUrl>".$pFailUrl."</FailUrl>"
						 ."<Attach>".$pAttach."</Attach>"
						 ."<OrderEncodeType>".$pOrderEncodeTyp."</OrderEncodeType>"
						 ."<RetEncodeType>".$pRetEncodeType."</RetEncodeType>"
						 ."<RetType>".$pRetType."</RetType>"
						 ."<ServerUrl>".$pServerUrl."</ServerUrl>"
						 ."<BillEXP>".$pBillEXP."</BillEXP>"
						 ."<GoodsName>".$pGoodsName."</GoodsName>"
						 ."<IsCredit>".$pIsCredit."</IsCredit>"
						 ."<BankCode>".$pBankCode."</BankCode>"
						 ."<ProductType>".$pProductType."</ProductType>"
				  ."</body>";
		  
		  $Sign=$strbodyxml.$pMerCode.$pMerCert;//签名明文
		  //file_put_contents(PATH_LOG_FILE,date('y-m-d h:i:s').'签名明文:'.$Sign."\r\n",FILE_APPEND);
		  
		  $pSignature = md5($strbodyxml.$pMerCode.$pMerCert);//数字签名 
		  //请求报文的消息头
		  $strheaderxml= "<head>"
						   ."<Version>".$pVersion."</Version>"
						   ."<MerCode>".$pMerCode."</MerCode>"
						   ."<MerName>".$pMerName."</MerName>"
						   ."<Account>".$pAccount."</Account>"
						   ."<MsgId>".$pMsgId."</MsgId>"
						   ."<ReqDate>".$pReqDate."</ReqDate>"
						   ."<Signature>".$pSignature."</Signature>"
					  ."</head>";
		 
		//提交给网关的报文
		$strsubmitxml =  "<Ips>"
					  ."<GateWayReq>"
					  .$strheaderxml
					  .$strbodyxml
				  ."</GateWayReq>"
					."</Ips>";

		//提交给网关明文
		 //file_put_contents(PATH_LOG_FILE,date('y-m-d h:i:s').'提交给网关明文:'.$strsubmitxml."\r\n",FILE_APPEND);
		 
		$payLinks = '<form style="text-align:center;" action="http://newpay.ips.com.cn/psfp-entry/gateway/payment.html" target="_self" style="margin:0px;padding:0px" method="post" name="ips" >';

        $payLinks  .= "<input type='hidden' name='pGateWayReq' value='$strsubmitxml' />";
       
		$payLinks .= "</form><script>document.ips.submit();</script>";
       
		echo $payLinks;



?>