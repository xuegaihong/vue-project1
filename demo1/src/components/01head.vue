<template>
	<div>
		
		<div class="head">
			
			<div class="logo"><img src="../img/logo.png" alt=""></div>
			<ul>
				
				<li><router-link to='/02inlinemarket'>在线商城 </router-link></li>
				<li><router-link to='/04jianguo'>坚果Pro&nbsp;2S</router-link></li>
				<li><router-link to='/05jianguo'>坚果&nbsp;R1</router-link></li>
				<li><router-link to='/06tnt'>坚果TNT工作站</router-link></li>
				<li><router-link to='/'>Smartisan&nbsp;OS</router-link></li>
				<li><router-link to='/'>欢喜云</router-link></li>
				<li><router-link to='/'>论坛</router-link></li>
				<li><router-link to='/'>荣誉与奖项</router-link></li>
			</ul>
			<div class="headright">
				<div class="bao"></div>
					<router-link to='./03login'><div class="person"></div></router-link>
			</div>
		</div>
		
		
		
	</div>
</template>

<script>
</script>

<style>
	
	.head{
		width: 100%;
		height: 46px;
		background-color: #292a2c;
	}
	.head ul{
		height: 46px;
		float: left;
		margin-left: 302px;
	}
	.head ul li a{
		color: white;
		font-size: 14px;
		line-height:46px;
		margin: 0 20px;
		opacity: 0.7;
	}
	.head ul li a:hover{
		opacity: 1;
	}
	.head ul li{
		float: left;
	}
	ul li:hover{
		color: white;
	}
	.logo {
		width: 20px;
		height: 20px;
		float: left;
		padding-top: 13px;
		padding-left: 20px;
		
	}
	.headright{
		float: right;
		margin-right: 25px;
		height: 20px;
	}
	.headright a{
		display:block;
		width: 20px;
		height: 18px;
		float: right;
	}
	.person,.bao{
		width: 20px;
		height: 18px;
		float: right;
		margin-top: 13px;
		background: url(../img/headerr.png) no-repeat ;
		transform:scale(0.8);
	}
	.person{
		margin-right: 22px;
		background-position:-8px -4px ;
	}
	.bao{
		background-position:-8px -40px ;
	}
	.person:hover,.bao:hover{
		opacity: 0.8 ;
	}
</style>
