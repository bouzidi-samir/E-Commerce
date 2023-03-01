package com.ecommerce.ecommerce.service.implementation;

import com.ecommerce.ecommerce.service.ArticleSevice;
import com.ecommerce.ecommerce.dto.ArticleDto;
import com.ecommerce.ecommerce.model.Article;
import com.ecommerce.ecommerce.repository.ArticleRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleServiceImpl implements  ArticleSevice {
    
    private ArticleRepository articleRepository;
    
    @Autowired
    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public List<ArticleDto> findAll() {
       return articleRepository.findAll().stream()
                .map(ArticleDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public ArticleDto findById(Integer id) {
        Optional<Article> article = articleRepository.findById(id);
        return  ArticleDto.fromEntity(article.get());
    }

    @Override
    public ArticleDto save(ArticleDto dto) {
        return ArticleDto.fromEntity(
            articleRepository.save(
                ArticleDto.toEntity(dto)
            )
        );
    }

    @Override
    public void delete(Integer id) {
        
    }
}
