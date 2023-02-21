package com.ecommerce.ecommerce.repository;

import com.ecommerce.ecommerce.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Integer, Article>  {
    


}
