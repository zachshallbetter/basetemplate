<?php

class Post extends CI_model{
	
	function get_posts($num=20, $start=0){
		//This class ->db library-> select all from posts where they are active and order decending limiting the first result and getting 20.
		$this->db->select('*');
		$this->db->from('posts');
		$this->db->where('active', 1);
		$this->db->order_by('date_added','desc');
		$this->db->limit($num, $start);
		$query=$this->db->get();
		//run the query
		return $query->result_array();
		//return the results as an array
	}

	function get_post($postID) {
		$this->db->select();
		$this->db->from('posts');
		$this->db->where(array('active'=>1, 'id'=>$postID));
		$this->db->order_by('date_added','desc');
		$query=$this->db->get();
		return $query->first_row('array');
	}

	function insert_post($data) {
		$this->db->insert('posts',$data);
		return $this->db->insert_id();
	}

	function update_post($postID, $data) {
		$this->db->where('id', $postID);
		$this->db->update('posts', $data);
	}

	function delete_post($postID, $data) {
		$this->db->where('id', $postID);
		$this->db->delete('posts', $data);
	}
}