package com.ecommerce.ecommerce.repository;

import com.ecommerce.ecommerce.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository  extends JpaRepository<Client, Integer> {
    
}
