package com.team.bloodseva.dao;

import java.util.WeakHashMap;

import org.springframework.stereotype.Repository;

import com.team.bloodseva.modal.RequestModal;
import com.team.bloodseva.modal.UserModal;

@Repository
public interface RestApiDao {
	
	@SuppressWarnings("rawtypes")
	WeakHashMap getDistrict();

	@SuppressWarnings("rawtypes")
	WeakHashMap getTaluka(int id);

	@SuppressWarnings("rawtypes")
	WeakHashMap getRole();

	@SuppressWarnings("rawtypes")
	WeakHashMap getGender();

	@SuppressWarnings("rawtypes")
	WeakHashMap getBloodGrpup();

	@SuppressWarnings("rawtypes")
	WeakHashMap getBloodStock();

	@SuppressWarnings("rawtypes")
	WeakHashMap getSearch(UserModal userModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap addRequest(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getRequestList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap updateRequest(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getAllRequestList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getBloodBankList();

	@SuppressWarnings("rawtypes")
	WeakHashMap updateStock(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getAllStockList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getRequestHistoryList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getAllRequestHistoryList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap addCampaignRequest(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap updateCampaignRequest(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getCampaignRequestList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getCampaignRequestHistoryList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getAllCampaignRequestList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getAllCampaignRequestHistoryList(RequestModal requestModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap getAllRequestStatusList();

	@SuppressWarnings("rawtypes")
	WeakHashMap getAllCampaignRequestStatusList();

	@SuppressWarnings("rawtypes")
	WeakHashMap getAllStockListBankWise();

}
