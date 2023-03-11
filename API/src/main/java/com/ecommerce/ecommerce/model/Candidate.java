package com.ecommerce.ecommerce.model;

import com.ecommerce.ecommerce.model.AbstractEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode( callSuper = true )
@Entity
@Table(name = "candidate")
public class Candidate {

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String description;


    @Column(name = "image_url")
    private String image;

    @Column(name = "prix")
    private BigDecimal prix;
    
}