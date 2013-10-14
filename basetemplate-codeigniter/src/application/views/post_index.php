<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CI Blog Posts</title>
  <meta name="description" content="CI Blog Posts">
</head>
<body>
  		<?php if(!isset($posts)){ ?>
	  		<p>No posts to load foo!</p>
	  	<?php } else { 
	  		foreach ($posts as $row){ ?>
	  			<article>		  	
					<h3><a href="<?=base_url()?>posts/post/<?=$row['id']?>"><?=$row['title']?></a> <a href="<?php echo base_url() ?>posts/edit_post/<?php echo $row['id']?>">Edit Post</a> | <a href="<?php echo base_url()?>posts/delete_post/<?php echo $row['id']?>">Delete Post</a></h3>
					<span class="date"><?=$row['date_added']?></span>
					<p class="post-exerpt"><?=substr(strip_tags($row['post']),0,200).".."?><p>
					<p class="more-link"><a href="<?=base_url()?>posts/post/<?=$row['id']?>">Read More</a></p>
				</article>
			<?php }
		}; ?>
</body>
</html>