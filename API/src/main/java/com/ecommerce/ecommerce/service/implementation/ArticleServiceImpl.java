package com.ecommerce.ecommerce.service.implementation;

import com.ecommerce.ecommerce.service.ArticleSevice;
import com.ecommerce.ecommerce.dto.ArticleDto;
import com.ecommerce.ecommerce.repository.ArticleRepository;
import com.ecommerce.ecommerce.validator.ArticleValidator;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements ArticleService {
    
    private ArticleRepository articleRepository;
    
    @Autowired
    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }


    @Override
    public List<ArticleDto> findAll() {
        return null;
    }

    @Override
    public ArticleDto findById(Integer id) {
        return null;
    }

    @Override
    public ArticleDto save(ArticleDto dto) {

        return dto;
    }

    @Override
    public void delete(Integer id) {
        
    }
}
