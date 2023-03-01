package com.ecommerce.ecommerce.model;

import java.io.Serializable;
import java.util.Date;
import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.GeneratedValue;
import lombok.Data;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Data
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class AbstractEntity implements Serializable {
    
    @Id
    @GeneratedValue
    private Integer id;

    @CreationTimestamp
    @CreatedDate
    @Column(name = "creationDate",  updatable = false)
    @JsonIgnore
    private Date creationDate;

    @UpdateTimestamp
    @LastModifiedDate
    @Column(name = "updateDate")
    @JsonIgnore
    private Date lastUpdateDate;
}
