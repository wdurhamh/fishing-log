<?php
class Fishing_Log extends CI_Controller {
	public function __construct() {
		parent:: __construct();
		$this->load->model('fishing_log_model');
	}

	public function index() {
		$data['fishing'] = $this->fishing_log_model->get_fishing_sites();
		$data['title'] = "Super dope fishing log";
		
		$this->load->view('templates/header', $data);
		$this->load->view('fishing/index', $data);
		$this->load->view('templates/footer');
	}

	public function view($slug) {
		$data['fishing'] = $this->fishing_log_model->get_fishing_sites($slug);
	}
}

?>
