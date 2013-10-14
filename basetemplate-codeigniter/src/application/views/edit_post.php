<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CI Blog Posts</title>
  <meta name="description" content="CI Blog Posts">
</head>
<body>
	<?php if($success==1) { ?>
	<h2>This post has been updated</h2>
	<? } ?>

	<form action="<?=base_url()?>posts/edit_post/<?=$post['id']?>" method="post">
		<input type="text" name="title" placeholder="title">
		<input type="text" name="post" placeholder="description">
		<input type="submit" value="edit">
	</form>
</body>
</html>