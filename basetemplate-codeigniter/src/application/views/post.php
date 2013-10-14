<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CI Blog Posts</title>
  <meta name="description" content="CI Blog Posts">
</head>
<body>
	base post
	<?php if(!isset($post)) { ?>
		<p>This page was accessed incorrectly</p>
	<? } else { ?>
	<h2><?=$post['title']?></h2>
	<?=$post['post']?>
	<? } ?>
</body>
</html>