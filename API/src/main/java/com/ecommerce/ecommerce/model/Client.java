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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode( callSuper = true )
@Entity
@Table(name = "client")
public class Client extends AbstractEntity {

    @Column
    private String nom;

    
}
