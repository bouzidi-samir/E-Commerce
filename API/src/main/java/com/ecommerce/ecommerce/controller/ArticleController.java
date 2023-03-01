package com.ecommerce.ecommerce.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerce.dto.ArticleDto;
import com.ecommerce.ecommerce.service.ArticleSevice;
import lombok.AllArgsConstructor;
import java.util.List;

@RestController
@RequestMapping("/article")
@AllArgsConstructor
public class ArticleController {
    
    private final ArticleSevice articleService;
   
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<ArticleDto> findAll() {
        return articleService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public ArticleDto getById(@PathVariable int id) {
        return articleService.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ArticleDto addProduct(@RequestBody ArticleDto articleDto) {
        return articleService.save(articleDto);
    }
}
