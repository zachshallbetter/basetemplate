<?php

class Home extends CI_Controller {

	function __construct() {
		parent::__construct();
		$this->load->model('home');
	}

	public function index()
	{
		$this->load->view('home');
	}
}

?>