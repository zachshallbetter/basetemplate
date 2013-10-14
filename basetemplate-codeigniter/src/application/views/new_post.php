<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CI Blog Posts</title>
  <meta name="description" content="CI Blog Posts">
</head>
<body>
<form action="<?=base_url()?>posts/new_post" method="post">
	<input type="text" name="title" placeholder="title">
	<input type="text" name="post" placeholder="description">
	<input type="submit" value="submit">
</form>
</body>
</html>