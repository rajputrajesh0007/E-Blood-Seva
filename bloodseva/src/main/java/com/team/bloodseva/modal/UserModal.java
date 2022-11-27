package com.team.bloodseva.modal;

public class UserModal {
	private String user_name;
	private String password;
	private String full_name;
	private String organization_name;
	private String email_id;
	private String mobile_no;
	private String blood_group;
	private String address;
	private String gender;
	private int id;
	private int district_id;
	private int taluka_id;
	private int role;
	private int user_age;
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFull_name() {
		return full_name;
	}
	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}
	public String getOrganization_name() {
		return organization_name;
	}
	public void setOrganization_name(String organization_name) {
		this.organization_name = organization_name;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getMobile_no() {
		return mobile_no;
	}
	public void setMobile_no(String mobile_no) {
		this.mobile_no = mobile_no;
	}
	public String getBlood_group() {
		return blood_group;
	}
	public void setBlood_group(String blood_group) {
		this.blood_group = blood_group;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getDistrict_id() {
		return district_id;
	}
	public void setDistrict_id(int district_id) {
		this.district_id = district_id;
	}
	public int getTaluka_id() {
		return taluka_id;
	}
	public void setTaluka_id(int taluka_id) {
		this.taluka_id = taluka_id;
	}
	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	public int getUser_age() {
		return user_age;
	}
	public void setUser_age(int user_age) {
		this.user_age = user_age;
	}
	
	@Override
	public String toString() {
		return "UserModal [user_name=" + user_name + ", password=" + password + ", full_name=" + full_name
				+ ", organization_name=" + organization_name + ", email_id=" + email_id + ", mobile_no=" + mobile_no
				+ ", blood_group=" + blood_group + ", address=" + address + ", gender=" + gender + ", id=" + id
				+ ", district_id=" + district_id + ", taluka_id=" + taluka_id + ", role=" + role + ", user_age="
				+ user_age + "]";
	}
	
}
