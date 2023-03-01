package com.ecommerce.ecommerce.dto;

import lombok.Builder;
import lombok.Data;
import java.math.BigDecimal;
import com.ecommerce.ecommerce.model.Article;;


@Builder
@Data
public class ArticleDto {

    private Integer id;

    private String nom;

    private String description;

    private String image_url;
    
    private BigDecimal prix;

    public static ArticleDto fromEntity(Article article) {
        if (article == null)
            return null;
        return ArticleDto.builder()
            .id(article.getId())
            .nom(article.getNom())
            .description(article.getDescription())
            .image_url(article.getImage())
            .prix(article.getPrix())
            .build();
    }

    public static Article toEntity( ArticleDto articleDto ) {
        Article article = new Article();
        article.setId(articleDto.getId());
        article.setNom(articleDto.getNom());
        article.setDescription(articleDto.getDescription());
        article.setImage(articleDto.getImage_url());
        article.setPrix(articleDto.getPrix());
        return article;
    }
}
