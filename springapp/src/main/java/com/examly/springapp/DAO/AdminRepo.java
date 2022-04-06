package com.example.DAO;

import com.example.model.AdminModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AdminRepo extends JpaRepository<AdminModel,String>{
    public AdminModel findByEmail(String email);
}