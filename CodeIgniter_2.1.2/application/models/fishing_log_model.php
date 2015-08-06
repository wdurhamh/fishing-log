<?php

class fishing_log_model extends CI_Model  {

	public function __construct()
	{
		$this->load->database();
	}

	public functoin get_fishing_sites($slug = FALSE) {
		if($slug === FALSE) {
			$query = $this->db->get('fishing_site');
			return $query->result_array();
		}

		$query = $this->db->get_where('fishing_site', array('slug' => $slug));
		$return $query->row_array();
	}
}
?>
