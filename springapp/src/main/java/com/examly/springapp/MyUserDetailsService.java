package com.example;

import com.example.DAO.AdminRepo;
import com.example.DAO.UserRepo;
import com.example.model.AdminModel;
import com.example.model.UserModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepo userRepo;

    @Autowired
    AdminRepo adminRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User finalUser =new User();

		UserModel user=userRepo.findByUsername(username);
        AdminModel admin=adminRepo.findByEmail(username);
		if(user==null && admin==null)
			throw new UsernameNotFoundException("404!!!!!");
        if(user!=null)
		{
            finalUser.setUsername(user.getUsername());
            finalUser.setPassword(user.getPassword());
            finalUser.setRole(user.getUserRole());
            return new UserPrincipal(finalUser);
        }
        finalUser.setUsername(admin.getEmail());
        finalUser.setPassword(admin.getPassword());
        finalUser.setRole(admin.getUserRole());
        return new UserPrincipal(finalUser);
	}

}
