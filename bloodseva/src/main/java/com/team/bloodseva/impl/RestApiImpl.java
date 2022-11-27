package com.team.bloodseva.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.WeakHashMap;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.team.bloodseva.dao.RestApiDao;
import com.team.bloodseva.modal.RequestModal;
import com.team.bloodseva.modal.UserModal;
import com.team.bloodseva.utils.Comman;
import com.team.bloodseva.utils.Constants;

@Repository
public class RestApiImpl extends JdbcDaoSupport implements RestApiDao {

	@Autowired
	DataSource dataSource;

	@PostConstruct
	private void initialize() {
		setDataSource(dataSource);
		System.out.println("in rest impl setDataSource ");
	}

	@Autowired
	private JdbcTemplate jdbcTemplate;
	@SuppressWarnings("rawtypes")
	private HashMap hm;
	@SuppressWarnings("rawtypes")
	private HashMap hm2;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getDistrict() {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getDistric ");
		try {
			String sql = Comman.getDistrict();
			Object[] args = new Object[] {};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("district_code", rs.getString("district_code"));
					hm.put("district_name", rs.getString("district_name"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getTaluka(int id) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getTaluka ");
		try {
			String sql = Comman.getTaluka();
			Object[] args = new Object[] { id };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("taluka_code", rs.getString("taluka_code"));
					hm.put("taluka_name", rs.getString("taluka_name"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getRole() {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getRole");
		try {
			String sql = Comman.getRole();
			Object[] args = new Object[] {};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("role_id", rs.getString("role_id"));
					hm.put("role_name", rs.getString("role_name"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getGender() {
		System.out.println("in rest impl getGender");
		ArrayList li = new ArrayList();
		hm = new HashMap<>();
		hm.put("id", 1);
		hm.put("name", "Select Gender");
		li.add(hm);
		hm = new HashMap<>();
		hm.put("id", 2);
		hm.put("name", "Male");
		li.add(hm);
		hm = new HashMap<>();
		hm.put("id", 3);
		hm.put("name", "Female");
		li.add(hm);
		hm = new HashMap<>();
		hm.put("id", 4);
		hm.put("name", "Other");
		li.add(hm);
		WeakHashMap resultMap = new WeakHashMap<>();
		resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
		resultMap.put(Constants.RESULTDETAILS_STRING, li);
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getBloodGrpup() {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getBloodGrpup");
		try {
			String sql = Comman.getBloodGroup();
			Object[] args = new Object[] {};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("blood_group_name", rs.getString("blood_group_name"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getBloodStock() {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getBloodstock");
		try {
			String sql = Comman.getBloodStock();
			Object[] args = new Object[] {};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("blood_group", rs.getString("blood_group"));
					hm.put("unit", rs.getString("unit"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				ArrayList li = new ArrayList<>();
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "AB-Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "AB+Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "A-Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "A+Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "B-Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "B+Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "Oh-Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "Oh+Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "O-Ve");
				li.add(hm2);
				hm2 = new HashMap<>();
				hm2.put("unit", "0");
				hm2.put("blood_group", "O+Ve");
				li.add(hm2);
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, li);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getSearch(UserModal userModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getsearch");
		try {
			String sql = Comman.getSearch();
			Object[] args = new Object[] { userModal.getDistrict_id(), userModal.getTaluka_id(),
					userModal.getBlood_group() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("organization_name", rs.getString("organization_name"));
					hm.put("blood_group", rs.getString("blood_group"));
					hm.put("unit", rs.getString("unit"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap addRequest(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap();
		System.out.println("in rest impl getBloodBankList");
		try {
			String sql = "INSERT INTO user_request (id,user_id,to_blood_bank,blood_group,unit,user_type,status,is_recurring_request,remark) VALUES (0,?,?,?,?,?,?,?,?);";
			Object[] args = new Object[] { requestModal.getUser_id(), requestModal.getBlood_bank_id(),
					requestModal.getBlood_group(), requestModal.getUnit(), requestModal.getUser_type(),
					requestModal.getStatus(), requestModal.getIs_recurring_request(), requestModal.getRemark() };
			int row = jdbcTemplate.update(sql, args);
			if (row > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Request added successfully");
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Failed to add request, Please try after some time.");
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getRequestList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getrequestlist");
		try {
			String sql = Comman.getRequestList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("request_id", rs.getString("request_id"));
					hm.put("organization_name", rs.getString("organization_name"));
					hm.put("blood_group", rs.getString("blood_group"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					hm.put("user_type", rs.getString("user_type"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap updateRequest(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap();
		System.out.println("in rest impl updateRequest");
		try {
			String sql = "UPDATE user_request SET status = ? WHERE id = ?;";
			Object[] args = new Object[] { requestModal.getStatus(), requestModal.getId() };
			int row = jdbcTemplate.update(sql, args);
			if (row > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Request updated successfully");
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Failed to update request, Please try after some time.");
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getAllRequestList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getAllRequestList");
		try {
			String sql = Comman.getAllRequestList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("request_id", rs.getString("request_id"));
					hm.put("full_name", rs.getString("full_name"));
					hm.put("blood_group", rs.getString("blood_group"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					hm.put("is_recurring_request", rs.getString("is_recurring_request"));
					hm.put("user_type", rs.getString("user_type"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getBloodBankList() {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getBloodBankList");
		try {
			String sql = Comman.getBloodBankList();
			Object[] args = new Object[] {};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("user_id", rs.getString("user_id"));
					hm.put("organization_name", rs.getString("organization_name"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap updateStock(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap();
		System.out.println("in rest impl updateStock");
		try {
			String sql = "UPDATE blood_stocks SET unit = ? WHERE id = ?";
			Object[] args = new Object[] { requestModal.getUnit(), requestModal.getId() };
			int row = jdbcTemplate.update(sql, args);
			if (row > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Stock updated successfully");
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Failed to update stock, Please try after some time.");
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getAllStockList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getAllStockList");
		try {
			String sql = Comman.getAllStockList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("blood_group", rs.getString("blood_group"));
					hm.put("unit", rs.getString("unit"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getRequestHistoryList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getRequestHistoryList");
		try {
			String sql = Comman.getRequestHistoryList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					
					HashMap<String, String> hm = new HashMap();
					hm.put("request_id", rs.getString("request_id"));
					hm.put("organization_name", rs.getString("organization_name"));
					hm.put("blood_group", rs.getString("blood_group"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					hm.put("user_type", rs.getString("user_type"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getAllRequestHistoryList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getAllRequestHistoryList");
		try {
			String sql = Comman.getAllRequestHistoryList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("request_id", rs.getString("request_id"));
					hm.put("full_name", rs.getString("full_name"));
					hm.put("blood_group", rs.getString("blood_group"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					hm.put("is_recurring_request", rs.getString("is_recurring_request"));
					hm.put("user_type", rs.getString("user_type"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap addCampaignRequest(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap();
		System.out.println("in rest impl addCampaignRequest");
		try {
			String sql = "INSERT INTO campaign_request (id,user_id,to_blood_bank,campaign_name,campaign_date,campaign_venue,unit,status) VALUES (0,?,?,?,?,?,?,?);";
			Object[] args = new Object[] { requestModal.getUser_id(), requestModal.getBlood_bank_id(),
					requestModal.getCampaign_name(), requestModal.getCampaign_date(), requestModal.getCampaign_venue(),
					requestModal.getStatus(), requestModal.getStatus() };
			int row = jdbcTemplate.update(sql, args);
			if (row > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Campaign Request added successfully");
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING,
						"Failed to add campaign request, Please try after some time.");
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap updateCampaignRequest(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap();
		System.out.println("in rest impl updateCampaignRequest");
		try {
			String sql = "UPDATE campaign_request SET status = ? WHERE id = ?";
			Object[] args = new Object[] { requestModal.getStatus(), requestModal.getId() };
			int row = jdbcTemplate.update(sql, args);
			if (row > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Campaign request updated successfully");
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING,
						"Failed to update campaign request, Please try after some time.");
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getCampaignRequestList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getCampaignRequestList");
		try {
			String sql = Comman.getCampaignRequestList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("campaign_name", rs.getString("campaign_name"));
					hm.put("campaign_date", rs.getString("campaign_date"));
					hm.put("campaign_venue", rs.getString("campaign_venue"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getCampaignRequestHistoryList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getCampaignRequestHistoryList");
		try {
			String sql = Comman.getCampaignRequestHistoryList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("campaign_name", rs.getString("campaign_name"));
					hm.put("campaign_date", rs.getString("campaign_date"));
					hm.put("campaign_venue", rs.getString("campaign_venue"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getAllCampaignRequestList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getAllCampaignRequestList");
		try {
			String sql = Comman.getAllCampaignRequestList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("campaign_name", rs.getString("campaign_name"));
					hm.put("campaign_date", rs.getString("campaign_date"));
					hm.put("campaign_venue", rs.getString("campaign_venue"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getAllCampaignRequestHistoryList(RequestModal requestModal) {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getAllCampaignRequestHistoryList");
		try {
			String sql = Comman.getAllCampaignRequestHistoryList();
			Object[] args = new Object[] { requestModal.getUser_id() };
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("campaign_name", rs.getString("campaign_name"));
					hm.put("campaign_date", rs.getString("campaign_date"));
					hm.put("campaign_venue", rs.getString("campaign_venue"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getAllRequestStatusList() {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getAllRequestStatusList");
		try {
			String sql = Comman.getAllRequestStatusList();
			Object[] args = new Object[] {};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("organization_name", rs.getString("organization_name"));
					hm.put("full_name", rs.getString("full_name"));
					hm.put("blood_group", rs.getString("blood_group"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					hm.put("user_type", rs.getString("user_type"));
					hm.put("created_on", rs.getString("created_on"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getAllCampaignRequestStatusList() {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getAllCampaignRequestStatusList");
		try {
			String sql = Comman.getAllCampaignRequestStatusList();
			Object[] args = new Object[] {};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("organization_name", rs.getString("organization_name"));
					hm.put("full_name", rs.getString("full_name"));
					hm.put("campaign_name", rs.getString("campaign_name"));
					hm.put("campaign_date", rs.getString("campaign_date"));
					hm.put("campaign_venue", rs.getString("campaign_venue"));
					hm.put("unit", rs.getString("unit"));
					hm.put("status", rs.getString("status"));
					hm.put("created_on", rs.getString("created_on"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap getAllStockListBankWise() {
		WeakHashMap resultMap = new WeakHashMap<>();
		System.out.println("in rest impl getAllStockListBankWise");
		try {
			String sql = Comman.getAllStockListBankWise();
			Object[] args = new Object[] {};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("id", rs.getString("id"));
					hm.put("organization_name", rs.getString("organization_name"));
					hm.put("unit", rs.getString("unit"));
					return hm;
				}
			});
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}
}
