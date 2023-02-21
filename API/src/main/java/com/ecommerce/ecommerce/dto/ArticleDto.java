package com.ecommerce.ecommerce.dto;

import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;


@Builder
@Data
public class ArticleDto {

    private Integer id;

    private String nom;

    private String decription;
    
    private BigDecimal prix;
}
