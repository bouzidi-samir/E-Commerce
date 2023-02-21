package com.ecommerce.ecommerce.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ClientDto {

    private Integer id;
    
    private String nom;
}
