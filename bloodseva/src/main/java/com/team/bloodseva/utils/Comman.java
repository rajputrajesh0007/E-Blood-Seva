package com.team.bloodseva.utils;

public class Comman {
	
	public static final String getDistrict(){
		return "SELECT district_code, district_name FROM district_master WHERE state_id = 27 ORDER BY squence;";
	}

	public static final String getTaluka(){
		return "SELECT taluka_code, taluka_name FROM taluka_master WHERE district_id = ?;";
	}
	
	public static final String getBloodGroup(){
		return "SELECT id, blood_group_name FROM blood_group_master ORDER BY squence;";
	}
	
	public static final String getRole(){
		return "SELECT id AS role_id, role_name FROM role_master WHERE id <> 5 ORDER BY squence;";
	}
	
	public static final String getBloodStock(){
		return "SELECT SUM(unit) AS unit, blood_group FROM blood_stocks GROUP BY blood_group;";
	}
	
	public static final String getSearch(){
		return "SELECT organization_name,bs.blood_group,unit FROM user_details b INNER JOIN blood_stocks bs ON  b.user_id = bs.user_id WHERE district_id = ? AND taluka_id = ? AND bs.blood_group = ?;";
	}

	public static final String getLogin() {
		return "SELECT * FROM users WHERE user_name = ? AND password = md5(?) AND status = 1;";
	}
	
	public static final String getRequestList(){
		return "SELECT ur.id AS request_id, ud.organization_name, ur.blood_group, ur.unit, CASE WHEN user_type = 1 THEN 'Donar' WHEN user_type = 2 THEN 'Seekar' ELSE '' END AS user_type, CASE WHEN status = 0 THEN 'Pending' WHEN status = 1 THEN 'Approved' WHEN status = 2 THEN 'Reject' ELSE '' END AS status FROM user_details ud INNER JOIN user_request ur ON ud.user_id = ur.to_blood_bank WHERE ur.user_id = ? AND ur.status = 0;";
	}
	
	public static final String getAllRequestList(){
		return "SELECT ur.id AS request_id, ud.full_name, ur.blood_group, ur.unit, CASE WHEN ur.is_recurring_request = 1 THEN 'No' ELSE 'Yes' END AS is_recurring_request, CASE WHEN user_type = 1 THEN 'Donar' WHEN user_type = 2 THEN 'Seekar' ELSE '' END AS user_type, CASE WHEN status = 0 THEN 'Pending' WHEN status = 1 THEN 'Approved' WHEN status = 2 THEN 'Reject' ELSE '' END AS status FROM user_details ud INNER JOIN user_request ur ON ud.user_id = ur.user_id WHERE to_blood_bank = ? AND ur.status = 0;";
	}
	
	public static final String getBloodBankList(){
		return "SELECT user_id, organization_name FROM user_details ud INNER JOIN users u ON u.id = ud.user_id WHERE u.role_id = 4;";
	}
	
	public static final String getAllStockList(){
		return "SELECT id, blood_group, unit FROM blood_stocks WHERE user_id = ?;";
	}
	
	public static final String getRequestHistoryList(){
		return "SELECT ur.id AS request_id, ud.organization_name, ur.blood_group, ur.unit, CASE WHEN user_type = 1 THEN 'Donar' WHEN user_type = 2 THEN 'Seekar' ELSE '' END AS user_type, CASE WHEN status = 0 THEN 'Pending' WHEN status = 1 THEN 'Approved' WHEN status = 2 THEN 'Reject' ELSE '' END AS status FROM user_details ud INNER JOIN user_request ur ON ud.user_id = ur.to_blood_bank WHERE ur.user_id = ? AND ur.status != 0;";
	}
	
	public static final String getAllRequestHistoryList(){
		return "SELECT ur.id AS request_id, ud.full_name, ur.blood_group, ur.unit, CASE WHEN ur.is_recurring_request = 1 THEN 'No' ELSE 'Yes' END AS is_recurring_request, CASE WHEN user_type = 1 THEN 'Donar' WHEN user_type = 2 THEN 'Seekar' ELSE '' END AS user_type, CASE WHEN status = 0 THEN 'Pending' WHEN status = 1 THEN 'Approved' WHEN status = 2 THEN 'Reject' ELSE '' END AS status FROM user_details ud INNER JOIN user_request ur ON ud.user_id = ur.user_id WHERE to_blood_bank = ? AND ur.status != 0;";
	}
	
	public static final String getCampaignRequestList(){
		return "SELECT cr.id,campaign_name,campaign_date,campaign_venue,unit, CASE WHEN status = 1 THEN 'Approved' WHEN status = 2 THEN 'Rejected' ELSE 'Pending' END AS status FROM user_details ud INNER JOIN campaign_request cr ON ud.user_id = cr.user_id WHERE cr.user_id = ? AND status = 0;";
	}
	
	public static final String getCampaignRequestHistoryList(){
		return "SELECT cr.id,campaign_name,campaign_date,campaign_venue,unit, CASE WHEN status = 1 THEN 'Approved' WHEN status = 2 THEN 'Rejected' ELSE 'Pending' END AS status FROM user_details ud INNER JOIN campaign_request cr ON ud.user_id = cr.user_id WHERE cr.user_id = ? AND status != 0;";
	}
	
	public static final String getAllCampaignRequestList(){
		return "SELECT cr.id,campaign_name,campaign_date,campaign_venue,unit ,CASE WHEN status = 1 THEN 'Approved' WHEN status = 2 THEN 'Rejected' ELSE 'Pending' END AS status FROM user_details ud INNER JOIN campaign_request cr ON ud.user_id = cr.to_blood_bank WHERE cr.to_blood_bank = ? AND status = 0;";
	}
	
	public static final String getAllCampaignRequestHistoryList(){
		return "SELECT cr.id,campaign_name,campaign_date,campaign_venue,unit ,CASE WHEN status = 1 THEN 'Approved' WHEN status = 2 THEN 'Rejected' ELSE 'Pending' END AS status FROM user_details ud INNER JOIN campaign_request cr ON ud.user_id = cr.to_blood_bank WHERE cr.to_blood_bank = ? AND status != 0;";
	}
	
	public static final String getAllRequestStatusList(){
		return "SELECT r.id, ud.organization_name, u.full_name, r.blood_group, r.unit, "
				+ "CASE WHEN r.status = 1 THEN 'Approved' WHEN r.status = 2 THEN 'Rejected' "
				+ "ELSE 'Pending' END AS status, CASE WHEN r.user_type = 1 THEN 'Donar'"
				+ " ELSE 'Seeker' END AS user_type, DATE(r.created_on) AS created_on "
				+ "FROM user_details u INNER JOIN user_request r ON u.user_id = r.user_id "
				+ "INNER JOIN user_details ud ON r.to_blood_bank = ud.user_id;";
	}
	
	public static final String getAllCampaignRequestStatusList(){
		return "SELECT c.id, ud.organization_name, u.full_name, c.campaign_name, c.campaign_date, c.campaign_venue, c.unit, CASE WHEN c.status = 1 THEN 'Approved' WHEN c.status = 2 THEN 'Rejected' ELSE 'Pending' END AS status, DATE(c.created_on) AS created_on FROM user_details u INNER JOIN campaign_request c ON u.user_id = c.user_id INNER JOIN user_details ud ON c.to_blood_bank = ud.user_id;";
	}
	
	public static final String getAllStockListBankWise(){
		return "SELECT u.id, organization_name, SUM(unit) AS unit FROM user_details u INNER JOIN blood_stocks b ON u.user_id = b.user_id GROUP BY 1;";
	}
}
