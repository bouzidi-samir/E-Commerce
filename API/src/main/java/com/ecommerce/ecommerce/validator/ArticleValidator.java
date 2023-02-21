package com.ecommerce.ecommerce.validator;

import java.util.ArrayList;
import java.util.List;
import com.ecommerce.ecommerce.dto.ArticleDto;

public class ArticleValidator {
    
    public static List<String> validate(ArticleDto articleDto) {
        List<String> errorList = new ArrayList<>(); 
        
        if (articleDto == null || articleDto.getNom().length() < 1)  {
            errorList.add("Merci de renseigner tous les champs");
        }
        return errorList;

    }
}
