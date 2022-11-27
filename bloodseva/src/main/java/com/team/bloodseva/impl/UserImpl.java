package com.team.bloodseva.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.WeakHashMap;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.mysql.jdbc.Statement;
import com.team.bloodseva.dao.UserDao;
import com.team.bloodseva.modal.UserModal;
import com.team.bloodseva.utils.Comman;
import com.team.bloodseva.utils.Constants;

@Repository
public class UserImpl extends JdbcDaoSupport implements UserDao{

	@Autowired
	DataSource dataSource;

	@PostConstruct
	private void initialize() {
		System.out.println("in rest impl initialize");
		setDataSource(dataSource);
	}

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap registerUser(UserModal userModal) {
		WeakHashMap resultMap = new WeakHashMap();
		String sql = "INSERT INTO users (id,user_name,password,role_id) VALUES (0,?,md5(?),?);";
		System.out.println("in rest impl registerUser");
		try {
			KeyHolder holder = new GeneratedKeyHolder();
			int row = jdbcTemplate.update(new PreparedStatementCreator() {
				@Override
				public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
					PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
					ps.setString(1, userModal.getUser_name());
					ps.setString(2, userModal.getPassword()); 
					ps.setInt(3,userModal.getRole());
					return ps;
				}
			}, holder);
			
			Long newUserId = holder.getKey().longValue();
			String query = "INSERT INTO user_details(id,user_id,full_name,organization_name,mobile_no,email_id,blood_group,user_age,gender,district_id,taluka_id,address) VALUES (0,?,?,?,?,?,?,?,?,?,?,?);";
			
			Object[] args = new Object[] {newUserId,userModal.getFull_name(),userModal.getOrganization_name(),userModal.getMobile_no(),userModal.getEmail_id(),
					userModal.getBlood_group(),userModal.getUser_age(),userModal.getGender(),userModal.getDistrict_id(), userModal.getTaluka_id(), userModal.getAddress()};
			jdbcTemplate.update(query, args);
			if (row > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, "User added successfully");
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Failed to add user, Please try after some time.");
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public WeakHashMap loginUser(UserModal userModal) {
		WeakHashMap resultMap = new WeakHashMap();
		System.out.println("in rest impl loginUser");
		try {
			String sql = Comman.getLogin();
			Object[] args = new Object[] {userModal.getUser_name(), userModal.getPassword()};
			List rows = (List) jdbcTemplate.query(sql, args, new RowMapper<HashMap>() {
				@Override
				public HashMap mapRow(ResultSet rs, int rowNum) throws SQLException {
					HashMap<String, String> hm = new HashMap();
					hm.put("user_id", rs.getString("id"));
					hm.put("role_id", rs.getString("role_id"));
					return hm;
				}
			}); 
			if (rows.size() > 0) {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.SUCCESS);
				resultMap.put(Constants.RESULTDETAILS_STRING, rows);
			} else {
				resultMap.put(Constants.RESULTCODE_STRING, Constants.ERROR);
				resultMap.put(Constants.RESULTDETAILS_STRING, "Failed to login, Please try after some time.");
			}
		} catch (Exception e) {
			resultMap.put(Constants.RESULTCODE_STRING, Constants.DB_ERROR);
			resultMap.put(Constants.RESULTDETAILS_STRING, "Database error : " + e.toString());
		}
		return resultMap;
	}

}
