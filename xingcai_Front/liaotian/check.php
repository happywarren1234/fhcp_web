<?php
error_reporting(1);
isset($_COOKIE['nc'])?$nc = $_COOKIE['nc']:$nc = null;
if($nc==null){
    echo "nocookie";
}else{
    echo $nc;
}
?>