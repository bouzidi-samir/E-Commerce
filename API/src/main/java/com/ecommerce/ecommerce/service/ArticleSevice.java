package com.ecommerce.ecommerce.service;

import com.ecommerce.ecommerce.dto.ArticleDto;
import java.util.List;



public interface ArticleSevice {
    
    List<ArticleDto> findAll();

    ArticleDto findById(Integer id);

    ArticleDto save(ArticleDto dto);

    void delete(Integer id);

}
